/* PUSYA WORLD для SillyTavern: переходник с API Tavo на API Таверны.
   Окно, ядро и логика перед ответом лежат в panel.js (собирается из src/ командой node сборка.js). */
import * as ST from '../../../../script.js';
import * as EXT from '../../../extensions.js';
import * as WI from '../../../world-info.js';

const MODULE = 'pusyaworld';
const PROMPT_TAG = 'pusya_world';
const NAME = 'PUSYA WORLD';
const BASE = (() => {
    try { return new URL('.', import.meta.url).pathname; } catch { return '/scripts/extensions/third-party/SillyTavern-PusyaWorld/'; }
})();
const ctx = () => SillyTavern.getContext();

function store() {
    const es = EXT.extension_settings || ctx().extensionSettings;
    if (!es[MODULE]) es[MODULE] = {};
    const s = es[MODULE];
    if (!s.vars) s.vars = {};
    return s;
}
function saveSettings() { (ST.saveSettingsDebounced || ctx().saveSettingsDebounced)?.(); }

function locale() {
    let l = '';
    try { l = String(localStorage.getItem('language') || navigator.language || ''); } catch {}
    return /^zh/i.test(l) ? 'zh-CN' : /^(ru|uk|be|kk)/i.test(l) ? 'ru' : 'en';
}
function t(k, p) {
    const D = window.__PWL_I18N || {};
    let s = (D[locale()] && D[locale()][k]) || (D.en && D.en[k]) || k;
    if (p) s = String(s).replace(/\{(\w+)\}/g, (m, n) => (n in p ? p[n] : m));
    return s;
}

/* отступы: верхняя панель и поле ввода Таверны, чтобы окно и кнопка их не перекрывали */
const insetWatchers = [];
function insets() {
    const top = document.getElementById('top-bar');
    const form = document.getElementById('form_sheld');
    const H = window.innerHeight;
    return {
        topBar: top ? Math.round(top.getBoundingClientRect().bottom) : 40,
        bottomInput: form ? Math.max(0, Math.round(H - form.getBoundingClientRect().top)) : 70,
    };
}
function applyInsets() {
    const i = insets();
    document.documentElement.style.setProperty('--tavo-inset-top-bar', i.topBar + 'px');
    document.documentElement.style.setProperty('--tavo-inset-bottom-input', i.bottomInput + 'px');
    for (const f of insetWatchers) { try { f(i); } catch {} }
}

function stMessages(arr) {
    return (arr || []).filter((m) => m && !m.is_system).map((m, i) => ({
        id: i,
        name: String(m.name || ''),
        role: m.is_user ? 'user' : 'assistant',
        content: String(m.mes || ''),
    }));
}
function fire(name, detail) {
    const d = Object.assign({ at: Date.now() + ':' + Math.random().toString(36).slice(2, 7) }, detail || {});
    try { window.dispatchEvent(new CustomEvent(name, { detail: d })); } catch {}
}
/* герои чата: номер карточки в списке Таверны и имя; в групповом чате — все участники */
function charList() {
    const c = ctx(), all = c.characters || [];
    if (c.groupId) {
        const g = (c.groups || []).find((x) => x.id === c.groupId);
        const list = ((g && g.members) || []).map((av) => { const i = all.findIndex((ch) => ch.avatar === av); return i >= 0 ? { id: i, name: all[i].name } : null; }).filter(Boolean);
        if (list.length) return list;
    }
    const i = c.characterId != null ? +c.characterId : -1;
    if (i >= 0 && all[i]) return [{ id: i, name: all[i].name }];
    return c.name2 ? [{ id: null, name: c.name2 }] : [];
}
function saveMeta() {
    const c = ctx();
    (c.saveMetadataDebounced || c.saveMetadata)?.();
}

/* генерация для Сплетницы: без истории чата, только наш запрос */
async function generate(prompt) {
    const c = ctx();
    const raw = c.generateRaw || ST.generateRaw;
    if (typeof raw === 'function') {
        if (raw.length === 0) return raw({ prompt: String(prompt) });
        return raw(String(prompt), '', false, false, '', null);
    }
    const quiet = c.generateQuietPrompt || ST.generateQuietPrompt;
    if (typeof quiet === 'function') return quiet.length === 0 ? quiet({ quietPrompt: String(prompt) }) : quiet(String(prompt), false, true);
    throw new Error('no generateRaw');
}

const handlers = {};
const tavoLike = {
    plugin: {
        i18n: { get locale() { return locale(); }, t },
        on: (name, fn) => {
            (handlers[name] = handlers[name] || []).push(fn);
            return () => { handlers[name] = (handlers[name] || []).filter((f) => f !== fn); };
        },
        emit: () => {},
        onInputAction: () => {},
        onSidebarAction: () => {},
    },
    chat: {
        current: async () => {
            const c = ctx();
            const id = c.chatId || (c.getCurrentChatId && c.getCurrentChatId());
            if (!id) return null;
            return { id: String(id), name: String(id), persona: { name: c.name1 || '' }, characters: charList() };
        },
    },
    character: {
        get: async (id) => {
            const all = ctx().characters || [];
            const ch = all[+id] || all.find((x) => x && (x.avatar === id || x.name === id));
            return ch ? JSON.parse(JSON.stringify(ch)) : null;
        },
    },
    message: {
        find: async () => stMessages(ctx().chat),
        count: async () => (ctx().chat || []).filter((m) => m && !m.is_system).length,
    },
    variable: {
        get: async (name, scope) => {
            if (scope === 'chat') return ctx().chatMetadata?.[MODULE + ':' + name];
            return store().vars[name];
        },
        set: async (name, value, scope) => {
            if (scope === 'chat') {
                const c = ctx();
                if (!c.chatMetadata || !c.chatId) return;
                c.chatMetadata[MODULE + ':' + name] = value;
                saveMeta();
                return;
            }
            store().vars[name] = value;
            saveSettings();
        },
    },
    lorebook: {
        all: async () => {
            const names = Array.isArray(WI.world_names) ? WI.world_names : [];
            return names.map((n) => ({ id: n, name: n }));
        },
        get: async (id) => {
            const load = WI.loadWorldInfo || ctx().loadWorldInfo;
            return typeof load === 'function' ? await load(String(id)) : null;
        },
    },
    file: {
        export: async (name, text) => {
            const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 5000);
        },
    },
    input: {
        set: (text) => {
            const ta = document.getElementById('send_textarea');
            if (!ta) throw new Error('no input');
            ta.value = String(text);
            ta.dispatchEvent(new Event('input', { bubbles: true }));
            try { ta.focus(); } catch {}
        },
    },
    generate: (prompt) => generate(prompt),
    utils: { toast: (m) => toastr.info(String(m), NAME) },
    ui: {
        getInsets: () => insets(),
        onInsetsChanged: (f) => { if (typeof f === 'function') insetWatchers.push(f); },
    },
};

/* перед ответом: та же логика, что в Tavo (время, справка, новости, режиссёр) → скрытая вставка в чат */
const SRC = { normal: 'reply', undefined: 'reply', regenerate: 'regenerate', swipe: 'swipe', continue: 'continue' };
function setPrompt(text) {
    const types = ST.extension_prompt_types || {}, roles = ST.extension_prompt_roles || {};
    const set = ST.setExtensionPrompt || ctx().setExtensionPrompt;
    if (typeof set === 'function') set(PROMPT_TAG, text || '', types.IN_CHAT ?? 1, 0, false, roles.SYSTEM ?? 0);
}
globalThis.pusyaWorldBeforeGenerate = async (chat, contextSize, abort, type) => {
    const src = SRC[String(type)];
    if (!src) { setPrompt(''); return; }
    const list = handlers['generation:prepare'] || [];
    const ev = { text: '', source: { name: src } };
    try { for (const f of list) await f(ev); } catch (e) { console.warn('[' + NAME + ']', e); }
    setPrompt(ev.text);
};

function mountDrawer() {
    const target = $('#extensions_settings2').length ? '#extensions_settings2' : '#extensions_settings';
    const html = `
<div class="inline-drawer" id="pwl_root">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b>🌳 ${NAME}</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content">
    <div class="pwlx">
      <div class="pwlx-note">${t('st.info')}</div>
      <div class="pwlx-row"><button class="pwlx-b" id="pwlx_open">${t('actions.open')}</button></div>
      <div class="pwlx-row">
        <button class="pwlx-b pwlx-ghost" id="pwlx_dock">${t('st.dock')}</button>
        <button class="pwlx-b pwlx-ghost" id="pwlx_win">${t('ui.win.reset')}</button>
      </div>
      <div class="pwlx-note">${t('settings.privacy')}</div>
    </div>
  </div>
</div>`;
    $(target).append(html);
    $('#pwlx_open').on('click', () => fire('pusya-world:open'));
    $('#pwlx_dock').on('click', () => { try { window.__pwl_panel?.resetDock?.(); } catch {} });
    $('#pwlx_win').on('click', () => { try { window.__pwl_panel?.resetWin?.(); } catch {} });
}
function mountWand() {
    const menu = document.getElementById('extensionsMenu');
    if (!menu || document.getElementById('pwl_wand')) return;
    const el = document.createElement('div');
    el.id = 'pwl_wand';
    el.className = 'list-group-item flex-container flexGap5 interactable';
    el.tabIndex = 0;
    el.innerHTML = '<div class="fa-solid fa-tree extensionsMenuExtensionButton"></div><span>' + NAME + '</span>';
    el.addEventListener('click', () => { fire('pusya-world:open'); try { $('#extensionsMenu').hide(); } catch {} });
    menu.appendChild(el);
}

function loadPanel() {
    return new Promise((resolve, reject) => {
        const sc = document.createElement('script');
        sc.src = BASE + 'panel.js';
        sc.onload = resolve;
        sc.onerror = () => reject(new Error('panel.js not found at ' + BASE));
        document.head.appendChild(sc);
    });
}

/* пометки дня <!--pwl:day N--> Таверна показывает текстом — прячем их в чате */
function hideMarks() {
    document.querySelectorAll('#chat .mes .mes_text').forEach((el) => {
        if (!el.innerHTML.includes('pwl:')) return;
        const out = el.innerHTML.replace(/&lt;!--\s*pwl:[\s\S]*?--&gt;/g, '');
        if (out !== el.innerHTML) el.innerHTML = out;
    });
}
let refreshTimer = null;
function refresh() {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => { hideMarks(); fire('pusya-world:refresh'); }, 80);
}
let msgTimer = null;
function onMessage() {
    refresh();
    clearTimeout(msgTimer);
    msgTimer = setTimeout(() => { for (const f of handlers['message:added'] || []) { try { f({}); } catch {} } }, 300);
}

jQuery(async () => {
    store();
    window.__pwl_tavo = tavoLike;
    applyInsets();
    window.addEventListener('resize', applyInsets);
    try { window.visualViewport?.addEventListener('resize', applyInsets); } catch {}
    try {
        const ro = new ResizeObserver(applyInsets);
        for (const id of ['top-bar', 'form_sheld']) { const n = document.getElementById(id); if (n) ro.observe(n); }
    } catch {}

    try { await loadPanel(); } catch (e) {
        console.error('[' + NAME + ']', e);
        toastr.error(t('st.noPanel'), NAME);
        return;
    }
    mountDrawer();
    mountWand();

    const es = ST.eventSource || ctx().eventSource, et = ST.event_types || ctx().eventTypes || ctx().event_types || {};
    for (const name of ['CHAT_CHANGED', 'CHARACTER_MESSAGE_RENDERED', 'USER_MESSAGE_RENDERED', 'MESSAGE_UPDATED', 'MESSAGE_EDITED',
        'MESSAGE_SWIPED', 'MESSAGE_DELETED', 'GENERATION_ENDED', 'MORE_MESSAGES_LOADED']) {
        if (es && et[name]) es.on(et[name], refresh);
    }
    for (const name of ['CHARACTER_MESSAGE_RENDERED', 'MESSAGE_EDITED', 'MESSAGE_SWIPED']) {
        if (es && et[name]) es.on(et[name], onMessage);
    }
    if (es && et.CHAT_CHANGED) es.on(et.CHAT_CHANGED, () => setPrompt(''));
    refresh();
    console.log('[' + NAME + '] loaded');
});
