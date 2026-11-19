(function(){var o=document.getElementById("pwl-style");if(o)o.remove();var s=document.createElement("style");s.id="pwl-style";s.textContent="#pwl-dock,#pwl-win{--card:rgba(214,222,255,.05);--card2:rgba(214,222,255,.1);--ln:rgba(200,210,255,.1);--ln2:rgba(200,210,255,.2);--tx:rgba(246,244,255,.95);--tx2:rgba(214,214,236,.72);--tx3:rgba(200,200,226,.5);--acc:#9a7a36;--acc2:#d9b765;--gold:#e6c36f;--grn:#5fae8c;--red:#f06a6a;--f:#d98aa8;--m:#7fa6e0;--x:#a59bc4}\n#pwl-dock{position:fixed;z-index:2147483000;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:none;border:0;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none;-webkit-tap-highlight-color:transparent;box-sizing:border-box;color:#ecd08a}\n#pwl-dock svg{width:34px;height:34px;fill:rgba(20,22,40,.55);stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 1px 2px rgba(0,0,0,.85)) drop-shadow(0 0 1px rgba(0,0,0,.6));pointer-events:none}\n#pwl-back{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;background:rgba(0,0,0,.2);z-index:2147483640;display:none}\n#pwl-back.on{display:block}\n#pwl-win{position:fixed;z-index:2147483641;left:50vw;top:calc(100vh - var(--tavo-inset-bottom-input,0px) - 10px);top:calc(100dvh - var(--tavo-inset-bottom-input,0px) - 10px);transform:translate(-50%,-100%);width:min(380px,calc(100vw - 16px));max-height:min(78vh,calc(100vh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px));max-height:min(78dvh,calc(100dvh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px));display:none;flex-direction:column;border-radius:24px;overflow:hidden;border:1px solid var(--ln2);background:linear-gradient(160deg,rgba(30,32,56,.96) 0%,rgba(20,21,40,.97) 55%,rgba(13,14,28,.98) 100%);-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);box-shadow:0 24px 70px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.06);font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;color:var(--tx);-webkit-tap-highlight-color:transparent;text-align:left;line-height:1.35}\n#pwl-win *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\n#pwl-win.tall{height:min(78vh,calc(100vh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px));height:min(78dvh,calc(100dvh - var(--tavo-inset-top-bar,0px) - var(--tavo-inset-bottom-input,0px) - 24px))}\n#pwl-win.on{display:flex;animation:pwl-pop .22s ease}\n@keyframes pwl-pop{from{opacity:0;transform:translate(-50%,calc(-100% + 12px)) scale(.97)}to{opacity:1;transform:translate(-50%,-100%)}}\n@media (prefers-reduced-motion:reduce){#pwl-win.on{animation:none}}\n.pwl-hd{display:flex;align-items:center;gap:8px;padding:12px 12px 6px 14px;flex-shrink:0}\n.pwl-hd b{flex:1;min-width:0;font-size:10px;letter-spacing:.18em;color:var(--tx2);text-transform:uppercase;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0;background:var(--gold);box-shadow:0 0 8px var(--gold)}\n.pwl-dot.off{background:var(--tx3);box-shadow:none}\n.pwl-ibtn{width:30px;height:30px;border-radius:50%;border:1px solid var(--ln2);background:var(--card2);display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;flex-shrink:0;color:var(--tx);user-select:none;position:relative;touch-action:manipulation}\n.pwl-ibtn::after{content:\"\";position:absolute;inset:-7px}\n.pwl-ibtn:active{transform:scale(.93)}\n.pwl-body{flex:1;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:6px 12px 8px;display:flex;flex-direction:column;gap:8px}\n.pwl-body>*{flex-shrink:0}\n.pwl-foot{text-align:center;font-size:8.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--tx3);padding:4px 0 8px;flex-shrink:0}\n.pwl-status{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:16px;background:var(--card);border:1px solid var(--ln);font-size:11.5px;line-height:1.35;min-height:34px;color:var(--tx2);cursor:pointer}\n.pwl-status.armed{background:rgba(154,122,54,.2);border-color:rgba(217,183,101,.55);color:var(--tx)}\n.pwl-sttx{flex:1;min-width:0}\n.pwl-sub{margin:6px 4px 0;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.2em;color:var(--tx3)}\n.pwl-hint{font-size:11px;line-height:1.45;color:var(--tx2);margin:0 4px}\n.pwl-card{border-radius:16px;background:var(--card);border:1px solid var(--ln);overflow:hidden}\n.pwl-pad{padding:8px 6px}\n.pwl-row{display:flex;align-items:center;gap:9px;padding:8px 11px;min-height:44px;cursor:pointer;user-select:none;min-width:0}\n.pwl-row+.pwl-row{border-top:1px solid var(--ln)}\n.pwl-row:active{background:var(--card2)}\n.pwl-row.dim{opacity:.5;cursor:default}\n.pwl-lb{flex:1;min-width:0;font-size:12.5px;line-height:1.3;word-break:break-word}\n.pwl-lb small{display:block;font-size:10.5px;color:var(--tx2);margin-top:1px}\n.pwl-lb small.pwl-one{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-seen{color:var(--tx3)!important;font-size:9.5px!important}\n.pwl-seen.now{color:var(--gold)!important}\n.pwl-seen.long{color:#e8a0a0!important}\n.pwl-bd{font-size:11px}\n.pwl-ava{width:32px;height:32px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#fff;background:var(--x);border:1px solid rgba(255,255,255,.2)}\n.pwl-ava.f{background:linear-gradient(150deg,var(--f),#8a4a68)}\n.pwl-ava.m{background:linear-gradient(150deg,var(--m),#3e5c8e)}\n.pwl-ava.x{background:linear-gradient(150deg,var(--x),#5a527a)}\n.pwl-ava.dead{filter:grayscale(1);opacity:.6}\n.pwl-ic{font-size:16px;width:22px;text-align:center;flex-shrink:0}\n.pwl-cnt{font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;background:var(--card2);color:var(--tx2);flex-shrink:0}\n.pwl-off{width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:11px;color:var(--tx2);flex-shrink:0;cursor:pointer}\n.pwl-off:active{background:var(--card2)}\n.pwl-pin{font-size:13px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0;cursor:pointer;opacity:.28;filter:grayscale(1)}\n.pwl-pin.on{opacity:1;filter:none;background:rgba(217,183,101,.18)}\n.pwl-pin.big{width:38px;height:38px;font-size:16px;border:1px solid var(--ln2)}\n.pwl-sw{position:relative;width:38px;height:22px;border-radius:11px;background:rgba(255,255,255,.14);flex-shrink:0;transition:background .15s ease}\n.pwl-sw::after{content:\"\";position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#eceaf6;transition:left .15s ease}\n.pwl-sw.on{background:var(--acc)}\n.pwl-sw.on::after{left:18px;background:#fff}\n.pwl-chips{display:flex;flex-wrap:wrap;gap:6px}\n.pwl-chips.pwl-scroll{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:1px}\n.pwl-chips.pwl-scroll::-webkit-scrollbar{display:none}\n.pwl-chip{font-size:10.5px;font-weight:700;padding:6px 11px;border-radius:999px;border:1px solid transparent;background:var(--card2);color:var(--tx2);cursor:pointer;flex-shrink:0;user-select:none;white-space:nowrap}\n.pwl-chip.on{color:#fff;background:var(--acc);border-color:var(--acc2)}\n.pwl-row2{display:flex;gap:7px;align-items:flex-end}\n.pwl-col{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}\n.pwl-btn{min-width:0;padding:10px;border-radius:999px;border:1px solid var(--ln2);background:var(--card2);color:var(--tx);font-size:12px;font-weight:600;text-align:center;cursor:pointer;user-select:none;display:block}\n.pwl-row2 .pwl-btn{flex:1}\n.pwl-btn:active{transform:scale(.97)}\n.pwl-btn.main{background:var(--acc);color:#fff;border-color:transparent;font-weight:700}\n.pwl-btn.danger{background:rgba(240,106,106,.18);border-color:rgba(240,106,106,.4);color:#ffd6d6}\n.pwl-empty{padding:16px 14px;border-radius:16px;background:var(--card);border:1px dashed var(--ln2);font-size:12px;line-height:1.5;color:var(--tx2);text-align:center}\n.pwl-warn{padding:9px 12px;border-radius:14px;background:rgba(240,106,106,.13);border:1px solid rgba(240,106,106,.4);font-size:12px;line-height:1.4;color:#ffd0d0}\n.pwl-busy{padding:9px 12px;border-radius:14px;background:var(--card2);font-size:12px;color:var(--gold);text-align:center}\n.pwl-l{display:block;font-size:11px;color:var(--tx2);margin:2px 4px -3px}\n#pwl-win input,#pwl-win textarea,#pwl-win select{display:block;width:100%;background:rgba(0,0,0,.26);border:1px solid var(--ln2);border-radius:14px;color:var(--tx);padding:9px 12px;font:12.5px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,sans-serif;outline:none;-webkit-appearance:none;appearance:none}\n#pwl-win select option{background:#1c1e36;color:#fff}\n#pwl-win textarea{resize:none}\n#pwl-win input:focus,#pwl-win textarea:focus,#pwl-win select:focus{border-color:var(--acc2)}\n#pwl-win ::placeholder{color:var(--tx3)}\n.pwl-hero{display:flex;align-items:center;gap:11px;padding:6px 4px 2px}\n.pwl-hero .pwl-ava{width:46px;height:46px;font-size:19px}\n.pwl-hero b{font-size:15px}\n.pwl-prev{border-radius:14px;background:var(--card);border:1px solid var(--ln);padding:9px 12px;font-size:12px}\n.pwl-prev summary{cursor:pointer;color:var(--tx2)}\n.pwl-rels{display:flex;flex-direction:column;gap:5px;margin-top:8px}\n.pwl-rel{font-size:11.5px;color:var(--tx2);cursor:pointer}\n.pwl-rel b{color:var(--tx);font-weight:600}\n.pwl-pre{margin:0;white-space:pre-wrap;word-break:break-word;font:11px/1.45 ui-monospace,Menlo,Consolas,monospace;color:var(--tx2);background:rgba(0,0,0,.25);border-radius:12px;padding:10px;max-height:46vh;overflow:auto}\n.pwl-info{border-radius:14px;background:var(--card);border:1px solid var(--ln);padding:3px 12px;font-size:11px;line-height:1.5;color:var(--tx2)}\n.pwl-info p{margin:7px 0}\n.pwl-ck{width:20px;height:20px;border-radius:6px;border:1px solid var(--ln2);background:rgba(0,0,0,.25);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff}\n.pwl-ck.on{background:var(--acc);border-color:var(--acc2)}\n.pwl-ck.on::before{content:\"✓\"}\n.pwl-tree,.pwl-tree ul{list-style:none;margin:0;padding:0}\n.pwl-tree ul{margin-left:11px;padding-left:10px;border-left:1px solid var(--ln2)}\n.pwl-tree li{margin:2px 0}\n.pwl-tr{padding:4px 2px;font-size:12px;line-height:1.5}\n.pwl-tn{cursor:pointer;padding:2px 7px;border-radius:999px;background:var(--card2);white-space:nowrap;display:inline-block;margin:1px 0}\n.pwl-tn small{color:var(--tx3);font-size:10px}\n.pwl-tn.out{background:none;border:1px dashed var(--ln2);color:var(--tx2)}\n.pwl-tn.ghost{background:none;color:var(--tx3);cursor:default;font-size:10.5px}\n.pwl-tn.dead{text-decoration:line-through;opacity:.6}\n.pwl-ring{color:var(--gold);font-size:12px}\n.pwl-list{max-height:46vh;overflow:auto}\n#pwl-sheet{display:none;position:absolute;inset:0;z-index:5;background:rgba(8,8,18,.72)}\n#pwl-sheet.on{display:flex;align-items:flex-end}\n.pwl-sh{width:100%;max-height:100%;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;background:linear-gradient(170deg,#262848,#16172c);border-radius:22px 22px 0 0;border-top:1px solid var(--ln2);padding:12px 14px 14px;display:flex;flex-direction:column;gap:8px}\n.pwl-sh>*{flex-shrink:0}\n.pwl-shhd{display:flex;align-items:center;gap:8px}\n.pwl-shhd b{flex:1;min-width:0;font-size:14px}\n.pwl-dir{border-radius:16px;border:1px solid rgba(217,183,101,.28);background:linear-gradient(160deg,rgba(154,122,54,.12),rgba(154,122,54,.04));overflow:hidden}\n.pwl-dir.ripe{border-color:var(--acc2);box-shadow:0 0 14px rgba(217,183,101,.18)}\n.pwl-dirhd{display:flex;align-items:baseline;gap:8px;padding:9px 12px 4px}\n.pwl-dirhd b{font-size:12px;font-weight:700;color:var(--gold);flex-shrink:0}\n.pwl-dirhd small{flex:1;min-width:0;text-align:right;font-size:10px;color:var(--tx2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-bar{height:3px;margin:2px 12px 6px;border-radius:2px;background:rgba(255,255,255,.08);overflow:hidden}\n.pwl-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--acc),var(--gold));border-radius:2px;transition:width .3s ease}\n.pwl-dir .pwl-row{border-top:1px solid rgba(217,183,101,.14)}\n.pwl-dir .pwl-hint{margin:0 12px 10px}\n.pwl-row.cue{background:rgba(217,183,101,.14)}\n.pwl-row.cue small{color:var(--gold)}\n.pwl-why{white-space:normal!important;font-size:10px!important;line-height:1.35}\n.pwl-cue{width:34px;height:34px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;border:1px solid rgba(217,183,101,.4);background:rgba(217,183,101,.1)}\n.pwl-cue:active{transform:scale(.92);background:rgba(217,183,101,.3)}\n.pwl-more{text-align:center;font-size:10.5px;font-weight:700;color:var(--tx2);padding:8px;border-top:1px solid rgba(217,183,101,.14);cursor:pointer}\n@keyframes pwl-pulse{0%,100%{filter:drop-shadow(0 1px 2px rgba(0,0,0,.85))}50%{filter:drop-shadow(0 1px 2px rgba(0,0,0,.85)) drop-shadow(0 0 7px rgba(230,195,111,.95))}}\n#pwl-dock.armed svg{animation:pwl-pulse 1.4s ease-in-out infinite}\n#pwl-dock.armed::after{content:\"\";position:absolute;bottom:5px;right:5px;width:12px;height:12px;border-radius:50%;background:var(--gold);border:2px solid rgba(14,14,28,.9)}\n@media (prefers-reduced-motion:reduce){#pwl-dock.armed svg{animation:none}}\n.pwl-clock{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:16px;border:1px solid rgba(217,183,101,.3);background:linear-gradient(160deg,rgba(154,122,54,.14),rgba(154,122,54,.04))}\n.pwl-clock b{font-size:14px;color:var(--gold)}\n.pwl-ev{align-items:flex-start}\n.pwl-ev .pwl-ic{padding-top:1px}\n.pwl-ev.minor{opacity:.55}\n.pwl-bar.sm{margin:5px 0 1px;height:3px}\n/* ═══ новый облик: значки, гербы, плитки, древо, история, переходы ═══ */\n#pwl-win{--serif:\"Cormorant Garamond\",\"Playfair Display\",Georgia,\"Times New Roman\",serif}\n.pwl-svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;display:block}\n.pwl-svg.sm{width:14px;height:14px;opacity:.6}\n.pwl-ibtn .pwl-svg{width:16px;height:16px}\n.pwl-hd b.ttl{font:600 19px/1 var(--serif);letter-spacing:.02em;text-transform:none;color:var(--tx)}\n#pwl-win:not([data-view=\"people\"]) .pwl-hd b{font:600 16px/1.1 var(--serif);letter-spacing:.01em;text-transform:none;color:var(--tx)}\n.pwl-date{display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--gold);padding:5px 9px;border-radius:999px;background:rgba(217,183,101,.1);border:1px solid rgba(217,183,101,.25);cursor:pointer;white-space:nowrap;flex-shrink:0}\n.pwl-date .pwl-svg{width:13px;height:13px}\n.pwl-status .pwl-svg{width:16px;height:16px;color:var(--gold)}\n.pwl-sec{display:flex;align-items:center;gap:10px;margin:8px 4px 0;font:600 13px/1 var(--serif);letter-spacing:.06em;color:var(--gold)}\n.pwl-sec::after{content:\"\";flex:1;height:1px;background:linear-gradient(90deg,rgba(217,183,101,.35),transparent)}\n@keyframes pwl-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}\n@keyframes pwl-pop2{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}\n\n/* плитки людей */\n.pwl-tiles{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.pwl-tile{position:relative;padding:10px 11px;border-radius:18px;cursor:pointer;user-select:none;overflow:hidden;min-height:78px;\n  background:linear-gradient(150deg,color-mix(in srgb,var(--c) 16%,transparent),rgba(255,255,255,.02));border:1px solid color-mix(in srgb,var(--c) 26%,transparent);\n  transition:transform .18s ease,border-color .2s ease,box-shadow .25s ease;animation:pwl-rise .4s ease both;animation-delay:calc(var(--i)*45ms)}\n.pwl-tile:active{transform:scale(.97)}\n.pwl-tile.on{border-color:var(--c);box-shadow:0 0 0 1px var(--c),0 8px 24px color-mix(in srgb,var(--c) 22%,transparent)}\n.pwl-tile.zero{opacity:.55}\n.pwl-tile .ic{width:28px;height:28px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--c);background:color-mix(in srgb,var(--c) 16%,transparent)}\n.pwl-tile .ic .pwl-svg{width:16px;height:16px}\n.pwl-tile b{display:block;margin-top:7px;font-size:12px;font-weight:600}\n.pwl-tile em{position:absolute;top:8px;right:11px;font:600 22px/1 var(--serif);font-style:normal;color:var(--c)}\n.pwl-tile .mini{position:absolute;left:46px;top:14px;display:flex;padding-left:6px}\n.pwl-tile .mini .pwl-face{width:20px;height:20px;font-size:8.5px;margin-left:-6px;box-shadow:0 0 0 1.5px #1a1b30}\n/* шторка */\n.pwl-drawer{display:grid;grid-template-rows:0fr;transition:grid-template-rows .38s cubic-bezier(.2,.8,.2,1),margin .3s ease;margin-top:-8px}\n.pwl-drawer.open{grid-template-rows:1fr;margin-top:0}\n.pwl-drawer>.in{overflow:hidden;min-height:0}\n.pwl-drawer.open>.in{padding:2px 0}\n.pwl-drawer .in.swap .pwl-fc{animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*25ms)}\n.pwl-search{display:flex;align-items:center;gap:8px;padding:0 12px;border-radius:14px;background:rgba(0,0,0,.26);border:1px solid var(--ln2);margin-bottom:8px}\n.pwl-search .pwl-svg{width:15px;height:15px;color:var(--tx3)}\n#pwl-win .pwl-search input{border:0;background:none;padding:9px 0}\n.pwl-faces{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px 4px;padding:10px 6px 4px;border-radius:18px;background:rgba(255,255,255,.03);border:1px solid var(--ln)}\n.pwl-fc{position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;min-width:0;text-align:center;padding-top:4px}\n.pwl-drawer.open .pwl-fc{animation:pwl-rise .32s ease both;animation-delay:calc(60ms + var(--i)*28ms)}\n.pwl-fc:active .pwl-face{transform:scale(.92)}\n.pwl-fc b{font-size:10.5px;font-weight:600;line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-width:100%}\n.pwl-fc small{font-size:9px;color:var(--tx3);line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-width:100%}\n.pwl-fc .pwl-bdg{min-height:16px}\n.pwl-empty2{text-align:center;padding:10px}\n\n/* портреты и значки */\n.pwl-face{width:44px;height:44px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font:600 17px/1 var(--serif);color:#fff;\n  background:linear-gradient(150deg,#a59bc4,#4d4670);box-shadow:0 0 0 2px var(--hc,rgba(255,255,255,.2)),0 4px 12px rgba(0,0,0,.35);transition:transform .15s ease}\n.pwl-face.f{background:linear-gradient(150deg,#dd8fae,#7d3d5e)}\n.pwl-face.m{background:linear-gradient(150deg,#86aee6,#36508a)}\n.pwl-face.dead{filter:grayscale(1) brightness(.75)}\n.pwl-face.out{box-shadow:0 0 0 2px rgba(20,20,36,.9),0 0 0 3.5px var(--hc),0 4px 12px rgba(0,0,0,.35);opacity:.85}\n.pwl-face.big{width:74px;height:74px;font-size:30px;box-shadow:0 0 0 3px var(--hc),0 0 0 7px color-mix(in srgb,var(--hc) 22%,transparent),0 10px 26px rgba(0,0,0,.45)}\n.pwl-bdg{display:flex;gap:2px;height:16px;align-items:center;justify-content:center}\n.pwl-bdg i{width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--c);color:#14142a;box-shadow:0 0 0 1.5px #16172c,0 0 8px color-mix(in srgb,var(--c) 55%,transparent)}\n.pwl-bdg i .pwl-svg{width:10px;height:10px;stroke-width:2.2}\n.pwl-bdg i.more{background:rgba(255,255,255,.18);color:#fff;font:700 8px/1 sans-serif;font-style:normal}\n.pwl-legend{display:flex;flex-wrap:wrap;gap:6px}\n.pwl-bchip{display:inline-flex;align-items:center;gap:5px;padding:4px 9px 4px 5px;border-radius:999px;font-size:10.5px;color:var(--tx2);background:color-mix(in srgb,var(--c) 12%,transparent);border:1px solid color-mix(in srgb,var(--c) 30%,transparent)}\n.pwl-bchip .pwl-svg{width:14px;height:14px;padding:2px;border-radius:50%;background:var(--c);color:#14142a;stroke-width:2.2}\n\n/* гербы и дома */\n.pwl-crest{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--cs);height:calc(var(--cs) * 1.08);flex-shrink:0}\n.pwl-crest svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 3px 6px rgba(0,0,0,.4))}\n.pwl-crest .sh{fill:var(--hc);stroke:var(--gold);stroke-width:1.1}\n.pwl-crest .hl{fill:none;stroke:rgba(255,255,255,.22);stroke-width:.9}\n.pwl-crest b{position:relative;font:700 calc(var(--cs) * .42)/1 var(--serif);color:#fff6dc;text-shadow:0 1px 2px rgba(0,0,0,.5);margin-top:-6%}\n.pwl-houses{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.pwl-htile{display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;padding:12px 8px 11px;border-radius:18px;cursor:pointer;user-select:none;\n  background:radial-gradient(120% 90% at 50% 0%,color-mix(in srgb,var(--hc) 30%,transparent),rgba(255,255,255,.02) 70%);border:1px solid color-mix(in srgb,var(--hc) 40%,transparent);\n  transition:transform .18s ease;animation:pwl-rise .45s ease both;animation-delay:calc(120ms + var(--i)*50ms)}\n.pwl-htile:active{transform:scale(.96)}\n.pwl-htile b{font:600 14px/1.15 var(--serif)}\n.pwl-htile small{font-size:9.5px;color:var(--tx3);line-height:1.3}\n.pwl-htile.add{background:none;border:1px dashed var(--ln2);color:var(--tx3);justify-content:center;animation-delay:0s}\n.pwl-htile.add .pwl-svg{width:22px;height:22px}\n.pwl-htile.add b{font:600 11.5px/1.2 -apple-system,\"Segoe UI\",sans-serif}\n.pwl-hhero{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:20px;background:radial-gradient(140% 120% at 0% 0%,color-mix(in srgb,var(--hc) 34%,transparent),rgba(255,255,255,.02) 70%);border:1px solid color-mix(in srgb,var(--hc) 40%,transparent)}\n.pwl-hhero>div{min-width:0;display:flex;flex-direction:column;gap:3px}\n.pwl-hhero b{font:600 21px/1.1 var(--serif)}\n.pwl-hhero i{font:italic 13px/1.3 var(--serif);color:var(--gold)}\n.pwl-hhero small{font-size:10.5px;color:var(--tx2)}\n.pwl-chprev{padding:10px 12px;border-radius:18px;background:var(--card);border:1px solid var(--ln);cursor:pointer}\n.pwl-chprev .hd{display:flex;align-items:center;gap:8px;color:var(--gold)}\n.pwl-chprev .hd b{flex:1;font:600 14px/1 var(--serif)}\n.pwl-chprev p{margin:7px 0 0;font-size:11.5px;color:var(--tx2);display:flex;gap:7px;line-height:1.35}\n.pwl-chprev p.mut{color:var(--tx3)}\n\n/* древо */\n.pwl-treebox{overflow:auto;-webkit-overflow-scrolling:touch;border-radius:20px;background:radial-gradient(90% 70% at 50% 0%,rgba(217,183,101,.08),transparent 70%),rgba(0,0,0,.18);border:1px solid var(--ln);max-height:58vh;overscroll-behavior:contain}\n.pwl-canvas{position:relative;margin:0 auto}\n.pwl-lines{position:absolute;inset:0;overflow:visible}\n.pwl-lines path{fill:none;stroke:rgba(217,183,101,.5);stroke-width:1.5;stroke-dasharray:1;stroke-dashoffset:1;animation:pwl-draw .9s ease forwards .2s}\n.pwl-lines path.rg{stroke:rgba(230,195,111,.8);stroke-width:2}\n@keyframes pwl-draw{to{stroke-dashoffset:0}}\n.pwl-node{position:absolute;width:86px;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;text-align:center;animation:pwl-pop2 .4s cubic-bezier(.3,1.4,.5,1) both;animation-delay:calc(var(--i)*55ms)}\n.pwl-node .av{position:relative;margin-top:1px}\n.pwl-node .pwl-face{width:50px;height:50px;font-size:20px}\n.pwl-node .hd{position:absolute;top:-7px;left:-5px;width:18px;height:18px;border-radius:50%;background:#e6c36f;color:#2a1e08;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 1.5px #16172c}\n.pwl-node .hd .pwl-svg{width:11px;height:11px;stroke-width:2.2}\n.pwl-node b{font-size:10.5px;font-weight:600;line-height:1.2;max-width:84px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-shadow:0 1px 3px #0e0f1d}\n.pwl-node small{font-size:9px;color:var(--tx3);margin-top:-2px}\n.pwl-node.out b{color:var(--tx2);font-weight:500}\n.pwl-node:active .pwl-face{transform:scale(.92)}\n.pwl-wed{position:absolute;width:16px;height:16px;color:var(--gold);background:#1b1c32;border-radius:50%;display:flex;align-items:center;justify-content:center;animation:pwl-pop2 .4s ease both .6s}\n.pwl-wed .pwl-svg{width:12px;height:12px}\n.pwl-gh{position:absolute;width:60px;text-align:center;font-size:9px;color:var(--tx3);font-style:italic;animation:pwl-rise .4s ease both}\n\n/* история человека */\n.pwl-shero{display:flex;align-items:center;gap:16px;padding:16px 14px 14px;border-radius:22px;background:radial-gradient(130% 120% at 0% 0%,color-mix(in srgb,var(--hc) 30%,transparent),rgba(255,255,255,.02) 70%);border:1px solid color-mix(in srgb,var(--hc) 36%,transparent)}\n.pwl-shero .nm{min-width:0;display:flex;flex-direction:column;gap:4px;align-items:flex-start}\n.pwl-shero b{font:600 22px/1.1 var(--serif)}\n.pwl-shero small{font-size:11px;color:var(--tx2)}\n.pwl-shero .hs{display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--gold);cursor:pointer;padding:3px 9px 3px 5px;border-radius:999px;background:rgba(0,0,0,.22)}\n.pwl-btn.cue{background:rgba(217,183,101,.1);border-color:rgba(217,183,101,.45);color:var(--gold)}\n.pwl-quote{margin:0;padding:8px 12px;border-left:2px solid var(--gold);font:italic 14px/1.45 var(--serif);color:var(--tx2);background:rgba(217,183,101,.05);border-radius:0 12px 12px 0}\n.pwl-kin{display:grid;grid-template-columns:1fr 1fr;gap:6px}\n.pwl-kc{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:14px;background:var(--card);border:1px solid var(--ln);cursor:pointer;min-width:0;animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*30ms)}\n.pwl-kc .pwl-face{width:30px;height:30px;font-size:12px;box-shadow:0 0 0 1.5px var(--hc)}\n.pwl-kc>span{min-width:0;display:flex;flex-direction:column}\n.pwl-kc small{font-size:9.5px;color:var(--gold);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-kc b{font-size:11.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-kc.far{opacity:.82}\n.pwl-kc.more{justify-content:center;font-size:11px;color:var(--tx2);grid-column:1/-1}\n.pwl-now{display:flex;flex-direction:column;gap:2px;border-radius:16px;background:var(--card);border:1px solid var(--ln);padding:4px}\n.pwl-now>div{display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:12px;font-size:12px;line-height:1.35}\n.pwl-now>div[data-act]{cursor:pointer}\n.pwl-now>div[data-act]:active{background:var(--card2)}\n.pwl-now i{width:24px;height:24px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--c);background:color-mix(in srgb,var(--c) 15%,transparent);flex-shrink:0}\n.pwl-now i .pwl-svg{width:14px;height:14px}\n.pwl-secret{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:16px;cursor:pointer;background:linear-gradient(150deg,rgba(240,163,90,.12),rgba(255,255,255,.02));border:1px solid rgba(240,163,90,.3)}\n.pwl-secret>i{width:28px;height:28px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#f0a35a;background:rgba(240,163,90,.15);flex-shrink:0}\n.pwl-secret p{margin:0;font-size:12.5px;line-height:1.4;filter:blur(5px);transition:filter .45s ease;user-select:none}\n.pwl-secret.open p,.pwl-secret.out p{filter:none}\n.pwl-secret small{display:block;margin-top:3px;font-size:10px;color:var(--tx3)}\n.pwl-secret.out{background:var(--card);border-color:var(--ln)}\n.pwl-secret.out>i{color:var(--tx2);background:var(--card2)}\n.pwl-goal{display:flex;gap:10px;align-items:center;padding:10px 12px;border-radius:16px;background:linear-gradient(150deg,rgba(180,140,242,.13),rgba(255,255,255,.02));border:1px solid rgba(180,140,242,.3)}\n.pwl-goal.end{opacity:.55}\n.pwl-goal .ring{position:relative;width:34px;height:34px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#b48cf2}\n.pwl-goal .ring::before{content:\"\";position:absolute;inset:0;border-radius:50%;background:conic-gradient(#b48cf2 calc(var(--p) * 1%),rgba(255,255,255,.1) 0);-webkit-mask:radial-gradient(circle,transparent 0 13px,#000 14px);mask:radial-gradient(circle,transparent 0 13px,#000 14px)}\n.pwl-goal .ring .pwl-svg{width:15px;height:15px}\n.pwl-goal p{margin:0;font-size:12.5px}\n.pwl-goal small{font-size:10px;color:var(--tx3)}\n.pwl-tl{position:relative;padding-left:24px}\n.pwl-tl::before{content:\"\";position:absolute;left:9px;top:6px;bottom:6px;width:1px;background:linear-gradient(var(--gold),rgba(217,183,101,.05))}\n.pwl-tl>div{position:relative;padding:4px 0 9px;animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*35ms)}\n.pwl-tl .dot{position:absolute;left:-24px;top:3px;width:19px;height:19px;border-radius:50%;background:#1d1e36;border:1px solid rgba(217,183,101,.45);display:flex;align-items:center;justify-content:center;font-size:10px}\n.pwl-tl p{margin:0;font-size:12px;line-height:1.4}\n.pwl-tl small{display:block;font-size:9.5px;color:var(--tx3);margin-top:1px}\n\n/* переходы между экранами */\n@keyframes pwl-push{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}\n@keyframes pwl-popb{from{opacity:0;transform:translateX(-28px)}to{opacity:1;transform:none}}\n@keyframes pwl-zoom{from{opacity:0;transform:scale(.86)}to{opacity:1;transform:none}}\n.pwl-body.pwl-a-push{animation:pwl-push .34s cubic-bezier(.2,.8,.2,1)}\n.pwl-body.pwl-a-pop{animation:pwl-popb .34s cubic-bezier(.2,.8,.2,1)}\n.pwl-body.pwl-a-zoom{animation:pwl-zoom .42s cubic-bezier(.2,.9,.25,1)}\n@media (prefers-reduced-motion:reduce){\n  .pwl-body[class*=\"pwl-a-\"],.pwl-tile,.pwl-htile,.pwl-fc,.pwl-node,.pwl-kc,.pwl-tl>div,.pwl-wed,.pwl-gh{animation:none!important}\n  .pwl-lines path{animation:none;stroke-dashoffset:0}\n  .pwl-drawer{transition:none}\n}\n/* ═══ хроника и настройки ═══ */\n/* часы мира */\n.pwl-clock2{display:flex;align-items:center;gap:14px;padding:14px;border-radius:22px;position:relative;overflow:hidden;\n  background:radial-gradient(120% 140% at 0% 0%,color-mix(in srgb,var(--sc) 26%,transparent),rgba(255,255,255,.02) 70%);border:1px solid color-mix(in srgb,var(--sc) 38%,transparent)}\n.pwl-clock2 .sg{width:54px;height:54px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--sc);\n  background:color-mix(in srgb,var(--sc) 14%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--sc) 40%,transparent),0 0 24px color-mix(in srgb,var(--sc) 25%,transparent);animation:pwl-breathe 4s ease-in-out infinite}\n.pwl-clock2 .sg .pwl-svg{width:28px;height:28px;stroke-width:1.5}\n@keyframes pwl-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}\n.pwl-clock2 .cd{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\n.pwl-clock2 small{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--tx3)}\n.pwl-clock2 b{font:600 21px/1.15 var(--serif)}\n.pwl-clock2 b::first-letter{text-transform:uppercase}\n.pwl-clock2 .yr{position:relative;display:flex;gap:3px;margin-top:8px;height:5px}\n.pwl-clock2 .yr i{flex:1;border-radius:3px;background:color-mix(in srgb,var(--c) 18%,transparent)}\n.pwl-clock2 .yr i.past{background:color-mix(in srgb,var(--c) 55%,transparent)}\n.pwl-clock2 .yr i.now{background:linear-gradient(90deg,var(--c),color-mix(in srgb,var(--c) 20%,transparent))}\n.pwl-clock2 .yr em{position:absolute;top:-3px;width:11px;height:11px;margin-left:-5.5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--sc),0 0 10px var(--sc);transition:left .6s cubic-bezier(.2,.8,.2,1)}\n.pwl-time{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}\n.pwl-time span{display:flex;flex-direction:column;align-items:center;gap:1px;padding:8px 2px 7px;border-radius:14px;cursor:pointer;user-select:none;font-size:10.5px;color:var(--tx2);\n  background:var(--card);border:1px solid var(--ln);transition:transform .15s ease,background .2s ease}\n.pwl-time span b{font:600 16px/1 var(--serif);color:var(--gold)}\n.pwl-time span:active{transform:scale(.93);background:rgba(217,183,101,.16)}\n\n/* сегментный переключатель */\n.pwl-seg{position:relative;display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));padding:3px;border-radius:14px;background:rgba(0,0,0,.3);border:1px solid var(--ln)}\n.pwl-seg .th{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / var(--n));border-radius:11px;\n  background:linear-gradient(160deg,#e6c36f,#a8823a);box-shadow:0 2px 10px rgba(217,183,101,.3);transform:translateX(calc(var(--k) * 100%));transition:transform .26s cubic-bezier(.2,.8,.2,1)}\n.pwl-seg b{position:relative;z-index:1;text-align:center;padding:7px 3px;font-size:11px;font-weight:600;color:var(--tx2);cursor:pointer;user-select:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .2s ease}\n.pwl-seg b.on{color:#231a06}\n\n/* фильтр видов */\n.pwl-cats{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding:1px 0 2px}\n.pwl-cats::-webkit-scrollbar{display:none}\n.pwl-cats span{display:inline-flex;align-items:center;gap:5px;flex-shrink:0;padding:5px 10px;border-radius:999px;font-size:10.5px;font-weight:600;color:var(--tx2);cursor:pointer;user-select:none;\n  background:rgba(255,255,255,.04);border:1px solid var(--ln);transition:all .2s ease}\n.pwl-cats span .pwl-svg{width:13px;height:13px;color:var(--c)}\n.pwl-cats span.on{color:#fff;background:color-mix(in srgb,var(--c) 26%,transparent);border-color:var(--c)}\n\n/* события */\n.pwl-sec2{display:flex;align-items:center;gap:8px;margin:10px 4px 2px;font:600 13px/1 var(--serif);color:var(--c);letter-spacing:.03em}\n.pwl-sec2 .pwl-svg{width:15px;height:15px}\n.pwl-sec2::after{content:\"\";flex:1;height:1px;background:linear-gradient(90deg,color-mix(in srgb,var(--c) 45%,transparent),transparent)}\n.pwl-evs{display:flex;flex-direction:column;gap:7px}\n.pwl-evc{position:relative;display:flex;gap:10px;align-items:flex-start;padding:10px 10px 10px 10px;border-radius:16px;cursor:pointer;\n  background:linear-gradient(100deg,color-mix(in srgb,var(--c) 10%,transparent),rgba(255,255,255,.02) 55%);border:1px solid color-mix(in srgb,var(--c) 22%,transparent);\n  animation:pwl-rise .32s ease both;animation-delay:calc(var(--i)*30ms);transition:transform .15s ease}\n.pwl-evc:active{transform:scale(.98)}\n.pwl-evc::before{content:\"\";position:absolute;left:0;top:10px;bottom:10px;width:3px;border-radius:0 3px 3px 0;background:var(--c)}\n.pwl-evc.minor{opacity:.6}\n.pwl-evc.fresh{animation:pwl-rise .32s ease both,pwl-glow 2.4s ease 1;animation-delay:calc(var(--i)*30ms),0s}\n@keyframes pwl-glow{0%,60%{box-shadow:0 0 0 1px var(--c),0 0 18px color-mix(in srgb,var(--c) 45%,transparent)}100%{box-shadow:none}}\n.pwl-evc .ei{width:30px;height:30px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:15px;background:color-mix(in srgb,var(--c) 16%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--c) 40%,transparent)}\n.pwl-evc .et{flex:1;min-width:0}\n.pwl-evc p{margin:0;font-size:12.5px;line-height:1.38}\n.pwl-evc .em{display:flex;flex-wrap:wrap;gap:4px 8px;margin-top:4px;font-size:9.5px;color:var(--tx3);align-items:center}\n.pwl-evc .pub{display:inline-flex;align-items:center;gap:3px}\n.pwl-evc .pub .pwl-svg{width:11px;height:11px}\n.pwl-evc .pub.secret{color:#f0a35a}\n.pwl-evc .pub.public{color:#8fc9a8}\n.pwl-evc .heard{display:flex;align-items:center;gap:6px;margin-top:6px;padding:4px 8px 4px 4px;border-radius:999px;background:rgba(116,211,191,.1);border:1px solid rgba(116,211,191,.25);font-size:10px;color:#a8e6d6;width:fit-content;max-width:100%}\n.pwl-evc .heard .pwl-face{width:18px;height:18px;font-size:8px;box-shadow:0 0 0 1px var(--hc)}\n.pwl-evc .heard .pwl-svg{width:14px;height:14px}\n.pwl-evc .heard span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-evc .ew{display:flex;flex-direction:column;gap:3px;flex-shrink:0}\n.pwl-evc .ew .pwl-face{width:24px;height:24px;font-size:10px;box-shadow:0 0 0 1.5px var(--hc)}\n\n/* настройки */\n.pwl-scard{padding:12px;border-radius:20px;background:var(--card);border:1px solid var(--ln);display:flex;flex-direction:column;gap:8px;animation:pwl-rise .35s ease both}\n.pwl-scard .sh{display:flex;align-items:center;gap:9px;color:var(--gold);margin-bottom:2px}\n.pwl-scard .sh .pwl-svg{width:20px;height:20px;padding:4px;box-sizing:content-box;border-radius:10px;background:rgba(217,183,101,.12)}\n.pwl-scard .sh b{font:600 16px/1 var(--serif);color:var(--tx)}\n.pwl-scard .pwl-l{margin:4px 2px -2px}\n.pwl-tog{display:flex;align-items:center;gap:10px;padding:8px 4px;cursor:pointer;user-select:none}\n.pwl-tog+.pwl-tog{border-top:1px solid var(--ln)}\n.pwl-tog>div{flex:1;min-width:0}\n.pwl-tog b{display:block;font-size:12.5px;font-weight:600}\n.pwl-tog small{display:block;font-size:10.5px;color:var(--tx3);margin-top:1px;line-height:1.35}\n.pwl-eras{display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;padding:2px 1px 4px;-webkit-overflow-scrolling:touch}\n.pwl-eras::-webkit-scrollbar{display:none}\n.pwl-eras span{flex-shrink:0;width:76px;display:flex;flex-direction:column;align-items:center;gap:6px;padding:11px 4px 9px;border-radius:16px;cursor:pointer;user-select:none;text-align:center;\n  background:rgba(255,255,255,.03);border:1px solid var(--ln);color:var(--tx2);transition:all .22s ease;animation:pwl-rise .35s ease both;animation-delay:calc(var(--i)*35ms)}\n.pwl-eras span .pwl-svg{width:26px;height:26px;stroke-width:1.4}\n.pwl-eras span b{font-size:10px;font-weight:600;line-height:1.2}\n.pwl-eras span.on{color:var(--gold);background:radial-gradient(100% 100% at 50% 0%,rgba(217,183,101,.24),rgba(217,183,101,.04));border-color:var(--gold);box-shadow:0 6px 18px rgba(217,183,101,.18)}\n.pwl-eras span:active{transform:scale(.95)}\n.pwl-catgrid{display:grid;grid-template-columns:1fr 1fr;gap:6px}\n.pwl-catgrid span{position:relative;display:flex;flex-direction:column;gap:3px;padding:9px 10px;border-radius:14px;cursor:pointer;user-select:none;\n  background:rgba(255,255,255,.03);border:1px solid var(--ln);opacity:.55;transition:all .22s ease;animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*30ms)}\n.pwl-catgrid span.on{opacity:1;background:linear-gradient(150deg,color-mix(in srgb,var(--c) 16%,transparent),rgba(255,255,255,.02));border-color:color-mix(in srgb,var(--c) 45%,transparent)}\n.pwl-catgrid i{width:24px;height:24px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--c);background:color-mix(in srgb,var(--c) 15%,transparent)}\n.pwl-catgrid i .pwl-svg{width:14px;height:14px}\n.pwl-catgrid b{font-size:12px;font-weight:600}\n.pwl-catgrid small{font-size:9.5px;color:var(--tx3);line-height:1.3}\n.pwl-catgrid em{position:absolute;top:8px;right:8px;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid var(--ln2);color:transparent;transition:all .2s ease}\n.pwl-catgrid span.on em{background:var(--c);border-color:var(--c);color:#14142a}\n.pwl-catgrid em .pwl-svg{width:11px;height:11px;stroke-width:2.6}\n.pwl-catgrid span:active{transform:scale(.96)}\n.pwl-link{align-self:center;font-size:11px;color:var(--tx3);cursor:pointer;padding:4px 8px;text-decoration:underline;text-underline-offset:3px}\n.pwl-link.danger{color:#e89a9a}\n.pwl-foot2{text-align:center;margin:2px 10px 4px}\n@media (prefers-reduced-motion:reduce){\n  .pwl-clock2 .sg,.pwl-evc,.pwl-scard,.pwl-eras span,.pwl-catgrid span{animation:none!important}\n  .pwl-seg .th,.pwl-clock2 .yr em{transition:none}\n}\n/* ═══ листы, импорт, правка, пустой мир ═══ */\n#pwl-sheet{background:rgba(8,8,18,0);-webkit-backdrop-filter:blur(0);backdrop-filter:blur(0);transition:background .25s ease,backdrop-filter .25s ease}\n#pwl-sheet.on{background:rgba(8,8,18,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}\n#pwl-sheet.on .pwl-sh{animation:pwl-up .34s cubic-bezier(.2,.9,.25,1)}\n@keyframes pwl-up{from{transform:translateY(40%);opacity:0}to{transform:none;opacity:1}}\n.pwl-sh{background:linear-gradient(170deg,#252746,#15162b);border-radius:24px 24px 0 0;border-top:1px solid rgba(217,183,101,.3);box-shadow:0 -12px 40px rgba(0,0,0,.45);padding:6px 14px 16px;gap:10px}\n.pwl-grab{width:38px;height:4px;border-radius:2px;background:rgba(255,255,255,.18);margin:2px auto 4px}\n.pwl-shhd b{font:600 17px/1.15 var(--serif)}\n.pwl-shhd .pwl-ibtn .pwl-svg{width:15px;height:15px}\n.pwl-newp{display:flex;justify-content:center;padding:4px 0 2px}\n.pwl-newp .pwl-face.big{transition:background .3s ease}\n.pwl-newp .pwl-crest{transition:none}\n.pwl-newp .pwl-crest .sh{transition:fill .35s ease}\n.pwl-cats span .pwl-svg{width:12px;height:12px;stroke-width:2.6}\n.pwl-picklist{max-height:44vh;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;border-radius:18px}\n.pwl-faces.pick .pwl-fc{animation:pwl-rise .28s ease both;animation-delay:calc(var(--i)*20ms)}\n.pwl-faces.pick .pwl-fc:active{transform:scale(.94)}\n\n/* что уйдёт модели */\n.pwl-nsec{display:flex;align-items:center;gap:7px;margin:4px 2px 0;font:600 13px/1 var(--serif);color:var(--gold)}\n.pwl-nsec .pwl-svg{width:15px;height:15px}\n.pwl-ncard{padding:10px 12px;border-radius:16px;background:var(--card);border:1px solid var(--ln);display:flex;flex-direction:column;gap:5px;animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*50ms)}\n.pwl-ncard .nh{display:flex;align-items:center;gap:9px;margin-bottom:2px}\n.pwl-ncard .nh .pwl-face{width:32px;height:32px;font-size:13px}\n.pwl-ncard .nh b{display:block;font:600 15px/1.1 var(--serif)}\n.pwl-ncard .nh small{display:block;font-size:10px;color:var(--tx3);margin-top:2px}\n.pwl-ncard .nl{display:grid;grid-template-columns:74px 1fr;gap:8px;font-size:11px;line-height:1.4}\n.pwl-ncard .nl em{font-style:normal;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--tx3);padding-top:1px}\n.pwl-ncard .nl span{color:var(--tx2)}\n.pwl-ncard .nl.secret em{color:#f0a35a}\n.pwl-ncard .nl.agenda em{color:#b48cf2}\n.pwl-ncard .nl.ties em,.pwl-ncard .nl.now em{color:var(--gold)}\n.pwl-nnews{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:16px;background:rgba(116,211,191,.07);border:1px solid rgba(116,211,191,.25)}\n.pwl-nnews>.pwl-face{width:30px;height:30px;font-size:12px}\n.pwl-nnews>.pwl-face .pwl-svg{width:15px;height:15px}\n.pwl-nnews small{display:block;font-size:10px;color:#a8e6d6}\n.pwl-nnews p{margin:2px 0 0;font-size:12.5px;line-height:1.4}\n.pwl-nnews.cue{background:rgba(217,183,101,.08);border-color:rgba(217,183,101,.35)}\n.pwl-nnews.cue small{color:var(--gold)}\n\n/* перенос */\n.pwl-io{padding:12px;border-radius:18px;background:var(--card);border:1px solid var(--ln);display:flex;flex-direction:column;gap:10px}\n.pwl-io .ioh{display:flex;gap:10px;align-items:center}\n.pwl-io .ioh>.pwl-svg{width:22px;height:22px;padding:6px;box-sizing:content-box;border-radius:12px;color:var(--gold);background:rgba(217,183,101,.12)}\n.pwl-io .ioh b{display:block;font:600 15px/1.1 var(--serif)}\n.pwl-io .ioh small{display:block;font-size:10.5px;color:var(--tx3);margin-top:2px;line-height:1.35}\n.pwl-io.take .ioh>.pwl-svg{color:#f0a35a;background:rgba(240,163,90,.12)}\n\n/* лорбуки */\n.pwl-books{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.pwl-book{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:6px;padding:14px 12px 12px 18px;border-radius:8px 16px 16px 8px;cursor:pointer;min-height:96px;\n  background:linear-gradient(150deg,color-mix(in srgb,var(--c) 34%,#1a1b30),color-mix(in srgb,var(--c) 12%,#14152a));border:1px solid color-mix(in srgb,var(--c) 45%,transparent);\n  box-shadow:0 6px 16px rgba(0,0,0,.3);animation:pwl-rise .35s ease both;animation-delay:calc(var(--i)*45ms);transition:transform .18s ease}\n.pwl-book:active{transform:scale(.96) rotate(-1deg)}\n.pwl-book .sp{position:absolute;left:0;top:0;bottom:0;width:7px;background:linear-gradient(90deg,rgba(0,0,0,.35),rgba(255,255,255,.08));border-right:1px solid rgba(230,195,111,.35)}\n.pwl-book>.pwl-svg{width:20px;height:20px;color:#f5e3b0}\n.pwl-book b{font:600 14px/1.15 var(--serif)}\n.pwl-book small{font-size:10px;color:rgba(255,240,210,.6)}\n.pwl-lorehd{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:14px;background:var(--card);border:1px solid var(--ln);cursor:pointer}\n.pwl-lorehd .pwl-svg{width:16px;height:16px;color:var(--tx3)}\n.pwl-lorehd b{display:block;font:600 15px/1.1 var(--serif)}\n.pwl-lorehd small{display:block;font-size:10px;color:var(--tx3);margin-top:2px}\n.pwl-ents{display:flex;flex-direction:column;gap:6px;padding-bottom:58px}\n.pwl-ent{display:flex;gap:10px;align-items:center;padding:9px 10px;border-radius:16px;cursor:pointer;background:var(--card);border:1px solid var(--ln);transition:all .2s ease;animation:pwl-rise .28s ease both;animation-delay:calc(var(--i)*25ms)}\n.pwl-ent .pwl-face{width:34px;height:34px;font-size:14px}\n.pwl-ent>div{flex:1;min-width:0}\n.pwl-ent b{display:block;font-size:12.5px;font-weight:600}\n.pwl-ent small{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:10.5px;color:var(--tx3);line-height:1.35;margin-top:1px}\n.pwl-ent em{width:22px;height:22px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--ln2);color:transparent;transition:all .2s ease}\n.pwl-ent em .pwl-svg{width:13px;height:13px;stroke-width:2.6}\n.pwl-ent.on{border-color:rgba(217,183,101,.55);background:linear-gradient(150deg,rgba(217,183,101,.12),rgba(255,255,255,.02))}\n.pwl-ent.on em{background:var(--gold);border-color:var(--gold);color:#231a06;transform:scale(1.08)}\n.pwl-ent.had{opacity:.5;cursor:default}\n.pwl-ent.had em{border-style:dashed}\n.pwl-sticky{position:sticky;bottom:-8px;margin:-50px -12px -8px;padding:22px 12px 10px;background:linear-gradient(transparent,rgba(16,17,32,.96) 40%)}\n.pwl-sticky .pwl-btn{box-shadow:0 8px 20px rgba(0,0,0,.4)}\n\n/* правка */\n.pwl-ehero{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:18px;background:radial-gradient(130% 120% at 0% 0%,color-mix(in srgb,var(--hc) 26%,transparent),rgba(255,255,255,.02) 70%);border:1px solid color-mix(in srgb,var(--hc) 34%,transparent)}\n.pwl-ehero b{display:block;font:600 17px/1.1 var(--serif)}\n.pwl-ehero small{display:block;font-size:10.5px;color:var(--tx3);margin-top:2px}\n.pwl-krows{display:flex;flex-direction:column;gap:5px}\n.pwl-krow{display:flex;align-items:center;gap:9px;padding:6px 6px 6px 8px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid var(--ln)}\n.pwl-krow .pwl-face{width:30px;height:30px;font-size:12px}\n.pwl-krow>div{flex:1;min-width:0;cursor:pointer}\n.pwl-krow small{display:block;font-size:9.5px;color:var(--gold)}\n.pwl-krow b{display:block;font-size:12px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.pwl-krow .pwl-off .pwl-svg{width:13px;height:13px}\n.pwl-kadd{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}\n.pwl-kadd span{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 2px;border-radius:12px;cursor:pointer;color:var(--gold);background:rgba(217,183,101,.07);border:1px dashed rgba(217,183,101,.35);transition:transform .15s ease}\n.pwl-kadd span:active{transform:scale(.93)}\n.pwl-kadd .pwl-svg{width:16px;height:16px}\n.pwl-kadd b{font-size:9px;font-weight:600;color:var(--tx2);text-align:center;line-height:1.15}\n.pwl-threads{display:flex;flex-direction:column;gap:5px}\n.pwl-threads>div{display:flex;align-items:center;gap:8px;padding:8px 6px 8px 12px;border-radius:12px;background:rgba(217,183,101,.06);border-left:2px solid var(--gold);font-size:12px}\n.pwl-threads span{flex:1}\n.pwl-threads i{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--tx3);border:1px solid var(--ln2)}\n.pwl-threads i .pwl-svg{width:13px;height:13px;stroke-width:2.4}\n.pwl-threads i:active{color:#14142a;background:#8fd17a;border-color:#8fd17a}\n\n/* пустой мир */\n.pwl-void{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:22px 16px 10px}\n.pwl-void .tr{width:84px;height:84px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--gold);\n  background:radial-gradient(circle,rgba(217,183,101,.18),rgba(217,183,101,.02) 70%);box-shadow:0 0 0 1px rgba(217,183,101,.25);animation:pwl-breathe 4s ease-in-out infinite}\n.pwl-void .tr svg{width:48px;height:48px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round}\n.pwl-void b{font:600 22px/1.15 var(--serif)}\n.pwl-void p{margin:0;font-size:12px;line-height:1.5;color:var(--tx2);max-width:290px}\n.pwl-starts{display:flex;flex-direction:column;gap:7px}\n.pwl-starts>div{display:grid;grid-template-columns:36px 1fr;grid-template-rows:auto auto;column-gap:10px;align-items:center;padding:11px 12px;border-radius:16px;cursor:pointer;\n  background:linear-gradient(120deg,color-mix(in srgb,var(--c) 14%,transparent),rgba(255,255,255,.02));border:1px solid color-mix(in srgb,var(--c) 32%,transparent);animation:pwl-rise .35s ease both;animation-delay:calc(120ms + var(--i)*60ms);transition:transform .15s ease}\n.pwl-starts>div:active{transform:scale(.98)}\n.pwl-starts .pwl-svg{grid-row:1/3;width:20px;height:20px;padding:8px;box-sizing:content-box;border-radius:12px;color:var(--c);background:color-mix(in srgb,var(--c) 15%,transparent)}\n.pwl-starts b{font-size:13px;font-weight:600}\n.pwl-starts small{font-size:10.5px;color:var(--tx3)}\n@media (prefers-reduced-motion:reduce){\n  #pwl-sheet.on .pwl-sh,.pwl-ncard,.pwl-book,.pwl-ent,.pwl-starts>div,.pwl-void .tr,.pwl-faces.pick .pwl-fc{animation:none!important}\n}\n#pwl-win .pwl-starts .pwl-svg,#pwl-win .pwl-scard .sh .pwl-svg,#pwl-win .pwl-io .ioh>.pwl-svg{box-sizing:content-box}\n.pwl-ic.sv{width:28px;height:28px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--tx2);background:var(--card2)}\n.pwl-ic.sv .pwl-svg{width:15px;height:15px}\n.pwl-ic.sv.lock{color:#f0a35a;background:rgba(240,163,90,.14)}\n.pwl-ic.sv.goal{color:#b48cf2;background:rgba(180,140,242,.14)}\n.pwl-off .pwl-svg{width:14px;height:14px}\n.pwl-scard .pwl-card{background:rgba(255,255,255,.02)}\n/* ═══ Сплетница ═══ */\n.pwl-gossip{padding:10px 10px 8px;border-radius:18px;background:linear-gradient(150deg,rgba(116,211,191,.12),rgba(255,255,255,.02));border:1px solid rgba(116,211,191,.32);display:flex;flex-direction:column;gap:7px}\n.pwl-gossip .gh{display:flex;align-items:center;gap:8px;color:#8fe0cc}\n.pwl-gossip .gh>.pwl-svg{width:18px;height:18px}\n.pwl-gossip .gh b{flex:1;font:600 15px/1 var(--serif);color:var(--tx)}\n.pwl-gossip .gh .busy{font-size:10.5px;color:#8fe0cc;animation:pwl-blink 1.4s ease-in-out infinite}\n.pwl-gossip .gh .pwl-link{padding:2px 4px;font-size:10.5px;color:#8fe0cc}\n@keyframes pwl-blink{0%,100%{opacity:.4}50%{opacity:1}}\n.pwl-gossip .pwl-hint{margin:0 2px}\n.pwl-gossip .pwl-hint.err{color:#f0a0a0}\n.pwl-find{display:flex;align-items:flex-start;gap:9px;padding:8px 6px 8px 8px;border-radius:14px;background:rgba(0,0,0,.18);border:1px solid rgba(116,211,191,.18);animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*45ms)}\n.pwl-find>i{width:26px;height:26px;border-radius:9px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#8fe0cc;background:rgba(116,211,191,.14)}\n.pwl-find>i .pwl-svg{width:14px;height:14px}\n.pwl-find>div{flex:1;min-width:0}\n.pwl-find p{margin:0;font-size:12px;line-height:1.38}\n.pwl-find small{display:block;margin-top:2px;font:italic 11px/1.35 var(--serif);color:var(--tx3)}\n.pwl-find .ok,.pwl-find .no{width:28px;height:28px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .15s ease}\n.pwl-find .ok{color:#14142a;background:#8fd17a}\n.pwl-find .no{color:var(--tx2);border:1px solid var(--ln2)}\n.pwl-find .ok .pwl-svg,.pwl-find .no .pwl-svg{width:13px;height:13px;stroke-width:2.6}\n.pwl-find .ok:active,.pwl-find .no:active{transform:scale(.88)}\n.pwl-gossip .gall{display:flex;justify-content:space-between;padding:0 2px}\n.pwl-gossip .gall .pwl-link{color:#8fe0cc}\n.pwl-gossip .gall .pwl-link+.pwl-link{color:var(--tx3)}\n.pwl-aiwait{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;border-radius:999px;background:rgba(116,211,191,.14);border:1px solid rgba(116,211,191,.35);color:#8fe0cc;font-size:12px;font-weight:600;animation:pwl-blink 1.6s ease-in-out infinite}\n.pwl-aiwait .pwl-svg{width:16px;height:16px}\n#pwl-win input[type=\"password\"]{letter-spacing:.12em}\n\n/* эпоха одной строкой и сетка выбора */\n.pwl-eraline{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid var(--ln);cursor:pointer}\n.pwl-eraline>.pwl-svg{width:22px;height:22px;color:var(--gold)}\n.pwl-eraline>div{flex:1;min-width:0}\n.pwl-eraline small{display:block;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--tx3)}\n.pwl-eraline b{display:block;font:600 15px/1.2 var(--serif)}\n.pwl-eraline em{font-style:normal;font-size:10px;color:var(--tx3);padding:3px 8px;border-radius:999px;background:var(--card2)}\n.pwl-eragrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}\n.pwl-eragrid span{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px 10px;border-radius:16px;cursor:pointer;text-align:center;background:rgba(255,255,255,.03);border:1px solid var(--ln);color:var(--tx2);transition:all .2s ease}\n.pwl-eragrid span .pwl-svg{width:26px;height:26px;stroke-width:1.4}\n.pwl-eragrid span b{font-size:10.5px;font-weight:600;line-height:1.2}\n.pwl-eragrid span.on{color:var(--gold);border-color:var(--gold);background:radial-gradient(100% 100% at 50% 0%,rgba(217,183,101,.24),rgba(217,183,101,.04))}\n.pwl-eragrid span:active{transform:scale(.95)}\n\n/* живые формулировки и события из сюжета */\n.pwl-evc p.fl{font:italic 13.5px/1.4 var(--serif);color:var(--tx)}\n.pwl-evc p.tpl{font-size:10px;color:var(--tx3);margin-top:2px}\n.pwl-evc .pub.onscreen{color:#8fe0cc}\n\n/* кнопки в карточках настроек не переносятся */\n.pwl-scard .pwl-row2 .pwl-btn{font-size:11.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 8px}\n@media (prefers-reduced-motion:reduce){.pwl-find,.pwl-aiwait,.pwl-gossip .gh .busy{animation:none!important}}\n.pwl-traits{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.pwl-traits span{display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 4px 9px;border-radius:14px;cursor:pointer;text-align:center;background:rgba(255,255,255,.03);border:1px solid var(--ln);color:var(--tx3);opacity:.7;transition:all .2s ease}\n.pwl-traits span .pwl-svg{width:22px;height:22px;stroke-width:1.5}\n.pwl-traits span b{font-size:10.5px;font-weight:600;line-height:1.2}\n.pwl-traits span.on{opacity:1;color:var(--gold);border-color:var(--gold);background:radial-gradient(100% 100% at 50% 0%,rgba(217,183,101,.22),rgba(217,183,101,.03))}\n.pwl-traits span:active{transform:scale(.95)}\n/* выбор модели */\n.pwl-mlist{display:flex;flex-direction:column;gap:4px;max-height:46vh;overflow:auto;overscroll-behavior:contain;margin-top:4px}\n.pwl-mlist span{padding:9px 12px;border-radius:12px;background:var(--card);border:1px solid var(--ln);font:12px/1.3 ui-monospace,Menlo,Consolas,monospace;cursor:pointer;word-break:break-all}\n.pwl-mlist span:active{transform:scale(.99)}\n.pwl-mlist span.on{border-color:var(--acc2);background:rgba(217,183,101,.14)}\n.pwl-hint.err{color:#f2a0a0}\n/* разбор всего чата */\n.pwl-full{display:flex;flex-direction:column;gap:6px;padding:10px 12px;border-radius:14px;background:rgba(116,211,191,.08);border:1px solid rgba(116,211,191,.3);margin-top:4px}\n.pwl-full .bar{height:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden}\n.pwl-full .bar span{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#74d3bf,#d9b765);transition:width .4s ease}\n.pwl-full p{margin:0;font-size:12.5px;line-height:1.4}\n.pwl-full small{font-size:11px;color:var(--tx2)}\n.pwl-full small.err{color:#f2a0a0}\n.pwl-full.done{background:rgba(143,209,122,.08);border-color:rgba(143,209,122,.35)}\n.pwl-fullbtn{display:flex;align-items:center;justify-content:center;gap:7px;margin-top:6px}\n.pwl-fullbtn .pwl-svg{width:15px;height:15px}\n.pwl-gonbox{display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:16px;background:rgba(230,195,111,.08);border:1px solid rgba(230,195,111,.35)}\n.pwl-gonbox p{margin:0;font-size:12.5px;line-height:1.45;color:var(--tx2)}\n.pwl-ent.lock{cursor:pointer}\n.pwl-ent.lock em{border:0;color:var(--tx3)}\n/* ═══ игра за НПС ═══ */\n.pwl-btn.play{background:linear-gradient(150deg,rgba(180,140,242,.22),rgba(180,140,242,.06));border-color:rgba(180,140,242,.5);color:#d8c4fb}\n.pwl-phero{display:flex;align-items:center;gap:14px;padding:14px;border-radius:22px;background:radial-gradient(130% 120% at 0% 0%,color-mix(in srgb,var(--hc) 30%,transparent),rgba(180,140,242,.06) 70%);border:1px solid rgba(180,140,242,.35)}\n.pwl-phero>div{min-width:0;display:flex;flex-direction:column;gap:3px;align-items:flex-start}\n.pwl-phero small{font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#c9b2f5}\n.pwl-phero b{font:600 22px/1.1 var(--serif)}\n.pwl-phero span{display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--tx2);padding:3px 9px 3px 6px;border-radius:999px;background:rgba(0,0,0,.22)}\n.pwl-phero span .pwl-svg{width:13px;height:13px}\n.pwl-near{display:flex;align-items:center;gap:6px;padding:0 4px;min-height:30px}\n.pwl-near small{font-size:10.5px;color:var(--tx3);margin-right:2px}\n.pwl-near .pwl-face{width:26px;height:26px;font-size:10px;box-shadow:0 0 0 1.5px var(--hc)}\n.pwl-near em{font-style:italic;font-size:11px;color:var(--tx3)}\n.pwl-pacts{display:grid;grid-template-columns:1fr 1fr;gap:7px}\n.pwl-pact{display:flex;flex-direction:column;gap:3px;padding:10px 11px;border-radius:16px;cursor:pointer;user-select:none;\n  background:linear-gradient(150deg,color-mix(in srgb,var(--c) 14%,transparent),rgba(255,255,255,.02));border:1px solid color-mix(in srgb,var(--c) 32%,transparent);\n  animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*30ms);transition:transform .15s ease}\n.pwl-pact:active{transform:scale(.96)}\n.pwl-pact i{width:28px;height:28px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--c);background:color-mix(in srgb,var(--c) 16%,transparent);margin-bottom:3px}\n.pwl-pact i .pwl-svg{width:16px;height:16px}\n.pwl-pact b{font-size:12.5px;font-weight:600}\n.pwl-pact small{font-size:10px;color:var(--tx3);line-height:1.3}\n.pwl-pick{display:flex;flex-direction:column;gap:9px}\n.pwl-pick .ph{display:flex;align-items:center;gap:8px;cursor:pointer;color:var(--tx2)}\n.pwl-pick .ph .pwl-svg{width:15px;height:15px}\n.pwl-pick .ph b{font:600 16px/1 var(--serif);color:var(--tx)}\n.pwl-cats.wrap{flex-wrap:wrap;overflow:visible}\n.pwl-fc small.ch{font-size:9px;font-weight:600}\n.pwl-fc small.ch.high{color:#8fd17a}\n.pwl-fc small.ch.mid{color:#e6c36f}\n.pwl-fc small.ch.low{color:#ef8a8a}\n.pwl-scene{white-space:pre-line;padding:14px 16px;border-radius:18px;background:linear-gradient(170deg,rgba(255,244,220,.05),rgba(255,255,255,.015));border:1px solid rgba(217,183,101,.22);font:15px/1.6 var(--serif);color:var(--tx);animation:pwl-rise .4s ease both}\n.pwl-opts{display:flex;flex-direction:column;gap:7px}\n.pwl-opt{display:flex;flex-direction:column;gap:3px;padding:11px 13px;border-radius:16px;cursor:pointer;background:linear-gradient(120deg,color-mix(in srgb,var(--c) 15%,transparent),rgba(255,255,255,.02));border:1px solid color-mix(in srgb,var(--c) 40%,transparent);\n  animation:pwl-rise .35s ease both;animation-delay:calc(200ms + var(--i)*80ms);transition:transform .15s ease}\n.pwl-opt:active{transform:scale(.98)}\n.pwl-opt em{font-style:normal;font-size:9.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--c)}\n.pwl-opt span{font-size:13px;line-height:1.4}\n.pwl-result{padding:12px 14px;border-radius:18px;display:flex;flex-direction:column;gap:5px;animation:pwl-pop2 .4s cubic-bezier(.3,1.4,.5,1) both}\n.pwl-result.ok{background:linear-gradient(150deg,rgba(143,209,122,.16),rgba(255,255,255,.02));border:1px solid rgba(143,209,122,.45)}\n.pwl-result.no{background:linear-gradient(150deg,rgba(239,103,103,.14),rgba(255,255,255,.02));border:1px solid rgba(239,103,103,.4)}\n.pwl-result .rh{display:flex;align-items:center;gap:8px}\n.pwl-result .rh .pwl-svg{width:22px;height:22px;padding:4px;box-sizing:content-box;border-radius:50%;stroke-width:2.6}\n.pwl-result.ok .rh .pwl-svg{background:#8fd17a;color:#14142a}\n.pwl-result.no .rh .pwl-svg{background:#ef6767;color:#fff}\n.pwl-result .rh b{flex:1;font:600 18px/1 var(--serif)}\n.pwl-result .rh small{font-size:10px;color:var(--tx3)}\n.pwl-result p{margin:0;font-size:12.5px;line-height:1.4;padding-left:4px}\n.pwl-result p.sum{font:italic 13px/1.45 var(--serif);color:var(--tx2);margin-top:3px}\n@media (prefers-reduced-motion:reduce){.pwl-pact,.pwl-scene,.pwl-opt,.pwl-result{animation:none!important}}\n/* ═══ окно в Таверне: перетаскивание, размер, масштаб ═══ */\n#pwl-win.st-win #pwl-hd{cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}\n#pwl-win.st-win #pwl-hd:active{cursor:grabbing}\n#pwl-win.st-win #pwl-hd [data-act]{cursor:pointer}\n#pwl-win.moved{transform:none}\n#pwl-win.moved.on{animation:pwl-popm .2s ease}\n@keyframes pwl-popm{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}\n#pwl-win.sized .pwl-body{flex:1 1 auto}\n#pwl-win.zoomed #pwl-hd,#pwl-win.zoomed #pwl-body,#pwl-win.zoomed .pwl-foot,#pwl-win.zoomed .pwl-sh{zoom:var(--pwl-z,1)}\n#pwl-grip{position:absolute;right:3px;bottom:3px;width:20px;height:20px;z-index:7;cursor:nwse-resize;touch-action:none;border-right:2px solid var(--acc2);border-bottom:2px solid var(--acc2);border-radius:0 0 18px 0;opacity:.45;transition:opacity .15s ease}\n#pwl-grip:hover{opacity:1}\n#pwl-grip[hidden]{display:none}\n@media (prefers-reduced-motion:reduce){#pwl-win.moved.on{animation:none}}\n/* ═══ как пользоваться ═══ */\n.pwl-gcta{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:18px;cursor:pointer;background:linear-gradient(140deg,rgba(217,183,101,.16),rgba(217,183,101,.04));border:1px solid rgba(217,183,101,.35);color:var(--tx);animation:pwl-rise .3s ease both}\n.pwl-gcta>.pwl-svg:first-child{width:22px;height:22px;color:var(--gold);flex-shrink:0}\n.pwl-gcta>.pwl-svg:last-child{width:16px;height:16px;color:var(--tx3);flex-shrink:0}\n.pwl-gcta div{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}\n.pwl-gcta b{font:600 15px/1.2 var(--serif)}\n.pwl-gcta small{font-size:11px;color:var(--tx2);line-height:1.35}\n.pwl-gcta:active{transform:scale(.985)}\n.pwl-ghero{display:flex;align-items:center;gap:14px;padding:14px;border-radius:22px;background:radial-gradient(120% 120% at 0% 0%,rgba(217,183,101,.2),rgba(255,255,255,.02) 70%);border:1px solid rgba(217,183,101,.3)}\n.pwl-ghero>svg{width:40px;height:40px;flex-shrink:0;fill:none;stroke:var(--gold);stroke-width:1.6;stroke-linecap:round}\n.pwl-ghero div{display:flex;flex-direction:column;gap:4px;min-width:0}\n.pwl-ghero b{font:600 20px/1.1 var(--serif)}\n.pwl-ghero small{font-size:12px;line-height:1.45;color:var(--tx2)}\n.pwl-guide{display:flex;flex-direction:column;gap:7px}\n.pwl-gq{border-radius:16px;background:var(--card);border:1px solid var(--ln);overflow:hidden;animation:pwl-rise .3s ease both;animation-delay:calc(var(--i)*25ms)}\n.pwl-gq summary{list-style:none;display:flex;align-items:center;gap:10px;padding:12px 14px;cursor:pointer;user-select:none;font-size:13.5px;font-weight:600}\n.pwl-gq summary::-webkit-details-marker{display:none}\n.pwl-gq summary span{flex:1}\n.pwl-gq summary .pwl-svg{width:15px;height:15px;color:var(--tx3);transition:transform .2s ease}\n.pwl-gq[open] summary .pwl-svg{transform:rotate(90deg)}\n.pwl-gq[open]{border-color:rgba(217,183,101,.3)}\n.pwl-gq p{margin:0;padding:0 14px 13px;font-size:12.5px;line-height:1.55;color:var(--tx2)}\n.pwl-legend{display:flex;flex-direction:column;gap:8px;padding:0 14px 13px}\n.pwl-legend>div{display:flex;align-items:flex-start;gap:10px}\n.pwl-legend i{width:24px;height:24px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:var(--c);color:#14142a}\n.pwl-legend i .pwl-svg{width:13px;height:13px;stroke-width:2.2}\n.pwl-legend span{display:flex;flex-direction:column;gap:1px}\n.pwl-legend b{font-size:12.5px}\n.pwl-legend small{font-size:11.5px;color:var(--tx2);line-height:1.4}\n@media (prefers-reduced-motion:reduce){.pwl-gcta,.pwl-gq{animation:none!important}}\n";document.head.appendChild(s);})();
window.__PWL_I18N={"ru":{"plugin.name":"PUSYA WORLD","plugin.description":"Живой мир НПС: реестр персонажей, династии и родство, роли и незакрытые нити. Модель помнит, кто кому кем приходится. Автор: Пуся · t.me/pusgir","releaseNotes.0_3_1":"Исправлено: настройки больше не мерцают при каждом нажатии; части карточки без Сплетницы теперь с замком и кнопкой «Включить Сплетницу». Добавлено: люди из карточки персонажа, разбор всего чата, время по сюжету, выбор модели из списка, поддержка думающих моделей, инструкция «Как пользоваться», версия для SillyTavern.","releaseNotes.0_3_0":"Реестр НПС с родством и домами, режиссёр, который вводит уместных НПС в сцену, жизнь за кадром со слухами и новостями для героя, тайны, замыслы и эпохи.","actions.open":"PUSYA WORLD 🌳","settings.info.open":"Окно открывается кнопкой 🌳 над чатом, из меню у поля ввода или из бокового меню.","settings.info.how":"Перед каждым ответом плагин находит в последних сообщениях имена НПС из реестра и скрыто добавляет модели короткую справку: роль, дом, кем приходится героям, незакрытые нити.","settings.privacy":"Мир хранится в переменных этого чата. В сеть плагин обращается только когда включена Сплетница: ей уходят последние сообщения и краткий список людей — к модели, которую ты выбрала. Ключ хранится только у тебя.","settings.info.author":"Автор: Пуся · t.me/pusgir","ui.dir.title":"Режиссёр","ui.dir.autoNow":"сам введёт на 100%: {n}%","ui.dir.hintNow":"подсказывает · {n}%","ui.dir.ripe":"пора кого-нибудь ввести","ui.dir.waiting":"появится в следующем ответе","ui.dir.none":"Сейчас некого предложить: никто не связан со сценой. Задай места, связи или нити.","ui.dir.cue":"Ввести в следующем ответе","ui.dir.cueBtn":"🎬 Ввести в следующем ответе","ui.dir.cueOn":"🎬 Ждёт следующего ответа · отменить","ui.dir.cued":"{name} появится в следующем ответе","ui.dir.more":"Ещё кандидаты (до {n})","ui.dir.less":"Свернуть","ui.dir.noteCue":"И вызов режиссёра:","ui.dir.m.off":"выкл","ui.dir.m.hint":"подсказывает","ui.dir.m.auto":"вводит сам","ui.dir.m.offD":"Режиссёр молчит. Кнопка 🎬 у человека всё равно работает.","ui.dir.m.hintD":"Показывает, кому уместно появиться, и мигает кнопкой 🌳, когда пора. Ввести можно кнопкой 🎬.","ui.dir.m.autoD":"Когда давление дойдёт до 100%, сам мягко предложит модели одного из лучших кандидатов.","ui.dir.sp.slow":"редко","ui.dir.sp.mid":"средне","ui.dir.sp.fast":"часто","ui.why.place":"бывает: {v}","ui.why.seat":"сцена в резиденции: {v}","ui.why.thread":"нить: {v}","ui.why.never":"ещё не появлялся(ась)","ui.why.long":"давно не было","ui.why.role":"подходит к сцене: {v}","ui.opt.nodir":"Не вводить режиссёром","ui.opt.nodirD":"Режиссёр не будет предлагать этого человека","ui.head.chron":"Хроника","ui.date":"Год {y} · {s} · день {d}","ui.month":"Год {y} · {s} · {m}-й месяц","ui.season.0":"весна","ui.season.1":"лето","ui.season.2":"осень","ui.season.3":"зима","ui.time.d":"день","ui.time.w":"неделя","ui.time.m":"месяц","ui.time.s":"сезон","ui.time.y":"год","ui.time.hint":"Время мира идёт только когда ты его двигаешь. Кто сейчас в сцене, тот за кадром не участвует.","ui.time.auto":"И само: каждые {n} ответов проходит {d}","ui.time.done":"{date}: событий {n}","ui.ch.few":"Нужно хотя бы двое НПС, чтобы за кадром что-то происходило.","ui.ch.all":"Правда","ui.ch.known":"Что знает {name}","ui.ch.minor":"мелочи","ui.ch.none":"Пока ничего не случилось. Подвинь время кнопками выше.","ui.ch.noneMode":"В этом виде пусто.","ui.pub.public":"все знают","ui.pub.rumor":"слухи","ui.pub.secret":"тайна","ui.ev.known":"знают: {n}","ui.ev.heardBy":"{name} знает от: {by}","ui.ev.heardTown":"{name} знает по слухам","ui.ev.told":"ушло модели","ui.life.title":"Жизнь за кадром","ui.life.every":"Время идёт само","ui.life.manual":"только кнопками","ui.life.n":"каждые {n} ответов","ui.life.days":"На сколько за раз","ui.life.pace":"Темп событий","ui.pace.calm":"спокойно","ui.pace.normal":"обычно","ui.pace.drama":"драма","ui.cat.romance":"Романы","ui.cat.romanceD":"встречаются, расстаются, тайные связи","ui.cat.family":"Семья","ui.cat.familyD":"помолвки, свадьбы, разводы, дети","ui.cat.career":"Дела","ui.cat.careerD":"новые должности, переезды","ui.cat.fortune":"Деньги","ui.cat.fortuneD":"разбогател, разорился","ui.cat.health":"Здоровье","ui.cat.healthD":"болезни и выздоровление","ui.cat.drama":"Ссоры","ui.cat.dramaD":"ссоры, вражда, примирения","ui.cat.death":"Смерти","ui.cat.deathD":"старость и болезни; главных героев не касается","ui.life.pairs":"Пары","ui.pairs.any":"любые","ui.pairs.mf":"только м+ж","ui.life.news":"Новостей в ответ","ui.life.newsD":"Когда слух доходит до героя, модель узнаёт, что он услышал, от кого и когда, и может сама заговорить об этом. Каждая новость уходит не больше трёх раз.","ui.opt.safe":"Не трогать за кадром","ui.opt.safeD":"Только мирное: работа, деньги, переезды. Без романов, ссор, свадеб и смертей.","ui.toast.conflict":"Мир изменился, пока окно было открыто: правка не сохранена, загружаю свежий","ui.why.goal":"замысел: {g}","ui.why.knows":"знает тайну: {name}","ui.goal.match":"ищет партию для: {name}","ui.goal.revenge":"месть: {name}","ui.goal.rise":"возвыситься","ui.goal.win":"добиться: {name}","ui.goal.ready":"готов(а) действовать — дело за сюжетом","ui.goal.end.done":"исполнено","ui.goal.end.fail":"провалено","ui.goal.end.moot":"уже неактуально","ui.goal.end.gone":"некому продолжать","ui.goal.end.drop":"отменено","ui.goal.btn.revenge":"месть","ui.goal.btn.win":"добиться кого-то","ui.goal.btn.rise":"возвыситься","ui.goal.btn.match":"партия для ребёнка","ui.goal.pick.revenge":"Кому мстит {name}?","ui.goal.pick.win":"Кого добивается {name}?","ui.goal.pick.match":"Для кого ищет партию {name}?","ui.goal.pick.rise":"{name}","ui.sec.intrigue":"Тайны и замыслы","ui.sec.out":"раскрыта","ui.sec.knownBy":"знают: {names}","ui.sec.nobody":"больше никто не знает","ui.sec.heroKnows":"{name} знает","ui.sec.heroNot":"{name} не знает","ui.sec.toggle":"Знает ли герой","ui.ph.secret":"Новая тайна: незаконный сын короля","ui.hint.secretsHero":"Тайны героя могут узнать и раскрыть НПС за кадром. Сам герой за кадром ничего не делает.","ui.hint.intrigue":"Тайны всплывают за кадром: их узнают близкие, жадные шантажируют, враги и сплетники раскрывают. Замысел растёт со временем и кончается событием; если он против главного героя, его доиграет сюжет. Модель видит тайны и замыслы, но не раскрывает их сама.","ui.cat.intrigue":"Интриги","ui.cat.intrigueD":"тайны, шантаж, скандалы, замыслы, яд","ui.sec.people":"Люди","ui.sec.houses":"Дома и семьи","ui.tile.scene":"В сцене","ui.tile.important":"Важные","ui.tile.long":"Давно не было","ui.tile.all":"Все","ui.tile.none":"Здесь пока никого","ui.house.members":"{n} чел.","ui.house.add":"Новый дом","ui.house.edit":"Дом: название и глава","ui.chron.empty":"Пока тихо. Подвинь время в хронике.","ui.tree.hint":"Нажми на портрет, чтобы открыть историю человека. Пунктиром — те, кто вошёл в семью из другого дома.","ui.badge.main":"главный герой","ui.badge.scene":"в сцене","ui.badge.affair":"тайная связь","ui.badge.scheme":"плетёт интригу","ui.badge.secret":"хранит тайну","ui.badge.gossip":"знает чужие тайны","ui.badge.feud":"вражда","ui.badge.love":"влюблён(а)","ui.badge.ill":"болен(а)","ui.badge.dead":"умер(ла)","ui.now.dead":"Умер(ла)","ui.now.married":"В браке: {name}","ui.now.betrothed":"Помолвка: {name}","ui.now.seeing":"Встречается: {name}","ui.now.affair":"Тайная связь: {name}","ui.now.enemy":"Враг: {name}","ui.now.ill":"Болен(а)","ui.now.place":"Обычно: {v}","ui.story.age":"{n} лет","ui.story.now":"Сейчас","ui.story.history":"История","ui.story.more":"ещё {n}","ui.story.tapReveal":"нажми, чтобы прочесть","ui.story.pr":"созревает: {n}%","ui.story.edit":"Изменить","ui.ch.season":"Год {y} · {s}","ui.ch.year":"Год {y}","ui.ch.day":"день {d}","ui.set.dirSpeed":"Как часто","ui.set.cats":"Что может случиться","ui.set.model":"Что видит модель","ui.set.window":"Окно","ui.life.manualShort":"вручную","ui.note.k.traits":"черты","ui.note.k.ties":"связи","ui.note.k.now":"сейчас","ui.note.k.lately":"недавно","ui.note.k.threads":"нити","ui.note.k.secret":"тайна","ui.note.k.agenda":"замысел","ui.note.k.notes":"заметка","ui.note.sec.people":"Кто в сцене","ui.note.sec.news":"Новости для героя","ui.note.raw":"Показать как текст для модели","ui.note.cards":"Показать карточками","ui.io.give":"Отдать мир","ui.io.stats":"людей: {p} · домов: {h} · событий: {e}. Скопируй и вставь в другом чате.","ui.io.take":"Принять мир","ui.io.takeD":"Вставь текст из другого чата. Текущий мир этого чата заменится.","ui.io.paste":"Вставь сюда скопированный мир…","ui.edit.hint":"Изменения сохраняются сами","ui.edit.name":"Имя и облик","ui.edit.place":"Положение","ui.edit.char":"Характер","ui.edit.story":"Для сюжета","ui.void.title":"Мир пока пуст","ui.void.text":"Здесь будут жить НПС этой истории: семьи, дома, тайны и всё, что случается с ними за кадром.","ui.void.lore":"Взять из карточки или лорбука","ui.void.loreD":"Отметить записи-персонажей — и они уже в мире","ui.void.add":"Добавить персонажа","ui.void.addD":"Имя, пол — остальное можно позже","ui.void.house":"Основать дом","ui.void.houseD":"Семья, род, клан или гильдия","ui.void.how":"Когда имя из мира появится в чате, модель получит справку о человеке и его связях. Главные герои уже здесь.","ui.gs.name":"Сплетница","ui.gs.about":"Дополнительная модель. Читает чат и замечает, что изменилось у людей; разбирает лорбук со связями; пишет события за кадром живым языком твоего мира.","ui.gs.src.tavo":"модель Таверны","ui.gs.src.own":"своя модель","ui.gs.tavoD":"Берёт подключение Таверны — то же, что у чата. Тратит его токены.","ui.gs.ep":"Адрес API","ui.gs.model":"Модель","ui.gs.key":"Ключ","ui.gs.keyD":"Подойдёт любая быстрая недорогая модель с OpenAI-совместимым API. Ключ хранится только у тебя и не попадает в перенос мира.","ui.gs.test":"Проверить связь","ui.gs.testing":"Проверяю…","ui.gs.testOk":"Сплетница на связи","ui.gs.every":"Читать чат каждые … сообщений","ui.gs.flavor":"Оживлять события","ui.gs.flavorD":"События за кадром переписываются языком твоего мира — и такими уходят в новости героя","ui.gs.lore":"Разбирать лорбук","ui.gs.loreD":"При импорте вытаскивает связи, возраст, роль, черты, дом и тайны из текста записей","ui.gs.privacy":"Сплетнице уходят последние сообщения и краткий список людей. Ничего не вносится само: находки ждут твоего «да».","ui.gs.reading":"читает чат…","ui.gs.readNow":"прочитать сейчас","ui.gs.quiet":"Пока ничего нового. Читает чат каждые {n} сообщений.","ui.gs.setup":"Подключи модель в настройках, и Сплетница начнёт замечать, что меняется в сюжете.","ui.gs.error":"Сплетница не дозвалась модель: {e}","ui.gs.found":"Сплетница заметила: {n}","ui.gs.accepted":"Принято: {n}","ui.gs.acceptAll":"принять всё ({n})","ui.gs.rejectAll":"отклонить всё","ui.gs.noTavo":"Таверна не дала модель — выбери свою","ui.gs.badAnswer":"модель ответила не тем форматом","ui.gs.empty":"модель промолчала","ui.gs.readingLore":"Сплетница читает лорбук…","ui.gs.loreAdd":"Разобрать и добавить: {n}","ui.gs.loreDone":"Сплетница разобрала лорбук: {n} чел. со связями","ui.gs.loreFail":"Сплетница не справилась — добавляю как обычно","ui.gs.err.who":"Сначала прими нового человека: {name}","ui.gs.err.with":"Сначала прими нового человека: {name}","ui.gs.k.person":"Новое лицо: {a} ({v})","ui.gs.k.marry":"{a} и {b} поженились","ui.gs.k.divorce":"{a} и {b} развелись","ui.gs.k.engage":"{a} и {b} обручились","ui.gs.k.date":"{a} и {b} теперь вместе","ui.gs.k.breakup":"{a} и {b} расстались","ui.gs.k.death":"{a} погиб(ла)","ui.gs.k.ill":"{a} заболел(а)","ui.gs.k.heal":"{a} поправился(ась)","ui.gs.k.move":"{a} теперь: {v}","ui.gs.k.job":"{a} — новое занятие: {v}","ui.gs.k.title":"{a} — новый титул: {v}","ui.gs.k.quarrel":"{a} и {b} поссорились","ui.gs.k.reconcile":"{a} и {b} помирились","ui.gs.k.enemy":"{a} и {b} теперь враги","ui.gs.k.secret_new":"{a} скрывает: {v}","ui.gs.k.secret_out":"Всплыло ({a}): {v}","ui.gs.k.pregnant":"{a} ждёт ребёнка от {b}","ui.gs.k.birth":"У {a} родился ребёнок: {v}","ui.gs.k.kin":"{a} — {v} для {b}","ui.ev.onscreen":"в сюжете","ui.world.title":"Что есть в этом мире","ui.world.magic":"магия","ui.world.nobility":"знать и титулы","ui.world.modern":"техника","ui.world.auto":"Определяется само по чату и людям. Без магии не будет проклятий, без знати — поединков и выходов в свет, с техникой — договорных браков почти нет.","ui.world.hand":"Выставлено вручную.","ui.world.toAuto":"Определять само","ui.play.a.talk":"Поговорить","ui.play.d.talk":"по душам или о делах","ui.play.a.charm":"Сблизиться","ui.play.d.charm":"пофлиртовать, завоевать","ui.play.a.confess":"Признаться","ui.play.d.confess":"в чувствах","ui.play.a.propose":"Сделать предложение","ui.play.d.propose":"руки и сердца","ui.play.a.quarrel":"Высказать всё","ui.play.d.quarrel":"и поссориться","ui.play.a.reconcile":"Помириться","ui.play.d.reconcile":"попробовать загладить","ui.play.a.snoop":"Разузнать","ui.play.d.snoop":"подслушать, порыться","ui.play.a.blackmail":"Шантажировать","ui.play.d.blackmail":"чужой тайной","ui.play.a.expose":"Раскрыть тайну","ui.play.d.expose":"пусть все узнают","ui.play.a.matchmake":"Сосватать ребёнка","ui.play.d.matchmake":"выгодная партия","ui.play.a.letter":"Написать письмо","ui.play.d.letter":"кому угодно, хоть издалека","ui.play.a.scheme":"Продвинуть замысел","ui.play.d.scheme":"тайный план","ui.play.a.go":"Пойти куда-то","ui.play.d.go":"сменить место","ui.play.a.free":"Своё действие","ui.play.d.free":"описать словами","ui.play.l.like_up":"{name} теплеет к тебе","ui.play.l.like_down":"{name} охладел(а)","ui.play.l.love":"{name} явно заинтересован(а)","ui.play.l.dating":"Вы с {name} теперь вместе","ui.play.l.affair":"Тайная связь с {name}","ui.play.l.refused":"{name} отказал(а)","ui.play.l.engaged":"Помолвка с {name}","ui.play.l.engaged2":"{name} помолвлен(а) с {name2}","ui.play.l.rival":"{name} теперь враждебен(на)","ui.play.l.peace":"Помирились с {name}","ui.play.l.secret":"Тайна: {v}","ui.play.l.nothing":"Ничего не нашлось","ui.play.l.caught":"{name} застал(а) за этим","ui.play.l.yields":"{name} уступил(а), но затаил(а) злобу","ui.play.l.defies":"{name} не сдался(лась) — теперь вы враги","ui.play.l.scandal":"Скандал! Всплыло: {v}","ui.play.l.noanswer":"Ответа нет","ui.play.l.goal":"Замысел созревает: {v}","ui.play.l.moved":"Теперь: {v}","ui.play.btn":"🎭 Сыграть за: {name}","ui.play.title":"Игра за НПС","ui.play.as":"играешь за","ui.play.nowhere":"где-то","ui.play.near":"Рядом:","ui.play.alone":"никого","ui.play.writing":"Сплетница пишет сцену…","ui.play.ok":"Удалось","ui.play.no":"Не вышло","ui.play.ch.high":"шансы высокие","ui.play.ch.mid":"шансы средние","ui.play.ch.low":"шансы низкие","ui.play.tone.warm":"тепло","ui.play.tone.bold":"смело","ui.play.tone.sly":"хитро","ui.play.tone.cold":"холодно","ui.play.again":"Ещё действие","ui.play.toChat":"В чат как интерлюдию","ui.play.done":"Готово, вернуться","ui.play.go":"Действовать","ui.play.placePh":"или своё место…","ui.play.freePh":"Что делает {name}? Например: тайком читает письма мужа","ui.play.freeGo":"Сыграть","ui.play.freeNeed":"Своё действие разбирает Сплетница — подключи её в настройках.","ui.play.hint":"Шансы считаются по отношениям, чертам и тайнам. Сплетница пишет сцену, а твой выбор в ней влияет на исход. Всё, что случится, — часть мира: пойдут слухи, герой может узнать.","ui.play.hintNoAI":"Шансы считаются по отношениям, чертам и тайнам. С подключённой Сплетницей каждое действие станет сценой с выбором.","ui.play.meanwhile":"Тем временем — {name}:","ui.play.inInput":"Интерлюдия в поле ввода — отправь, если хочешь","ui.title":"Мир","ui.head.houses":"Дома и династии","ui.head.lore":"Карточка и лорбуки","ui.head.set":"Настройки","ui.loading":"Загружаю мир…","ui.status.off":"Выключено: модели ничего не уходит","ui.status.scene":"В сцене: {names}","ui.status.empty":"В сцене никого из реестра","ui.search":"Имя, роль, дом, место…","ui.f.all":"Все","ui.f.scene":"В сцене","ui.f.main":"Важные","ui.f.long":"Давно не было","ui.empty.filter":"Никого не нашлось","ui.empty.world":"Мир пока пуст","ui.empty.houses":"Домов пока нет. Дом — это семья, род, клан или гильдия.","ui.btn.add":"+ Персонаж","ui.btn.lore":"📚 Карточка и лорбуки","ui.hint.start":"Добавь НПС вручную или из лорбука, потом свяжи их: родители, дети, браки. Когда имя появится в чате, модель получит справку о человеке и его связях.","ui.relOf":"{rel} ({name})","ui.seen.now":"сейчас в сцене","ui.seen.last":"в последнем сообщении","ui.seen.ago":"был(а) {n} сообщ. назад","ui.seen.never":"ещё не появлялся(ась)","ui.pin":"Держать в сцене","ui.sec.family":"Семья","ui.sec.kinAll":"Вся родня и свойственники: {n}","ui.sec.who":"Кто это","ui.sec.threads":"Незакрытые нити","ui.sec.tree":"Древо · {n}","ui.kin.parent":"родитель","ui.kin.child":"ребёнок","ui.kin.spouse":"супруг(а)","ui.kin.exspouse":"бывший брак","ui.kin.sibling":"брат/сестра","ui.pick.sibling":"Брат или сестра: {name}","ui.kin.betrothed":"помолвка","ui.kin.none":"Связей пока нет. Остальная родня (дяди, кузены, свёкры) посчитается сама.","ui.opt.ill":"внебрачный","ui.opt.ad":"приёмный","ui.opt.ex":"бывший брак","ui.pick.parent":"Родитель: {name}","ui.pick.child":"Ребёнок: {name}","ui.pick.spouse":"Супруг(а): {name}","ui.pick.betrothed":"Помолвка: {name}","ui.ph.pick":"Кого? Имя…","ui.btn.newNamed":"+ Новый: {name}","ui.f.name":"Имя","ui.f.aliases":"Другие имена и прозвища","ui.ph.aliases":"через запятую: Белла, леди Эшфорд","ui.hint.auto":"Ещё ищется по имени: {names}","ui.sex.f":"♀ женщина","ui.sex.m":"♂ мужчина","ui.sex.x":"не указан","ui.f.age":"Возраст","ui.f.house":"Дом","ui.house.none":"без дома","ui.house.new":"+ новый дом…","ui.f.title":"Титул","ui.ph.title":"леди, граф…","ui.f.job":"Занятие","ui.ph.job":"фрейлина, кузнец…","ui.f.faction":"Сторона","ui.ph.faction":"двор, гильдия…","ui.f.place":"Где бывает","ui.ph.place":"столица, порт…","ui.f.traits":"Черты","ui.ph.traits":"амбициозная, сплетница","ui.f.bio":"Заметка для модели","ui.ph.bio":"коротко: внешность, характер, что важно помнить","ui.ph.thread":"обещала достать письмо герцога","ui.hint.threads":"Обещания, долги, обиды, незаконченные дела. Модель увидит их, когда человек в сцене. ✓ — нить закрыта.","ui.opt.important":"Важный персонаж","ui.opt.importantD":"Попадёт в «Давно не было», если долго не появлялся","ui.opt.main":"Главный герой","ui.opt.mainD":"Персонаж карточки или персона: справки о нём нет, но родство с ним указывается","ui.opt.alive":"Жив(а)","ui.hint.fromLore":"Добавлен(а) из лорбука. Запись лорбука плагин не меняет.","ui.btn.delPerson":"Удалить персонажа","ui.btn.sure":"Точно? Нажми ещё раз","ui.f.hname":"Название дома","ui.f.seat":"Резиденция","ui.ph.seat":"замок, поместье…","ui.f.head":"Глава","ui.f.motto":"Девиз","ui.ph.motto":"необязательно","ui.ph.house":"Новый дом: Дом Эшфорд","ui.hint.houseEmpty":"В доме пока никого. Добавь членов семьи, а связи между ними задаются в карточках.","ui.tree.sibs":"братья и сёстры","ui.btn.member":"+ В дом","ui.btn.delHouse":"Удалить дом","ui.lore.noapi":"Таверна не дала доступ к лорбукам.","ui.lore.loading":"Читаю лорбуки…","ui.lore.err":"Не получилось прочитать лорбуки.","ui.btn.retry":"Ещё раз","ui.lore.none":"Лорбуков нет.","ui.lore.pick":"Выбери карточку персонажа или лорбук, потом отметь, что взять.","ui.lore.entries":"записей: {n}","ui.lore.hint":"Отметь, кто из записей — персонажи","ui.lore.noent":"В лорбуке нет включённых записей.","ui.lore.all":"Отметить все","ui.lore.nothing":"Снять все","ui.lore.had":"уже в реестре","ui.lore.add":"Добавить: {n}","ui.lore.choose":"Отметь записи","ui.lore.done":"Добавлено: {n}. Пол угадан по тексту, проверь.","ui.set.on":"Справка для модели","ui.set.onD":"Кто в сцене, кем приходится героям, незакрытые нити","ui.set.bio":"Добавлять заметку","ui.set.bioD":"Короткий отрывок из «Заметки для модели»","ui.set.first":"Искать по одному имени","ui.set.firstD":"«Изабелла» найдёт «леди Изабеллу Эшфорд»","ui.set.dock":"Кнопка 🌳 над чатом","ui.set.scan":"Сколько последних сообщений смотреть","ui.set.scanD":"Кто упомянут в них, тот и «в сцене». 📍 держит человека в сцене, даже если о нём молчат.","ui.set.max":"Сколько человек в справке","ui.set.lang":"Язык окна","ui.set.auto":"Как в Таверне","ui.set.world":"Мир этого чата","ui.btn.note":"👁️ Что уйдёт модели","ui.btn.io":"Перенос","ui.btn.wipe":"Очистить мир этого чата","ui.set.where":"У каждого чата свой мир. Чтобы продолжить мир в новом чате, открой «Перенос», скопируй текст и вставь его в новом чате.","ui.note.title":"Что уйдёт модели","ui.note.hint":"Это добавится к следующему запросу скрыто, в чате не видно.","ui.note.empty":"Сейчас ничего: в последних сообщениях нет имён из реестра. Нажми 📍 у человека, чтобы держать его в сцене.","ui.io.hint":"Скопируй этот текст и вставь в другом чате, чтобы перенести мир. Или вставь сюда текст из другого чата и загрузи: текущий мир заменится.","ui.btn.copy":"Скопировать","ui.btn.file":"Сохранить файлом","ui.btn.importText":"Загрузить из текста","ui.btn.create":"Создать","ui.ph.name":"Имя: леди Изабелла Эшфорд","ui.err.noname":"Нужно имя","ui.err.json":"Это не похоже на мир PUSYA WORLD","ui.err.missing":"Человек не найден","ui.err.self":"Нельзя связать человека с самим собой","ui.err.dup":"Такая связь уже есть","ui.err.cycle":"Так не выйдет: получится, что человек сам себе предок","ui.err.parents":"Уже два родителя. Третьего можно добавить как приёмного.","ui.err.type":"Неизвестная связь","ui.err.blood":"Это прямой предок или потомок","ui.gs.epD":"Любой OpenAI-совместимый адрес: OpenRouter, свой прокси, локальный сервер. Обычно заканчивается на /v1 — если нет, плагин допишет сам.","ui.gs.pick":"Выбрать","ui.gs.models":"Модели провайдера","ui.gs.modelsFind":"Найти модель","ui.gs.modelsLoading":"Спрашиваю у провайдера список моделей…","ui.gs.modelsN":"Моделей: {n}","ui.gs.modelsEmpty":"Провайдер не прислал список моделей","ui.gs.modelsHand":"Название модели можно вписать руками — его пишут на сайте провайдера.","ui.gs.needEp":"Сначала впиши адрес API","ui.gs.picked":"Модель: {m}","ui.gs.think":"Думающие модели","ui.gs.think.auto":"Пусть думает","ui.gs.think.off":"Без размышлений","ui.gs.think.autoD":"Если модель думает перед ответом, плагин заметит это сам и даст ей запас. Если размышления съели весь ответ — повторит запрос без них.","ui.gs.think.seen":"Эта модель думает перед ответом — плагин даёт ей запас. Если отвечает долго, выбери «Без размышлений».","ui.gs.think.offD":"Плагин сразу просит провайдера не думать: быстрее и дешевле. Поддерживают OpenRouter, Qwen, GLM, DeepSeek, vLLM и шлюзы под Claude; остальные просто не заметят.","ui.gs.err.key":"Ключ не подошёл","ui.gs.err.money":"На счету провайдера кончились деньги или лимит","ui.gs.err.model":"У провайдера нет такой модели — выбери из списка","ui.gs.err.rate":"Слишком много запросов — провайдер просит подождать","ui.gs.err.region":"Провайдер не работает в твоём регионе","ui.gs.err.long":"Запрос слишком длинный для этой модели","ui.gs.err.server":"Сервер провайдера сейчас сбоит","ui.gs.err.cors":"Браузер не пустил запрос к этому адресу. Проверь адрес; если он верный — провайдер не разрешает запросы из браузера, нужен другой или прокси.","ui.gs.err.timeout":"Модель не ответила за две с половиной минуты","ui.gs.err.think":"Модель потратила весь ответ на размышления","ui.gs.err.html":"По этому адресу не API, а страница сайта — проверь адрес","ui.card.desc":"Описание карточки","ui.card.pers":"Характер","ui.card.scen":"Сценарий","ui.card.first":"Первое сообщение","ui.card.ex":"Примеры диалогов","ui.card.book":"карточка персонажа","ui.card.hint":"Сплетница прочитает отмеченные части карточки и достанет оттуда всех людей: в RPG-карточке их бывает десятки. Записи встроенного лорбука идут ниже.","ui.card.hintNoAi":"Людей из описания карточки достаёт Сплетница — дополнительная модель. Включи её, и описание можно будет отметить. Без неё доступны только записи встроенного лорбука.","ui.gs.turnOnTavo":"Включить Сплетницу (модель Tavo)","ui.gs.turnOn":"Подключить Сплетницу","ui.gs.nowOn":"Сплетница включена: модель Tavo","ui.gs.needSetup":"Выбери модель для Сплетницы","ui.full.btn":"Разобрать весь чат · {n} сообщ.","ui.full.hint":"Если мир завели посреди истории: Сплетница прочитает чат с начала и сама внесёт всех людей, которые появлялись в сюжете, их связи и что с ними случилось. Потом можно отменить одним тапом.","ui.full.void":"Разобрать чат","ui.full.voidD":"Сплетница прочитает {n} сообщений и внесёт людей из сюжета","ui.full.reading":"Сплетница читает чат: часть {i} из {n}","ui.full.sofar":"Внесено: людей — {p}, событий — {c}","ui.full.stop":"Остановить","ui.full.result":"Чат разобран. Внесено людей: {p}, событий и связей: {c}.","ui.full.done":"Чат разобран: людей {p}, событий {c}","ui.full.ok":"Хорошо","ui.full.undo":"Отменить всё","ui.full.undone":"Разбор чата отменён","ui.full.empty":"В чате пока нет сообщений","ui.card.needAi":"Эту часть карточки разбирает Сплетница — нажми «Включить Сплетницу» выше","ui.void.loreD2":"Люди из карточки персонажа и лорбуков","ui.guide.title":"Как пользоваться","ui.guide.cta":"Что где лежит и как всё работает — коротко, по разделам","ui.guide.intro":"PUSYA WORLD помнит всех людей твоей истории: кто кому кем приходится, чем занят, что скрывает. И пока герои заняты своим, остальной мир живёт сам.","ui.guide.how.t":"Как это работает","ui.guide.how.d":"У каждого чата свой мир — реестр людей, домов и событий. Перед каждым ответом плагин находит в последних сообщениях имена из реестра и тихо подсказывает модели нужное: роль, семью, отношения к героям, незакрытые дела. В чате этой подсказки не видно. Посмотреть её можно в ⚙️ → «👁️ Что уйдёт модели».","ui.guide.start.t":"С чего начать","ui.guide.start.d":"1. Открой мир кнопкой 🌳 над чатом.\n2. «📚 Карточка и лорбуки» → карточка персонажа или лорбук. Отметь, что взять. Если в карточке много НПС (RPG-карточка), их вытащит Сплетница — включи её в ⚙️.\n3. Или добавь людей руками: «+ Персонаж», а связи — в истории человека.\n4. Если история идёт уже давно и многих НПС придумали по ходу — «Разобрать весь чат» на главном экране: Сплетница прочитает чат с начала и сама внесёт всех, кто появлялся, с их связями. Не понравится — «Отменить всё».\n5. Пиши как обычно. Новых людей из чата Сплетница предложит сама.","ui.guide.people.t":"Главный экран и истории","ui.guide.people.d":"Сверху — кто сейчас в сцене. Плитки «В сцене», «Важные», «Давно не было», «Все» раскрываются по тапу. Тап по портрету открывает историю человека: семья словами, отношения, тайны, события. Карандаш в шапке — правка. Значок 📍 закрепляет человека в сцене, даже если его не называют по имени.","ui.guide.badges.t":"Значки над портретами","ui.guide.bd.main":"Главный герой чата или персона","ui.guide.bd.scene":"Назван в последних сообщениях или закреплён 📍","ui.guide.bd.affair":"Встречается с кем-то тайно — обычно при живом супруге","ui.guide.bd.scheme":"Месть, выгодный брак или борьба за власть","ui.guide.bd.secret":"О нём есть тайна. Кто её знает — видно в истории","ui.guide.bd.gossip":"Сплетник или знает чужую тайну","ui.guide.bd.feud":"В открытой вражде или соперничестве с кем-то","ui.guide.bd.love":"Влюблён, помолвлен или в браке","ui.guide.bd.ill":"Болезнь может пройти, а может и нет","ui.guide.bd.dead":"Остаётся в древе и в истории","ui.guide.houses.t":"Дома и древо","ui.guide.houses.d":"Дом — это семья, клан, гильдия. Тап по гербу открывает древо: родители, супруги, дети. Тап по портрету в древе — история человека. Родство плагин считает сам: если указаны родители, он знает и про кузенов, тёть и свекровей.","ui.guide.director.t":"Режиссёр","ui.guide.director.d":"Следит, кого давно не было и кто подходит к сцене по месту, связям и незакрытым делам. «Подсказывать» — показывает кандидатов на главном экране. «Сам» — когда шкала дойдёт до 100%, вводит одного в следующий ответ. Кнопка 🎬 у человека — ввести его прямо сейчас.","ui.guide.time.t":"Время","ui.guide.time.d":"По умолчанию время идёт по сюжету. Когда в истории наступает новый день или проходит время («наутро», «через неделю»), модель чата ставит в конце ответа невидимую пометку, и мир проживает столько же дней. Сколько сообщений занял день — неважно. В ⚙️ → «Жизнь за кадром» можно выбрать «По ответам» или «Вручную», а в хронике — прожить неделю или месяц кнопкой.","ui.guide.life.t":"Жизнь за кадром","ui.guide.life.d":"Пока героев нет рядом, люди знакомятся, влюбляются, женятся, ссорятся, болеют, меняют работу, у них рождаются дети. Главные герои сами ничего не делают — их жизнь в твоих руках. В ⚙️ выбираются темп и что может случиться (смерть по умолчанию выключена). Всё видно в хронике: «Правда» — всё, что было, «Что знает герой» — только дошедшее до него.","ui.guide.news.t":"Слухи и новости","ui.guide.news.d":"Публичное и слухи расходятся по знакомым. Когда весть доходит до главного героя, модель может упомянуть её в разговоре: «Представь, Изабелла и Роланд…». Тайное остаётся тайным, пока его не раскроют.","ui.guide.intrigue.t":"Тайны и замыслы","ui.guide.intrigue.d":"У человека могут быть тайны (видно, кто о них знает) и замысел: месть, выгодный брак, власть. Тайны раскрываются, ими шантажируют. Замыслы против главных героев за кадром не завершаются — модель получает намёк и разыгрывает их в сцене.","ui.guide.gossip.t":"Сплетница","ui.guide.gossip.d":"Дополнительная модель. Раз в несколько сообщений читает чат и предлагает изменения: новое лицо, свадьба, ссора, тайна — ты принимаешь ✓ или отклоняешь ✕. Ещё она разбирает карточки и лорбуки и пишет события хроники живым языком. Без неё плагин тоже работает, только всё вносится руками.","ui.guide.model.t":"Своя модель для Сплетницы","ui.guide.model.d":"⚙️ → Сплетница → «своя модель». Впиши адрес любого OpenAI-совместимого провайдера (OpenRouter, свой прокси, локальный сервер) и ключ, затем нажми «Выбрать» — плагин загрузит список моделей. «Проверить связь» скажет, отвечает ли модель. Думающие модели плагин распознаёт сам и даёт им запас; если отвечает долго — включи «Без размышлений». Можно не настраивать ничего и выбрать «модель Tavo».","ui.guide.play.t":"Сыграть за НПС","ui.guide.play.d":"В истории любого НПС — кнопка «Сыграть за…». Действия зависят от ситуации, шансы считает плагин. Со Сплетницей это короткая сцена с выбором тона. Итог остаётся в мире и расходится слухами, а «В чат как интерлюдию» вставит отрывок в поле ввода.","ui.guide.move.t":"Перенос мира","ui.guide.move.d":"У каждого чата свой мир. Чтобы продолжить в новом чате: ⚙️ → «Перенос» → скопировать текст, открыть новый чат и вставить его там же. Ключ модели не переносится.","ui.guide.window.t":"Окно и кнопка","ui.guide.window.d":"Кнопку 🌳 можно перетащить в удобное место, а спрятать — в ⚙️ → «Окно». Мир открывается и из меню у поля ввода или из бокового меню Tavo.","ui.guide.windowST.d":"Окно двигается за шапку, на ПК меняет размер за уголок внизу справа, масштаб — в ⚙️ → «Окно». Двойное касание шапки возвращает окно на место. Открыть мир: кнопка 🌳, меню-палочка у поля ввода или раздел в настройках расширений.","ui.tmode.title":"Как идёт время","ui.tmode.story":"По сюжету","ui.tmode.msgs":"По ответам","ui.tmode.off":"Вручную","ui.tmode.storyD":"Модель чата сама отмечает, когда в истории наступает новый день или проходит время («утром», «через неделю»). Мир за кадром проживает столько же дней. Сколько сообщений занял день — неважно.","ui.tmode.msgsD":"Каждые N ответов мир проживает выбранный срок, что бы ни происходило в истории.","ui.tmode.offD":"Время идёт только по кнопкам в хронике.","ui.time.story":"Время идёт по сюжету: когда в чате наступает новый день, мир проживает его. Кнопки ниже — прожить время вперёд вручную.","ui.win.zoom":"Масштаб окна","ui.win.hint":"Окно двигается за шапку, размер меняется за уголок внизу справа. Двойной щелчок по шапке возвращает всё как было.","ui.win.hintPhone":"Окно можно двигать за шапку. Двойное касание шапки возвращает его на место.","ui.win.reset":"Вернуть окно на место","ui.win.wasReset":"Окно на месте","st.info":"Окно открывается кнопкой 🌳 над чатом или из меню расширений (волшебная палочка у поля ввода).","st.dock":"Вернуть кнопку 🌳","st.noPanel":"Не нашла файлы окна. Переустанови расширение.","ui.toast.saveFail":"Не получилось сохранить","ui.toast.same":"Человек с таким именем уже есть","ui.toast.copied":"Скопировано","ui.toast.saved":"Сохранено","ui.toast.imported":"Мир загружен"},"en":{"plugin.name":"PUSYA WORLD","plugin.description":"A living world of NPCs: character registry, dynasties and kinship, roles and unfinished business. The model remembers who is related to whom. By PUSYA · t.me/pusgir","releaseNotes.0_3_1":"Fixed: settings no longer flicker on every tap; card parts without Gossip now show a lock and a “Turn on Gossip” button. Added: people from the character card, reading the whole chat, time that follows the story, picking a model from a list, thinking-model support, a “How to use” guide, a SillyTavern version.","releaseNotes.0_3_0":"NPC registry with kinship and houses, a director that brings fitting NPCs into the scene, off-screen life with rumors and news for the hero, secrets, schemes and eras.","actions.open":"PUSYA WORLD 🌳","settings.info.open":"Open the window with the 🌳 button over the chat, from the input menu or from the sidebar.","settings.info.how":"Before each reply the plugin finds registry names in the latest messages and quietly gives the model a short note: role, house, ties to the heroes, unfinished business.","settings.privacy":"The world is stored in this chat’s variables. The plugin goes online only when Gossip is on: it sends the latest messages and a short list of people to the model you chose. Your key stays with you.","settings.info.author":"By PUSYA · t.me/pusgir","ui.dir.title":"Director","ui.dir.autoNow":"brings someone in at 100%: {n}%","ui.dir.hintNow":"suggesting · {n}%","ui.dir.ripe":"time to bring someone in","ui.dir.waiting":"appears in the next reply","ui.dir.none":"No one to suggest right now: nobody is tied to the scene. Add places, ties or threads.","ui.dir.cue":"Bring in next reply","ui.dir.cueBtn":"🎬 Bring in with the next reply","ui.dir.cueOn":"🎬 Waiting for the next reply · cancel","ui.dir.cued":"{name} will appear in the next reply","ui.dir.more":"More candidates (up to {n})","ui.dir.less":"Show less","ui.dir.noteCue":"Plus the director’s cue:","ui.dir.m.off":"off","ui.dir.m.hint":"suggests","ui.dir.m.auto":"acts on its own","ui.dir.m.offD":"The director stays quiet. The 🎬 button on a person still works.","ui.dir.m.hintD":"Shows who would fit the scene and pulses the 🌳 button when it’s time. You bring them in with 🎬.","ui.dir.m.autoD":"When pressure reaches 100%, it gently suggests one of the best candidates to the model.","ui.dir.sp.slow":"rarely","ui.dir.sp.mid":"sometimes","ui.dir.sp.fast":"often","ui.why.place":"often at {v}","ui.why.seat":"scene at the seat: {v}","ui.why.thread":"thread: {v}","ui.why.never":"not in the story yet","ui.why.long":"not seen for long","ui.why.role":"fits the scene: {v}","ui.opt.nodir":"Never cue via director","ui.opt.nodirD":"The director won’t suggest this person","ui.head.chron":"Chronicle","ui.date":"Year {y} · {s} · day {d}","ui.month":"Year {y} · {s} · month {m}","ui.season.0":"spring","ui.season.1":"summer","ui.season.2":"autumn","ui.season.3":"winter","ui.time.d":"day","ui.time.w":"week","ui.time.m":"month","ui.time.s":"season","ui.time.y":"year","ui.time.hint":"World time only moves when you move it. Whoever is in the scene stays out of off-screen events.","ui.time.auto":"And automatically: every {n} replies a {d} passes","ui.time.done":"{date}: {n} events","ui.ch.few":"At least two NPCs are needed for anything to happen off-screen.","ui.ch.all":"The truth","ui.ch.known":"What {name} knows","ui.ch.minor":"small stuff","ui.ch.none":"Nothing has happened yet. Move time with the buttons above.","ui.ch.noneMode":"Nothing in this view.","ui.pub.public":"public","ui.pub.rumor":"rumor","ui.pub.secret":"secret","ui.ev.known":"{n} know","ui.ev.heardBy":"{name} heard from {by}","ui.ev.heardTown":"{name} heard it around town","ui.ev.told":"sent to the model","ui.life.title":"Off-screen life","ui.life.every":"Time moves on its own","ui.life.manual":"buttons only","ui.life.n":"every {n} replies","ui.life.days":"How much each time","ui.life.pace":"Pace of events","ui.pace.calm":"calm","ui.pace.normal":"normal","ui.pace.drama":"drama","ui.cat.romance":"Romance","ui.cat.romanceD":"dating, breakups, secret affairs","ui.cat.family":"Family","ui.cat.familyD":"engagements, weddings, divorces, children","ui.cat.career":"Career","ui.cat.careerD":"new positions, moving away","ui.cat.fortune":"Fortune","ui.cat.fortuneD":"fortunes made and lost","ui.cat.health":"Health","ui.cat.healthD":"illness and recovery","ui.cat.drama":"Drama","ui.cat.dramaD":"falling-outs, feuds, reconciliations","ui.cat.death":"Deaths","ui.cat.deathD":"old age and illness; never the main characters","ui.life.pairs":"Couples","ui.pairs.any":"any","ui.pairs.mf":"man + woman only","ui.life.news":"News per reply","ui.life.newsD":"When a rumor reaches the hero, the model learns what was heard, from whom and when, and may bring it up. Each piece of news is sent at most three times.","ui.opt.safe":"Leave alone off-screen","ui.opt.safeD":"Only calm things: work, money, moving. No romance, drama, weddings or death.","ui.toast.conflict":"The world changed while the window was open: the edit was not saved, reloading","ui.why.goal":"scheme: {g}","ui.why.knows":"knows a secret about {name}","ui.goal.match":"seeking a match for {name}","ui.goal.revenge":"revenge on {name}","ui.goal.rise":"rise higher","ui.goal.win":"win {name}","ui.goal.ready":"ready to act — up to the story now","ui.goal.end.done":"done","ui.goal.end.fail":"failed","ui.goal.end.moot":"no longer relevant","ui.goal.end.gone":"no one left to pursue it","ui.goal.end.drop":"dropped","ui.goal.btn.revenge":"revenge","ui.goal.btn.win":"win someone","ui.goal.btn.rise":"rise higher","ui.goal.btn.match":"match for a child","ui.goal.pick.revenge":"Whom does {name} want revenge on?","ui.goal.pick.win":"Whom does {name} want to win?","ui.goal.pick.match":"For which child does {name} seek a match?","ui.goal.pick.rise":"{name}","ui.sec.intrigue":"Secrets & schemes","ui.sec.out":"out in the open","ui.sec.knownBy":"known to: {names}","ui.sec.nobody":"no one else knows","ui.sec.heroKnows":"{name} knows","ui.sec.heroNot":"{name} doesn’t know","ui.sec.toggle":"Does the hero know","ui.ph.secret":"New secret: the king’s illegitimate son","ui.hint.secretsHero":"NPCs may uncover and expose the hero’s secrets off-screen. The hero never acts off-screen.","ui.hint.intrigue":"Secrets surface off-screen: those close find out, the greedy blackmail, enemies and gossips expose. A scheme grows over time and ends in an event; if it targets a main character, the story plays it out. The model sees secrets and schemes but won’t reveal them on its own.","ui.cat.intrigue":"Intrigue","ui.cat.intrigueD":"secrets, blackmail, scandals, schemes, poison","ui.sec.people":"People","ui.sec.houses":"Houses & families","ui.tile.scene":"In the scene","ui.tile.important":"Important","ui.tile.long":"Not seen lately","ui.tile.all":"Everyone","ui.tile.none":"No one here yet","ui.house.members":"{n} people","ui.house.add":"New house","ui.house.edit":"House: name and head","ui.chron.empty":"All quiet so far. Move time in the chronicle.","ui.tree.hint":"Tap a portrait to open that person’s story. Dashed rings mark those who married in from another house.","ui.badge.main":"main character","ui.badge.scene":"in the scene","ui.badge.affair":"secret affair","ui.badge.scheme":"scheming","ui.badge.secret":"keeps a secret","ui.badge.gossip":"knows others’ secrets","ui.badge.feud":"feud","ui.badge.love":"in love","ui.badge.ill":"ill","ui.badge.dead":"deceased","ui.now.dead":"Deceased","ui.now.married":"Married to {name}","ui.now.betrothed":"Engaged to {name}","ui.now.seeing":"Seeing {name}","ui.now.affair":"Secret affair with {name}","ui.now.enemy":"Enemy: {name}","ui.now.ill":"Ill","ui.now.place":"Usually at {v}","ui.story.age":"age {n}","ui.story.now":"Right now","ui.story.history":"Story so far","ui.story.more":"{n} more","ui.story.tapReveal":"tap to read","ui.story.pr":"ripening: {n}%","ui.story.edit":"Edit","ui.ch.season":"Year {y} · {s}","ui.ch.year":"Year {y}","ui.ch.day":"day {d}","ui.set.dirSpeed":"How often","ui.set.cats":"What can happen","ui.set.model":"What the model sees","ui.set.window":"Window","ui.life.manualShort":"manual","ui.note.k.traits":"traits","ui.note.k.ties":"ties","ui.note.k.now":"now","ui.note.k.lately":"lately","ui.note.k.threads":"threads","ui.note.k.secret":"secret","ui.note.k.agenda":"agenda","ui.note.k.notes":"notes","ui.note.sec.people":"Who is in the scene","ui.note.sec.news":"News for the hero","ui.note.raw":"Show as raw text for the model","ui.note.cards":"Show as cards","ui.io.give":"Give this world","ui.io.stats":"{p} people · {h} houses · {e} events. Copy it and paste in another chat.","ui.io.take":"Take a world","ui.io.takeD":"Paste the text from another chat. This chat’s world will be replaced.","ui.io.paste":"Paste the copied world here…","ui.edit.hint":"Changes save automatically","ui.edit.name":"Name & identity","ui.edit.place":"Standing","ui.edit.char":"Character","ui.edit.story":"For the story","ui.void.title":"The world is empty","ui.void.text":"This is where the NPCs of this story will live: families, houses, secrets and everything that happens to them off-screen.","ui.void.lore":"Take from the card or a lorebook","ui.void.loreD":"Tick the character entries and they join the world","ui.void.add":"Add a character","ui.void.addD":"A name and sex — the rest can wait","ui.void.house":"Found a house","ui.void.houseD":"A family, lineage, clan or guild","ui.void.how":"When a name from the world appears in chat, the model gets a note about that person and their ties. The main characters are already here.","ui.gs.name":"Gossip","ui.gs.about":"An extra model. Reads the chat and notices what changed for people; parses the lorebook with relations; writes off-screen events in your world’s own voice.","ui.gs.src.tavo":"SillyTavern model","ui.gs.src.own":"own model","ui.gs.tavoD":"Uses SillyTavern’s connection — the same as the chat. Spends its tokens.","ui.gs.ep":"API address","ui.gs.model":"Model","ui.gs.key":"Key","ui.gs.keyD":"Any fast, cheap model with an OpenAI-compatible API will do. The key stays with you and is never included in world transfers.","ui.gs.test":"Test connection","ui.gs.testing":"Testing…","ui.gs.testOk":"Gossip is connected","ui.gs.every":"Read the chat every … messages","ui.gs.flavor":"Bring events to life","ui.gs.flavorD":"Off-screen events are rewritten in your world’s voice, and reach the hero’s news that way","ui.gs.lore":"Parse the lorebook","ui.gs.loreD":"On import it pulls relations, age, role, traits, house and secrets from the entries","ui.gs.privacy":"Gossip gets the latest messages and a short list of people. Nothing is applied by itself: findings wait for your yes.","ui.gs.reading":"reading the chat…","ui.gs.readNow":"read now","ui.gs.quiet":"Nothing new yet. Reads the chat every {n} messages.","ui.gs.setup":"Connect a model in settings and Gossip will start noticing what changes in the story.","ui.gs.error":"Gossip couldn’t reach the model: {e}","ui.gs.found":"Gossip noticed {n} things","ui.gs.accepted":"Accepted: {n}","ui.gs.acceptAll":"accept all ({n})","ui.gs.rejectAll":"dismiss all","ui.gs.noTavo":"SillyTavern did not provide a model — pick your own","ui.gs.badAnswer":"the model replied in the wrong format","ui.gs.empty":"the model said nothing","ui.gs.readingLore":"Gossip is reading the lorebook…","ui.gs.loreAdd":"Parse and add {n}","ui.gs.loreDone":"Gossip parsed the lorebook: {n} people with relations","ui.gs.loreFail":"Gossip failed — adding the plain way","ui.gs.err.who":"Accept the new person first: {name}","ui.gs.err.with":"Accept the new person first: {name}","ui.gs.k.person":"New face: {a} ({v})","ui.gs.k.marry":"{a} and {b} got married","ui.gs.k.divorce":"{a} and {b} divorced","ui.gs.k.engage":"{a} and {b} got engaged","ui.gs.k.date":"{a} and {b} are together now","ui.gs.k.breakup":"{a} and {b} broke up","ui.gs.k.death":"{a} died","ui.gs.k.ill":"{a} fell ill","ui.gs.k.heal":"{a} recovered","ui.gs.k.move":"{a} is now at {v}","ui.gs.k.job":"{a} — new occupation: {v}","ui.gs.k.title":"{a} — new title: {v}","ui.gs.k.quarrel":"{a} and {b} fell out","ui.gs.k.reconcile":"{a} and {b} made peace","ui.gs.k.enemy":"{a} and {b} are now enemies","ui.gs.k.secret_new":"{a}’s secret: {v}","ui.gs.k.secret_out":"It came out about {a}: {v}","ui.gs.k.pregnant":"{a} is expecting {b}’s child","ui.gs.k.birth":"{a} had a child: {v}","ui.gs.k.kin":"{a} is {b}’s {v}","ui.ev.onscreen":"in the story","ui.world.title":"What this world has","ui.world.magic":"magic","ui.world.nobility":"nobility","ui.world.modern":"technology","ui.world.auto":"Detected automatically from the chat and people. No magic means no curses; no nobility means no duels or debuts; with technology arranged marriages almost vanish.","ui.world.hand":"Set by hand.","ui.world.toAuto":"Detect automatically","ui.play.a.talk":"Talk","ui.play.d.talk":"heart to heart or business","ui.play.a.charm":"Charm","ui.play.d.charm":"flirt, win them over","ui.play.a.confess":"Confess","ui.play.d.confess":"your feelings","ui.play.a.propose":"Propose","ui.play.d.propose":"marriage","ui.play.a.quarrel":"Have it out","ui.play.d.quarrel":"and fall out","ui.play.a.reconcile":"Make peace","ui.play.d.reconcile":"try to mend it","ui.play.a.snoop":"Snoop","ui.play.d.snoop":"eavesdrop, dig around","ui.play.a.blackmail":"Blackmail","ui.play.d.blackmail":"with their secret","ui.play.a.expose":"Expose","ui.play.d.expose":"let everyone know","ui.play.a.matchmake":"Arrange a match","ui.play.d.matchmake":"for your child","ui.play.a.letter":"Write a letter","ui.play.d.letter":"to anyone, even far away","ui.play.a.scheme":"Work on a scheme","ui.play.d.scheme":"the secret plan","ui.play.a.go":"Go somewhere","ui.play.d.go":"change place","ui.play.a.free":"Your own action","ui.play.d.free":"describe it","ui.play.l.like_up":"{name} warms to you","ui.play.l.like_down":"{name} cooled toward you","ui.play.l.love":"{name} is clearly interested","ui.play.l.dating":"You and {name} are together now","ui.play.l.affair":"A secret affair with {name}","ui.play.l.refused":"{name} said no","ui.play.l.engaged":"Engaged to {name}","ui.play.l.engaged2":"{name} is betrothed to {name2}","ui.play.l.rival":"{name} is hostile now","ui.play.l.peace":"Made peace with {name}","ui.play.l.secret":"Secret: {v}","ui.play.l.nothing":"Nothing turned up","ui.play.l.caught":"{name} caught you at it","ui.play.l.yields":"{name} gave in — and holds a grudge","ui.play.l.defies":"{name} refused — you are enemies now","ui.play.l.scandal":"Scandal! Out in the open: {v}","ui.play.l.noanswer":"No answer","ui.play.l.goal":"The scheme ripens: {v}","ui.play.l.moved":"Now at {v}","ui.play.btn":"🎭 Play as {name}","ui.play.title":"Playing an NPC","ui.play.as":"you are playing","ui.play.nowhere":"somewhere","ui.play.near":"Nearby:","ui.play.alone":"no one","ui.play.writing":"Gossip is writing the scene…","ui.play.ok":"It worked","ui.play.no":"It didn’t work","ui.play.ch.high":"good odds","ui.play.ch.mid":"even odds","ui.play.ch.low":"long odds","ui.play.tone.warm":"warm","ui.play.tone.bold":"bold","ui.play.tone.sly":"sly","ui.play.tone.cold":"cold","ui.play.again":"Another action","ui.play.toChat":"To chat as an interlude","ui.play.done":"Done, go back","ui.play.go":"Go ahead","ui.play.placePh":"or another place…","ui.play.freePh":"What does {name} do? E.g.: secretly reads her husband’s letters","ui.play.freeGo":"Play it","ui.play.freeNeed":"Your own action is interpreted by Gossip — connect it in settings.","ui.play.hint":"Odds come from relationships, traits and secrets. Gossip writes the scene, and your choice in it sways the outcome. Whatever happens becomes part of the world: rumors spread, the hero may hear.","ui.play.hintNoAI":"Odds come from relationships, traits and secrets. With Gossip connected every action becomes a scene with choices.","ui.play.meanwhile":"Meanwhile — {name}:","ui.play.inInput":"The interlude is in the input box — send it if you like","ui.title":"World","ui.head.houses":"Houses & dynasties","ui.head.lore":"Card and lorebooks","ui.head.set":"Settings","ui.loading":"Loading the world…","ui.status.off":"Off: nothing is sent to the model","ui.status.scene":"In the scene: {names}","ui.status.empty":"No one from the registry in the scene","ui.search":"Name, role, house, place…","ui.f.all":"All","ui.f.scene":"In scene","ui.f.main":"Important","ui.f.long":"Not seen lately","ui.empty.filter":"No one found","ui.empty.world":"The world is empty so far","ui.empty.houses":"No houses yet. A house is a family, lineage, clan or guild.","ui.btn.add":"+ Character","ui.btn.lore":"📚 Card and lorebooks","ui.hint.start":"Add NPCs by hand or from a lorebook, then link them: parents, children, marriages. When a name shows up in chat, the model gets a note about the person and their ties.","ui.relOf":"{rel} of {name}","ui.seen.now":"in the scene now","ui.seen.last":"in the last message","ui.seen.ago":"seen {n} messages ago","ui.seen.never":"not seen yet","ui.pin":"Keep in scene","ui.sec.family":"Family","ui.sec.kinAll":"All relatives and in-laws: {n}","ui.sec.who":"Who they are","ui.sec.threads":"Unfinished business","ui.sec.tree":"Family tree · {n}","ui.kin.parent":"parent","ui.kin.child":"child","ui.kin.spouse":"spouse","ui.kin.exspouse":"former spouse","ui.kin.sibling":"sibling","ui.pick.sibling":"Sibling of {name}","ui.kin.betrothed":"betrothed","ui.kin.none":"No ties yet. The rest of the family (uncles, cousins, in-laws) is worked out automatically.","ui.opt.ill":"illegitimate","ui.opt.ad":"adopted","ui.opt.ex":"former marriage","ui.pick.parent":"Parent of {name}","ui.pick.child":"Child of {name}","ui.pick.spouse":"Spouse of {name}","ui.pick.betrothed":"Betrothed to {name}","ui.ph.pick":"Who? Name…","ui.btn.newNamed":"+ New: {name}","ui.f.name":"Name","ui.f.aliases":"Other names and nicknames","ui.ph.aliases":"comma-separated: Bella, Lady Ashford","ui.hint.auto":"Also matched by first name: {names}","ui.sex.f":"♀ female","ui.sex.m":"♂ male","ui.sex.x":"unspecified","ui.f.age":"Age","ui.f.house":"House","ui.house.none":"no house","ui.house.new":"+ new house…","ui.f.title":"Title","ui.ph.title":"lady, count…","ui.f.job":"Occupation","ui.ph.job":"lady-in-waiting, smith…","ui.f.faction":"Faction","ui.ph.faction":"court, guild…","ui.f.place":"Usually at","ui.ph.place":"capital, harbour…","ui.f.traits":"Traits","ui.ph.traits":"ambitious, gossip","ui.f.bio":"Note for the model","ui.ph.bio":"briefly: looks, character, what to remember","ui.ph.thread":"promised to fetch the duke’s letter","ui.hint.threads":"Promises, debts, grudges, unfinished deals. The model sees them while the person is in the scene. ✓ closes a thread.","ui.opt.important":"Important character","ui.opt.importantD":"Shows up in “Not seen lately” when absent for long","ui.opt.main":"Main character","ui.opt.mainD":"Card character or persona: no note about them, but ties to them are given","ui.opt.alive":"Alive","ui.hint.fromLore":"Added from a lorebook. The plugin never changes the lorebook entry.","ui.btn.delPerson":"Delete character","ui.btn.sure":"Sure? Tap again","ui.f.hname":"House name","ui.f.seat":"Seat","ui.ph.seat":"castle, estate…","ui.f.head":"Head","ui.f.motto":"Motto","ui.ph.motto":"optional","ui.ph.house":"New house: House Ashford","ui.hint.houseEmpty":"No one in this house yet. Add members; ties between them are set in their cards.","ui.tree.sibs":"siblings","ui.btn.member":"+ Add to house","ui.btn.delHouse":"Delete house","ui.lore.noapi":"SillyTavern did not provide lorebook access.","ui.lore.loading":"Reading lorebooks…","ui.lore.err":"Could not read the lorebooks.","ui.btn.retry":"Retry","ui.lore.none":"No lorebooks.","ui.lore.pick":"Pick the character card or a lorebook, then tick what to take.","ui.lore.entries":"{n} entries","ui.lore.hint":"Tick the entries that are characters","ui.lore.noent":"No enabled entries in this lorebook.","ui.lore.all":"Select all","ui.lore.nothing":"Clear","ui.lore.had":"already in the registry","ui.lore.add":"Add {n}","ui.lore.choose":"Tick some entries","ui.lore.done":"Added {n}. Sex was guessed from the text, please check.","ui.set.on":"Note for the model","ui.set.onD":"Who is in the scene, ties to the heroes, unfinished business","ui.set.bio":"Include the note","ui.set.bioD":"A short excerpt of “Note for the model”","ui.set.first":"Match first name alone","ui.set.firstD":"“Isabella” finds “Lady Isabella Ashford”","ui.set.dock":"🌳 button over the chat","ui.set.scan":"How many recent messages to scan","ui.set.scanD":"Whoever is mentioned there counts as “in the scene”. 📍 keeps someone in the scene even when unmentioned.","ui.set.max":"How many people in the note","ui.set.lang":"Window language","ui.set.auto":"Same as SillyTavern","ui.set.world":"This chat’s world","ui.btn.note":"👁️ What the model gets","ui.btn.io":"Transfer","ui.btn.wipe":"Wipe this chat’s world","ui.set.where":"Each chat has its own world. To continue a world in a new chat, open “Transfer”, copy the text and paste it in the new chat.","ui.note.title":"What the model gets","ui.note.hint":"This is added to the next request quietly; it does not show in chat.","ui.note.empty":"Nothing right now: no registry names in the latest messages. Tap 📍 next to someone to keep them in the scene.","ui.io.hint":"Copy this text and paste it in another chat to move the world. Or paste text from another chat here and load it: the current world will be replaced.","ui.btn.copy":"Copy","ui.btn.file":"Save as file","ui.btn.importText":"Load from text","ui.btn.create":"Create","ui.ph.name":"Name: Lady Isabella Ashford","ui.err.noname":"A name is needed","ui.err.json":"This doesn’t look like a PUSYA WORLD world","ui.err.missing":"Person not found","ui.err.self":"Can’t link a person to themselves","ui.err.dup":"This tie already exists","ui.err.cycle":"Not possible: they would be their own ancestor","ui.err.parents":"Already two parents. A third can be added as adoptive.","ui.err.type":"Unknown tie","ui.err.blood":"That is a direct ancestor or descendant","ui.gs.epD":"Any OpenAI-compatible address: OpenRouter, your own proxy, a local server. It usually ends in /v1 — if not, the plugin adds it.","ui.gs.pick":"Pick","ui.gs.models":"Provider models","ui.gs.modelsFind":"Find a model","ui.gs.modelsLoading":"Asking the provider for its models…","ui.gs.modelsN":"Models: {n}","ui.gs.modelsEmpty":"The provider sent no model list","ui.gs.modelsHand":"You can type the model name by hand — the provider’s site lists it.","ui.gs.needEp":"Enter the API address first","ui.gs.picked":"Model: {m}","ui.gs.think":"Thinking models","ui.gs.think.auto":"Let it think","ui.gs.think.off":"No thinking","ui.gs.think.autoD":"If the model thinks before answering, the plugin notices and gives it room. If thinking ate the whole answer, it retries without thinking.","ui.gs.think.seen":"This model thinks before answering — the plugin gives it room. If it is slow, pick “No thinking”.","ui.gs.think.offD":"The plugin asks the provider not to think: faster and cheaper. OpenRouter, Qwen, GLM, DeepSeek, vLLM and Claude gateways support it; others simply ignore it.","ui.gs.err.key":"The key was rejected","ui.gs.err.money":"Out of credit or quota at the provider","ui.gs.err.model":"The provider has no such model — pick one from the list","ui.gs.err.rate":"Too many requests — the provider asks to wait","ui.gs.err.region":"The provider does not work in your region","ui.gs.err.long":"The request is too long for this model","ui.gs.err.server":"The provider’s server is failing right now","ui.gs.err.cors":"The browser blocked the request to this address. Check it; if it is right, the provider does not allow browser requests — use another one or a proxy.","ui.gs.err.timeout":"The model did not answer within two and a half minutes","ui.gs.err.think":"The model spent the whole answer on thinking","ui.gs.err.html":"This address returns a web page, not an API — check it","ui.card.desc":"Card description","ui.card.pers":"Personality","ui.card.scen":"Scenario","ui.card.first":"First message","ui.card.ex":"Example dialogues","ui.card.book":"character card","ui.card.hint":"Gossip reads the ticked parts of the card and pulls out every person: an RPG card can hold dozens. Embedded lorebook entries are below.","ui.card.hintNoAi":"Gossip, an extra model, pulls people out of the card description. Turn it on and you can tick the description. Without it, only embedded lorebook entries are available.","ui.gs.turnOnTavo":"Turn on Gossip (SillyTavern model)","ui.gs.turnOn":"Set up Gossip","ui.gs.nowOn":"Gossip is on: SillyTavern model","ui.gs.needSetup":"Pick a model for Gossip","ui.full.btn":"Read the whole chat · {n} msgs","ui.full.hint":"If the world was started mid-story: Gossip reads the chat from the beginning and adds everyone who appeared in the plot, their ties and what happened to them. You can undo it with one tap.","ui.full.void":"Read the chat","ui.full.voidD":"Gossip reads {n} messages and adds the people from the plot","ui.full.reading":"Gossip is reading the chat: part {i} of {n}","ui.full.sofar":"Added so far: people — {p}, events — {c}","ui.full.stop":"Stop","ui.full.result":"Chat read. People added: {p}, events and ties: {c}.","ui.full.done":"Chat read: {p} people, {c} events","ui.full.ok":"OK","ui.full.undo":"Undo all","ui.full.undone":"Chat reading undone","ui.full.empty":"The chat has no messages yet","ui.card.needAi":"Gossip reads this part of the card — tap “Turn on Gossip” above","ui.void.loreD2":"People from the character card and lorebooks","ui.guide.title":"How to use","ui.guide.cta":"What is where and how it all works — short, by topic","ui.guide.intro":"PUSYA WORLD remembers everyone in your story: who is related to whom, what they do, what they hide. And while the heroes are busy, the rest of the world lives on.","ui.guide.how.t":"How it works","ui.guide.how.d":"Every chat has its own world — a registry of people, houses and events. Before each reply the plugin finds registry names in the latest messages and quietly tells the model what matters: role, family, ties to the heroes, unfinished business. The note is not shown in the chat. You can see it in ⚙️ → “👁️ What the model gets”.","ui.guide.start.t":"Getting started","ui.guide.start.d":"1. Open the world with the 🌳 button over the chat.\n2. “📚 Card and lorebooks” → the character card or a lorebook. Tick what to take. If the card has many NPCs (an RPG card), Gossip pulls them out — turn it on in ⚙️.\n3. Or add people by hand: “+ Character”, and ties in their story.\n4. If the story has been going for a while and many NPCs were made up along the way — “Read the whole chat” on the main screen: Gossip reads the chat from the start and adds everyone who appeared, with their ties. Don’t like it — “Undo all”.\n5. Write as usual. Gossip will suggest new people from the chat by itself.","ui.guide.people.t":"Main screen and stories","ui.guide.people.d":"At the top — who is in the scene now. The tiles “In scene”, “Important”, “Not seen lately”, “All” open on tap. Tap a portrait to open the person’s story: family in words, relationships, secrets, events. The pencil in the header edits. 📍 pins someone to the scene even when nobody names them.","ui.guide.badges.t":"Badges over portraits","ui.guide.bd.main":"A main character of the chat or the persona","ui.guide.bd.scene":"Named in the latest messages or pinned with 📍","ui.guide.bd.affair":"Secretly seeing someone — usually while married","ui.guide.bd.scheme":"Revenge, an advantageous match or a grab for power","ui.guide.bd.secret":"There is a secret about them; the story shows who knows it","ui.guide.bd.gossip":"A gossip, or knows someone else’s secret","ui.guide.bd.feud":"In an open feud or rivalry with someone","ui.guide.bd.love":"In love, engaged or married","ui.guide.bd.ill":"The illness may pass, or may not","ui.guide.bd.dead":"Stays in the tree and in the story","ui.guide.houses.t":"Houses and the tree","ui.guide.houses.d":"A house is a family, clan or guild. Tap a crest to open the tree: parents, spouses, children. Tap a portrait in the tree for the person’s story. Kinship is worked out automatically: once parents are set, the plugin knows cousins, aunts and in-laws too.","ui.guide.director.t":"Director","ui.guide.director.d":"Watches who has been away for long and who fits the scene by place, ties and unfinished business. “Suggest” shows candidates on the main screen. “Auto” brings one into the next reply when the bar reaches 100%. The 🎬 button on a person brings them in right now.","ui.guide.time.t":"Time","ui.guide.time.d":"By default time follows the story. When a new day starts or time skips ahead (“next morning”, “a week later”), the chat model leaves an invisible mark at the end of its reply, and the world lives the same number of days. It does not matter how many messages a day takes. In ⚙️ → “Off-screen life” you can choose “By replies” or “Manually”, and the chronicle has buttons to skip a week or a month.","ui.guide.life.t":"Off-screen life","ui.guide.life.d":"While the heroes are away, people meet, fall in love, marry, quarrel, fall ill, change jobs, have children. The main heroes never act by themselves — their lives are yours. ⚙️ sets the pace and what can happen (death is off by default). Everything is in the chronicle: “Truth” is all that happened, “What the hero knows” is only what reached them.","ui.guide.news.t":"Rumors and news","ui.guide.news.d":"Public news and rumors spread through acquaintances. When news reaches the main hero, the model may bring it up in conversation: “Can you believe Isabella and Roland…”. Secrets stay secret until someone uncovers them.","ui.guide.intrigue.t":"Secrets and schemes","ui.guide.intrigue.d":"A person can have secrets (you see who knows them) and a scheme: revenge, an advantageous match, power. Secrets get discovered and used for blackmail. Schemes against the main heroes never finish off-screen — the model gets a hint and plays them out in the scene.","ui.guide.gossip.t":"Gossip","ui.guide.gossip.d":"An extra model. Every few messages it reads the chat and suggests changes: a new face, a wedding, a quarrel, a secret — you accept ✓ or decline ✕. It also reads cards and lorebooks and writes chronicle events in lively language. The plugin works without it too, you just enter everything by hand.","ui.guide.model.t":"Your own model for Gossip","ui.guide.model.d":"⚙️ → Gossip → “own model”. Enter the address of any OpenAI-compatible provider (OpenRouter, your own proxy, a local server) and the key, then tap “Pick” — the plugin loads the model list. “Test connection” tells whether the model answers. Thinking models are detected automatically and given room; if it is slow, turn on “No thinking”. Or skip all this and pick “SillyTavern model”.","ui.guide.play.t":"Play as an NPC","ui.guide.play.d":"Every NPC’s story has a “Play as…” button. Actions depend on the situation, the plugin works out the odds. With Gossip it is a short scene where you pick the tone. The outcome stays in the world and spreads as rumors, and “To chat as an interlude” puts the passage into the input field.","ui.guide.move.t":"Moving a world","ui.guide.move.d":"Every chat has its own world. To continue in a new chat: ⚙️ → “Transfer” → copy the text, open the new chat and paste it in the same place. The model key is not transferred.","ui.guide.window.t":"Window and button","ui.guide.window.d":"Drag the 🌳 button wherever it suits you, or hide it in ⚙️ → “Window”. The world also opens from the input menu or the SillyTavern sidebar.","ui.guide.windowST.d":"Drag the window by its header; on PC resize it from the bottom-right corner, and set the scale in ⚙️ → “Window”. Double-tap the header to put it back. Open the world with 🌳, the magic-wand menu by the input, or the extensions settings.","ui.tmode.title":"How time passes","ui.tmode.story":"By the story","ui.tmode.msgs":"By replies","ui.tmode.off":"Manually","ui.tmode.storyD":"The chat model marks when a new day starts in the story or time skips ahead (\"next morning\", \"a week later\"). The off-screen world lives the same number of days. It does not matter how many messages a day takes.","ui.tmode.msgsD":"Every N replies the world lives the chosen span, whatever happens in the story.","ui.tmode.offD":"Time passes only with the buttons in the chronicle.","ui.time.story":"Time follows the story: when a new day starts in the chat, the world lives it too. The buttons below skip time ahead by hand.","ui.win.zoom":"Window scale","ui.win.hint":"Drag the window by its header, resize it from the bottom-right corner. Double-click the header to put everything back.","ui.win.hintPhone":"Drag the window by its header. Double-tap the header to put it back.","ui.win.reset":"Reset window","ui.win.wasReset":"Window reset","st.info":"Open the window with the 🌳 button over the chat or from the extensions menu (the magic wand by the input).","st.dock":"Reset 🌳 button","st.noPanel":"Window files not found. Reinstall the extension.","ui.toast.saveFail":"Could not save","ui.toast.same":"Someone with this name already exists","ui.toast.copied":"Copied","ui.toast.saved":"Saved","ui.toast.imported":"World loaded"},"zh-CN":{"plugin.name":"PUSYA WORLD","plugin.description":"活的NPC世界：角色名册、家族与亲属关系、身份和未了之事。模型会记住谁和谁是什么关系。作者：PUSYA · t.me/pusgir","releaseNotes.0_3_1":"修复：设置页面不再每次点击都闪烁；未开启八卦精时角色卡部分显示锁和「开启八卦精」按钮。新增：从角色卡导入人物、解析整个聊天、随剧情推进的时间、从列表选择模型、支持推理模型、「使用说明」、SillyTavern 版本。","releaseNotes.0_3_0":"NPC名册（含亲属与家族）、让合适NPC登场的导演、带传闻与主角消息的幕后生活、秘密、图谋与时代。","actions.open":"PUSYA WORLD 🌳","settings.info.open":"点击聊天上方的🌳按钮、输入框菜单或侧边栏即可打开窗口。","settings.info.how":"每次回复前，插件会在最近的消息中查找名册里的名字，并悄悄给模型一段简短提示：身份、家族、与主角的关系、未了之事。","settings.privacy":"世界数据保存在本聊天的变量中。只有开启“八卦精”时插件才会联网：把最近的消息和简短的人物列表发送给你选择的模型。密钥只保存在你这里。","settings.info.author":"作者：PUSYA · t.me/pusgir","ui.dir.title":"导演","ui.dir.autoNow":"到100%自动安排：{n}%","ui.dir.hintNow":"提示中 · {n}%","ui.dir.ripe":"是时候让人登场了","ui.dir.waiting":"将在下一条回复中登场","ui.dir.none":"目前没有可推荐的人：没人与当前场景相关。可以补充地点、关系或未了之事。","ui.dir.cue":"下一条回复登场","ui.dir.cueBtn":"🎬 在下一条回复中登场","ui.dir.cueOn":"🎬 等待下一条回复 · 取消","ui.dir.cued":"{name}将在下一条回复中登场","ui.dir.more":"更多人选（最多{n}）","ui.dir.less":"收起","ui.dir.noteCue":"以及导演指令：","ui.dir.m.off":"关闭","ui.dir.m.hint":"提示","ui.dir.m.auto":"自动","ui.dir.m.offD":"导演不出声。人物旁的🎬按钮仍然可用。","ui.dir.m.hintD":"显示谁适合登场，时机到了会让🌳按钮闪烁。用🎬让其登场。","ui.dir.m.autoD":"压力达到100%时，会温和地向模型推荐一位最合适的人选。","ui.dir.sp.slow":"少","ui.dir.sp.mid":"适中","ui.dir.sp.fast":"多","ui.why.place":"常在{v}","ui.why.seat":"场景在府邸：{v}","ui.why.thread":"未了：{v}","ui.why.never":"尚未登场","ui.why.long":"许久未见","ui.why.role":"契合场景：{v}","ui.opt.nodir":"导演不安排登场","ui.opt.nodirD":"导演不会推荐此人","ui.head.chron":"编年史","ui.date":"第{y}年 · {s} · 第{d}天","ui.month":"第{y}年 · {s} · 第{m}月","ui.season.0":"春","ui.season.1":"夏","ui.season.2":"秋","ui.season.3":"冬","ui.time.d":"一天","ui.time.w":"一周","ui.time.m":"一个月","ui.time.s":"一季","ui.time.y":"一年","ui.time.hint":"世界时间只在你推进时流动。当前在场的人不参与幕后事件。","ui.time.auto":"另外自动：每{n}条回复过去{d}","ui.time.done":"{date}：{n}个事件","ui.ch.few":"至少需要两个NPC，幕后才会发生事情。","ui.ch.all":"真相","ui.ch.known":"{name}知道的","ui.ch.minor":"琐事","ui.ch.none":"还什么都没发生。用上面的按钮推进时间。","ui.ch.noneMode":"此视图为空。","ui.pub.public":"公开","ui.pub.rumor":"传闻","ui.pub.secret":"秘密","ui.ev.known":"{n}人知道","ui.ev.heardBy":"{name}从{by}那听说","ui.ev.heardTown":"{name}从传闻听说","ui.ev.told":"已告知模型","ui.life.title":"幕后生活","ui.life.every":"时间自动流逝","ui.life.manual":"仅手动","ui.life.n":"每{n}条回复","ui.life.days":"每次推进","ui.life.pace":"事件节奏","ui.pace.calm":"平静","ui.pace.normal":"正常","ui.pace.drama":"戏剧化","ui.cat.romance":"恋爱","ui.cat.romanceD":"交往、分手、私情","ui.cat.family":"家庭","ui.cat.familyD":"订婚、结婚、离婚、孩子","ui.cat.career":"事业","ui.cat.careerD":"新职位、搬家","ui.cat.fortune":"财富","ui.cat.fortuneD":"发财、破产","ui.cat.health":"健康","ui.cat.healthD":"生病与康复","ui.cat.drama":"冲突","ui.cat.dramaD":"争吵、结仇、和好","ui.cat.death":"死亡","ui.cat.deathD":"年老与疾病；不涉及主角","ui.life.pairs":"情侣","ui.pairs.any":"不限","ui.pairs.mf":"仅男女","ui.life.news":"每条回复的消息数","ui.life.newsD":"传闻传到主角耳中时，模型会得知听到了什么、从谁那听到、何时听到，并可自然提起。每条消息最多发送三次。","ui.opt.safe":"幕后不打扰","ui.opt.safeD":"只发生平静的事：工作、钱财、搬家。没有恋爱、冲突、婚姻和死亡。","ui.toast.conflict":"窗口打开期间世界已变化：修改未保存，正在重新加载","ui.why.goal":"图谋：{g}","ui.why.knows":"知道{name}的秘密","ui.goal.match":"为{name}物色亲事","ui.goal.revenge":"向{name}复仇","ui.goal.rise":"往上爬","ui.goal.win":"得到{name}","ui.goal.ready":"已准备行动——交给剧情","ui.goal.end.done":"已达成","ui.goal.end.fail":"失败","ui.goal.end.moot":"已无意义","ui.goal.end.gone":"无人继续","ui.goal.end.drop":"已取消","ui.goal.btn.revenge":"复仇","ui.goal.btn.win":"追求某人","ui.goal.btn.rise":"往上爬","ui.goal.btn.match":"为子女议亲","ui.goal.pick.revenge":"{name}想向谁复仇？","ui.goal.pick.win":"{name}想得到谁？","ui.goal.pick.match":"{name}为哪个孩子议亲？","ui.goal.pick.rise":"{name}","ui.sec.intrigue":"秘密与图谋","ui.sec.out":"已公开","ui.sec.knownBy":"知情者：{names}","ui.sec.nobody":"无人知晓","ui.sec.heroKnows":"{name}知道","ui.sec.heroNot":"{name}不知道","ui.sec.toggle":"主角是否知道","ui.ph.secret":"新秘密：国王的私生子","ui.hint.secretsHero":"NPC可能在幕后发现并揭露主角的秘密。主角本人不在幕后行动。","ui.hint.intrigue":"秘密会在幕后浮现：亲近的人会发现，贪婪的人会要挟，仇人和长舌者会揭发。图谋随时间推进并以事件收场；若针对主角，则交给剧情演绎。模型知道秘密与图谋，但不会主动揭露。","ui.cat.intrigue":"阴谋","ui.cat.intrigueD":"秘密、要挟、丑闻、图谋、毒药","ui.sec.people":"人物","ui.sec.houses":"家族","ui.tile.scene":"在场","ui.tile.important":"重要","ui.tile.long":"许久未见","ui.tile.all":"全部","ui.tile.none":"这里还没有人","ui.house.members":"{n}人","ui.house.add":"新家族","ui.house.edit":"家族：名称与家主","ui.chron.empty":"暂时风平浪静。在编年史中推进时间。","ui.tree.hint":"点击头像查看此人的故事。虚线环表示从其他家族嫁娶进来的人。","ui.badge.main":"主角","ui.badge.scene":"在场","ui.badge.affair":"私情","ui.badge.scheme":"暗中图谋","ui.badge.secret":"藏有秘密","ui.badge.gossip":"知道别人的秘密","ui.badge.feud":"结仇","ui.badge.love":"恋爱中","ui.badge.ill":"生病","ui.badge.dead":"已故","ui.now.dead":"已故","ui.now.married":"与{name}结婚","ui.now.betrothed":"与{name}订婚","ui.now.seeing":"与{name}交往","ui.now.affair":"与{name}有私情","ui.now.enemy":"仇人：{name}","ui.now.ill":"生病中","ui.now.place":"常在{v}","ui.story.age":"{n}岁","ui.story.now":"现状","ui.story.history":"经历","ui.story.more":"还有{n}位","ui.story.tapReveal":"点击查看","ui.story.pr":"酝酿中：{n}%","ui.story.edit":"编辑","ui.ch.season":"第{y}年 · {s}","ui.ch.year":"第{y}年","ui.ch.day":"第{d}天","ui.set.dirSpeed":"频率","ui.set.cats":"可能发生的事","ui.set.model":"模型能看到的","ui.set.window":"窗口","ui.life.manualShort":"手动","ui.note.k.traits":"性格","ui.note.k.ties":"关系","ui.note.k.now":"现状","ui.note.k.lately":"近来","ui.note.k.threads":"未了","ui.note.k.secret":"秘密","ui.note.k.agenda":"图谋","ui.note.k.notes":"备注","ui.note.sec.people":"在场的人","ui.note.sec.news":"主角听到的消息","ui.note.raw":"显示发给模型的原文","ui.note.cards":"以卡片显示","ui.io.give":"导出世界","ui.io.stats":"{p}人 · {h}个家族 · {e}个事件。复制后粘贴到其他聊天。","ui.io.take":"导入世界","ui.io.takeD":"粘贴其他聊天的文本。本聊天当前的世界将被替换。","ui.io.paste":"在此粘贴复制的世界…","ui.edit.hint":"修改会自动保存","ui.edit.name":"名字与身份","ui.edit.place":"地位","ui.edit.char":"性格","ui.edit.story":"剧情设定","ui.void.title":"世界还是空的","ui.void.text":"这里将住着这个故事的NPC：家庭、家族、秘密，以及他们在幕后经历的一切。","ui.void.lore":"从角色卡或世界书导入","ui.void.loreD":"勾选角色条目即可加入世界","ui.void.add":"添加角色","ui.void.addD":"名字和性别，其余稍后再填","ui.void.house":"建立家族","ui.void.houseD":"家庭、血脉、宗族或行会","ui.void.how":"当世界中的名字出现在聊天里，模型会收到此人及其关系的提示。主角已经在这里了。","ui.gs.name":"八卦精","ui.gs.about":"一个额外的模型。阅读聊天并发现人物的变化；解析世界书及其中的关系；用你世界的口吻描写幕后事件。","ui.gs.src.tavo":"SillyTavern 模型","ui.gs.src.own":"自定义模型","ui.gs.tavoD":"使用 SillyTavern 的连接（与聊天相同），会消耗其额度。","ui.gs.ep":"API 地址","ui.gs.model":"模型","ui.gs.key":"密钥","ui.gs.keyD":"任何快速、便宜且兼容 OpenAI API 的模型都可以。密钥只保存在你这里，不会包含在世界迁移中。","ui.gs.test":"测试连接","ui.gs.testing":"测试中…","ui.gs.testOk":"八卦精已连接","ui.gs.every":"每隔多少条消息读一次聊天","ui.gs.flavor":"让事件更生动","ui.gs.flavorD":"幕后事件会用你世界的口吻改写，并以此传给主角","ui.gs.lore":"解析世界书","ui.gs.loreD":"导入时从条目中提取关系、年龄、身份、性格、家族与秘密","ui.gs.privacy":"八卦精只会收到最近的消息和简短的人物列表。不会自动修改任何内容：发现需要你确认。","ui.gs.reading":"正在读聊天…","ui.gs.readNow":"立即阅读","ui.gs.quiet":"暂无新发现。每 {n} 条消息读一次聊天。","ui.gs.setup":"在设置中连接模型后，八卦精会开始留意剧情中的变化。","ui.gs.error":"八卦精无法连接模型：{e}","ui.gs.found":"八卦精发现了 {n} 件事","ui.gs.accepted":"已接受 {n} 项","ui.gs.acceptAll":"全部接受（{n}）","ui.gs.rejectAll":"全部忽略","ui.gs.noTavo":"SillyTavern 未提供模型，请使用自定义模型","ui.gs.badAnswer":"模型回复格式不正确","ui.gs.empty":"模型没有回复","ui.gs.readingLore":"八卦精正在读世界书…","ui.gs.loreAdd":"解析并添加 {n} 个","ui.gs.loreDone":"八卦精解析了世界书：{n} 人及其关系","ui.gs.loreFail":"八卦精未能完成，改用普通方式添加","ui.gs.err.who":"请先接受新人物：{name}","ui.gs.err.with":"请先接受新人物：{name}","ui.gs.k.person":"新面孔：{a}（{v}）","ui.gs.k.marry":"{a}和{b}结婚了","ui.gs.k.divorce":"{a}和{b}离婚了","ui.gs.k.engage":"{a}和{b}订婚了","ui.gs.k.date":"{a}和{b}在一起了","ui.gs.k.breakup":"{a}和{b}分手了","ui.gs.k.death":"{a}去世了","ui.gs.k.ill":"{a}生病了","ui.gs.k.heal":"{a}康复了","ui.gs.k.move":"{a}现在在{v}","ui.gs.k.job":"{a}的新职业：{v}","ui.gs.k.title":"{a}的新头衔：{v}","ui.gs.k.quarrel":"{a}和{b}吵翻了","ui.gs.k.reconcile":"{a}和{b}和好了","ui.gs.k.enemy":"{a}和{b}成了仇人","ui.gs.k.secret_new":"{a}的秘密：{v}","ui.gs.k.secret_out":"关于{a}的事曝光了：{v}","ui.gs.k.pregnant":"{a}怀了{b}的孩子","ui.gs.k.birth":"{a}生了孩子：{v}","ui.gs.k.kin":"{a}是{b}的{v}","ui.ev.onscreen":"剧情中","ui.world.title":"这个世界里有什么","ui.world.magic":"魔法","ui.world.nobility":"贵族与头衔","ui.world.modern":"现代科技","ui.world.auto":"根据聊天和人物自动识别。没有魔法就没有诅咒；没有贵族就没有决斗和初入社交界；有现代科技时几乎没有包办婚姻。","ui.world.hand":"已手动设定。","ui.world.toAuto":"自动识别","ui.play.a.talk":"交谈","ui.play.d.talk":"谈心或谈事","ui.play.a.charm":"亲近","ui.play.d.charm":"调情、示好","ui.play.a.confess":"表白","ui.play.d.confess":"说出心意","ui.play.a.propose":"求婚","ui.play.d.propose":"缔结婚约","ui.play.a.quarrel":"摊牌","ui.play.d.quarrel":"大吵一架","ui.play.a.reconcile":"和解","ui.play.d.reconcile":"试着弥补","ui.play.a.snoop":"打探","ui.play.d.snoop":"偷听、搜寻","ui.play.a.blackmail":"要挟","ui.play.d.blackmail":"用秘密要挟","ui.play.a.expose":"揭露秘密","ui.play.d.expose":"让所有人知道","ui.play.a.matchmake":"为子女说亲","ui.play.d.matchmake":"谋一门好亲事","ui.play.a.letter":"写信","ui.play.d.letter":"寄给任何人","ui.play.a.scheme":"推进图谋","ui.play.d.scheme":"暗中的计划","ui.play.a.go":"去别处","ui.play.d.go":"换个地方","ui.play.a.free":"自由行动","ui.play.d.free":"用文字描述","ui.play.l.like_up":"{name}对你更亲近了","ui.play.l.like_down":"{name}对你冷淡了","ui.play.l.love":"{name}明显动心了","ui.play.l.dating":"你和{name}在一起了","ui.play.l.affair":"与{name}的私情","ui.play.l.refused":"{name}拒绝了","ui.play.l.engaged":"与{name}订婚","ui.play.l.engaged2":"{name}与{name2}订婚了","ui.play.l.rival":"{name}现在怀有敌意","ui.play.l.peace":"与{name}和好了","ui.play.l.secret":"秘密：{v}","ui.play.l.nothing":"一无所获","ui.play.l.caught":"被{name}撞见了","ui.play.l.yields":"{name}屈服了，但怀恨在心","ui.play.l.defies":"{name}拒不屈服——你们成了仇人","ui.play.l.scandal":"丑闻！曝光了：{v}","ui.play.l.noanswer":"没有回音","ui.play.l.goal":"图谋推进：{v}","ui.play.l.moved":"现在在{v}","ui.play.btn":"🎭 扮演{name}","ui.play.title":"扮演NPC","ui.play.as":"你正在扮演","ui.play.nowhere":"某处","ui.play.near":"附近：","ui.play.alone":"没有人","ui.play.writing":"八卦精正在写场景…","ui.play.ok":"成功了","ui.play.no":"没成功","ui.play.ch.high":"把握很大","ui.play.ch.mid":"把握一般","ui.play.ch.low":"把握很小","ui.play.tone.warm":"温柔","ui.play.tone.bold":"大胆","ui.play.tone.sly":"狡黠","ui.play.tone.cold":"冷淡","ui.play.again":"再做一件事","ui.play.toChat":"作为插曲发到聊天","ui.play.done":"完成，返回","ui.play.go":"行动","ui.play.placePh":"或其他地点…","ui.play.freePh":"{name}要做什么？例如：偷看丈夫的信","ui.play.freeGo":"开始","ui.play.freeNeed":"自由行动需要八卦精解读——请在设置中连接。","ui.play.hint":"成功率取决于关系、性格和秘密。八卦精负责写场景，你的选择会影响结果。发生的一切都会成为世界的一部分：流言会传开，主角也可能听说。","ui.play.hintNoAI":"成功率取决于关系、性格和秘密。连接八卦精后，每个行动都会变成可选择的场景。","ui.play.meanwhile":"与此同时——{name}：","ui.play.inInput":"插曲已放入输入框——想发就发","ui.title":"世界","ui.head.houses":"家族与王朝","ui.head.lore":"角色卡与世界书","ui.head.set":"设置","ui.loading":"正在加载世界…","ui.status.off":"已关闭：不会向模型发送任何内容","ui.status.scene":"在场：{names}","ui.status.empty":"场景中没有名册里的人","ui.search":"名字、身份、家族、地点…","ui.f.all":"全部","ui.f.scene":"在场","ui.f.main":"重要","ui.f.long":"许久未见","ui.empty.filter":"没有找到","ui.empty.world":"世界还是空的","ui.empty.houses":"还没有家族。家族可以是家庭、血脉、宗族或行会。","ui.btn.add":"+ 角色","ui.btn.lore":"📚 角色卡与世界书","ui.hint.start":"手动或从世界书添加NPC，再把他们联系起来：父母、子女、婚姻。名字出现在聊天中时，模型会收到此人及其关系的提示。","ui.relOf":"{name}的{rel}","ui.seen.now":"正在场景中","ui.seen.last":"在最后一条消息中","ui.seen.ago":"{n}条消息前出现过","ui.seen.never":"尚未出现","ui.pin":"保持在场","ui.sec.family":"家庭","ui.sec.kinAll":"全部亲属与姻亲：{n}","ui.sec.who":"身份","ui.sec.threads":"未了之事","ui.sec.tree":"家族树 · {n}","ui.kin.parent":"父母","ui.kin.child":"子女","ui.kin.spouse":"配偶","ui.kin.exspouse":"前配偶","ui.kin.sibling":"兄弟姐妹","ui.pick.sibling":"{name}的兄弟姐妹","ui.kin.betrothed":"订婚","ui.kin.none":"还没有关系。其余亲属（叔伯、堂表亲、姻亲）会自动推算。","ui.opt.ill":"私生","ui.opt.ad":"收养","ui.opt.ex":"已离婚","ui.pick.parent":"{name}的父母","ui.pick.child":"{name}的子女","ui.pick.spouse":"{name}的配偶","ui.pick.betrothed":"{name}的未婚配偶","ui.ph.pick":"谁？输入名字…","ui.btn.newNamed":"+ 新建：{name}","ui.f.name":"名字","ui.f.aliases":"别名和昵称","ui.ph.aliases":"用逗号分隔：贝拉, 阿什福德夫人","ui.hint.auto":"也会按名字匹配：{names}","ui.sex.f":"♀ 女","ui.sex.m":"♂ 男","ui.sex.x":"未指定","ui.f.age":"年龄","ui.f.house":"家族","ui.house.none":"无家族","ui.house.new":"+ 新家族…","ui.f.title":"头衔","ui.ph.title":"夫人、伯爵…","ui.f.job":"职业","ui.ph.job":"侍女、铁匠…","ui.f.faction":"阵营","ui.ph.faction":"宫廷、行会…","ui.f.place":"常在地点","ui.ph.place":"首都、港口…","ui.f.traits":"性格","ui.ph.traits":"野心勃勃, 爱八卦","ui.f.bio":"给模型的备注","ui.ph.bio":"简要：外貌、性格、需要记住的事","ui.ph.thread":"答应去取公爵的信","ui.hint.threads":"承诺、债务、怨恨、未完成的事。此人在场时模型会看到。✓ 表示已了结。","ui.opt.important":"重要角色","ui.opt.importantD":"久未出现时会列入“许久未见”","ui.opt.main":"主角","ui.opt.mainD":"角色卡或玩家角色：不单独提示，但会标明与其的关系","ui.opt.alive":"在世","ui.hint.fromLore":"从世界书添加。插件不会修改世界书条目。","ui.btn.delPerson":"删除角色","ui.btn.sure":"确定吗？再点一次","ui.f.hname":"家族名称","ui.f.seat":"府邸","ui.ph.seat":"城堡、庄园…","ui.f.head":"家主","ui.f.motto":"家训","ui.ph.motto":"可选","ui.ph.house":"新家族：阿什福德家族","ui.hint.houseEmpty":"家族里还没有人。添加成员后，在角色卡中设置他们之间的关系。","ui.tree.sibs":"兄弟姐妹","ui.btn.member":"+ 加入家族","ui.btn.delHouse":"删除家族","ui.lore.noapi":"SillyTavern 未提供世界书访问。","ui.lore.loading":"正在读取世界书…","ui.lore.err":"无法读取世界书。","ui.btn.retry":"重试","ui.lore.none":"没有世界书。","ui.lore.pick":"选择角色卡或世界书，然后勾选要导入的内容。","ui.lore.entries":"{n} 个条目","ui.lore.hint":"勾选属于角色的条目","ui.lore.noent":"这本世界书没有启用的条目。","ui.lore.all":"全选","ui.lore.nothing":"全不选","ui.lore.had":"已在名册中","ui.lore.add":"添加 {n} 个","ui.lore.choose":"请勾选条目","ui.lore.done":"已添加 {n} 个。性别根据文本推测，请检查。","ui.set.on":"给模型的提示","ui.set.onD":"谁在场、与主角的关系、未了之事","ui.set.bio":"附带备注","ui.set.bioD":"“给模型的备注”的简短摘录","ui.set.first":"仅按名字匹配","ui.set.firstD":"“伊莎贝拉”可匹配“伊莎贝拉·阿什福德夫人”","ui.set.dock":"聊天上方的🌳按钮","ui.set.scan":"扫描最近多少条消息","ui.set.scanD":"在其中被提到的人即视为“在场”。📍 可让未被提到的人保持在场。","ui.set.max":"提示中最多几个人","ui.set.lang":"界面语言","ui.set.auto":"跟随 SillyTavern","ui.set.world":"本聊天的世界","ui.btn.note":"👁️ 模型会收到什么","ui.btn.io":"迁移","ui.btn.wipe":"清空本聊天的世界","ui.set.where":"每个聊天都有自己的世界。要在新聊天中延续，打开“迁移”，复制文本并粘贴到新聊天中。","ui.note.title":"模型会收到什么","ui.note.hint":"这段内容会悄悄附加到下一次请求，聊天中不可见。","ui.note.empty":"目前没有：最近的消息里没有名册中的名字。点击某人旁的📍可让其保持在场。","ui.io.hint":"复制此文本并粘贴到其他聊天即可迁移世界。或在此粘贴其他聊天的文本并载入：当前世界将被替换。","ui.btn.copy":"复制","ui.btn.file":"保存为文件","ui.btn.importText":"从文本载入","ui.btn.create":"创建","ui.ph.name":"名字：伊莎贝拉·阿什福德夫人","ui.err.noname":"需要名字","ui.err.json":"这看起来不是 PUSYA WORLD 的世界数据","ui.err.missing":"找不到此人","ui.err.self":"不能与自己建立关系","ui.err.dup":"此关系已存在","ui.err.cycle":"不行：这样此人会成为自己的祖先","ui.err.parents":"已有两位父母。第三位可作为养父母添加。","ui.err.type":"未知关系","ui.err.blood":"这是直系祖先或后代","ui.gs.epD":"任何兼容 OpenAI 的地址：OpenRouter、自建代理、本地服务器。通常以 /v1 结尾，没有的话插件会自动补上。","ui.gs.pick":"选择","ui.gs.models":"服务商模型","ui.gs.modelsFind":"查找模型","ui.gs.modelsLoading":"正在向服务商获取模型列表…","ui.gs.modelsN":"模型：{n}","ui.gs.modelsEmpty":"服务商没有返回模型列表","ui.gs.modelsHand":"也可以手动填写模型名称——服务商网站上会写明。","ui.gs.needEp":"请先填写 API 地址","ui.gs.picked":"模型：{m}","ui.gs.think":"推理模型","ui.gs.think.auto":"允许思考","ui.gs.think.off":"不思考","ui.gs.think.autoD":"如果模型回答前会思考，插件会自动察觉并给它留出余量；如果思考占满了回答，会关闭思考重试。","ui.gs.think.seen":"该模型回答前会思考，插件已为其留出余量。若太慢，可选“不思考”。","ui.gs.think.offD":"插件会直接要求服务商不思考：更快更省。OpenRouter、Qwen、GLM、DeepSeek、vLLM 及 Claude 网关支持，其他会忽略。","ui.gs.err.key":"密钥无效","ui.gs.err.money":"服务商余额或额度不足","ui.gs.err.model":"服务商没有该模型——请从列表选择","ui.gs.err.rate":"请求过多——服务商要求稍等","ui.gs.err.region":"服务商不支持你所在的地区","ui.gs.err.long":"请求超出该模型长度","ui.gs.err.server":"服务商服务器暂时故障","ui.gs.err.cors":"浏览器拦截了对该地址的请求。请检查地址；若无误，说明服务商不允许浏览器请求，需要换一个或使用代理。","ui.gs.err.timeout":"模型两分半钟内未回应","ui.gs.err.think":"模型把整个回答都用在了思考上","ui.gs.err.html":"该地址返回的是网页而不是 API——请检查","ui.card.desc":"角色卡描述","ui.card.pers":"性格","ui.card.scen":"场景","ui.card.first":"开场白","ui.card.ex":"对话示例","ui.card.book":"角色卡","ui.card.hint":"八卦精会读取勾选的角色卡部分并找出所有人物：RPG卡里可能有几十个。内置世界书条目在下方。","ui.card.hintNoAi":"从角色卡描述中提取人物需要八卦精（额外的模型）。开启后即可勾选描述。不开启时只能导入内置世界书条目。","ui.gs.turnOnTavo":"开启八卦精（SillyTavern 模型）","ui.gs.turnOn":"设置八卦精","ui.gs.nowOn":"八卦精已开启：SillyTavern 模型","ui.gs.needSetup":"请为八卦精选择模型","ui.full.btn":"解析整个聊天 · {n} 条","ui.full.hint":"如果世界是在故事中途建立的：八卦精会从头读取聊天，自动录入剧情中出现过的所有人物、关系和经历。之后可一键撤销。","ui.full.void":"解析聊天","ui.full.voidD":"八卦精会读取 {n} 条消息并录入剧情中的人物","ui.full.reading":"八卦精正在读取聊天：第 {i}/{n} 部分","ui.full.sofar":"已录入：人物 {p}，事件 {c}","ui.full.stop":"停止","ui.full.result":"聊天已解析。录入人物 {p} 个，事件与关系 {c} 条。","ui.full.done":"聊天已解析：人物 {p}，事件 {c}","ui.full.ok":"好","ui.full.undo":"全部撤销","ui.full.undone":"已撤销聊天解析","ui.full.empty":"聊天中还没有消息","ui.card.needAi":"这部分角色卡需要八卦精解析——请点击上方的「开启八卦精」","ui.void.loreD2":"从角色卡和世界书导入人物","ui.guide.title":"使用说明","ui.guide.cta":"各功能在哪里、如何运作——按主题简要说明","ui.guide.intro":"PUSYA WORLD 记住你故事里的每个人：谁和谁是什么关系、做什么、隐瞒什么。主角忙于自己的事时，世界的其他部分也在自行运转。","ui.guide.how.t":"运作方式","ui.guide.how.d":"每个聊天都有自己的世界——人物、家族和事件的名册。每次回复前，插件会在最近的消息中查找名册中的名字，悄悄告诉模型要点：身份、家庭、与主角的关系、未了之事。聊天中看不到这段提示，可在 ⚙️ →「👁️ 模型会收到什么」查看。","ui.guide.start.t":"从哪里开始","ui.guide.start.d":"1. 点击聊天上方的🌳按钮打开世界。\n2.「📚 角色卡与世界书」→ 角色卡或世界书，勾选要导入的内容。若卡中有很多NPC（RPG卡），由八卦精提取——请在 ⚙️ 中开启。\n3. 也可以手动添加：「+ 角色」，关系在人物故事中添加。\n4. 如果故事已进行很久、很多NPC是途中编出来的——在主界面点「解析整个聊天」：八卦精会从头读取并自动录入所有出现过的人物及其关系。不满意可「全部撤销」。\n5. 照常聊天。八卦精会自动提议聊天中出现的新人物。","ui.guide.people.t":"主界面与人物故事","ui.guide.people.d":"顶部显示当前在场的人。「在场」「重要」「许久未见」「全部」点击展开。点击头像打开人物故事：亲属关系、感情、秘密、事件。标题栏的铅笔用于编辑。📍 可把人物固定在场景中，即使没人提到名字。","ui.guide.badges.t":"头像上的徽标","ui.guide.bd.main":"聊天主角或用户角色","ui.guide.bd.scene":"在最近的消息中被提到或被📍固定","ui.guide.bd.affair":"与某人秘密往来——通常是在有配偶的情况下","ui.guide.bd.scheme":"复仇、有利的婚姻或争夺权力","ui.guide.bd.secret":"此人有秘密，谁知情可在故事中查看","ui.guide.bd.gossip":"爱八卦或知道别人的秘密","ui.guide.bd.feud":"与某人公开敌对或竞争","ui.guide.bd.love":"恋爱、订婚或已婚","ui.guide.bd.ill":"病可能会好，也可能不会","ui.guide.bd.dead":"仍保留在族谱和故事中","ui.guide.houses.t":"家族与族谱","ui.guide.houses.d":"家族可以是家庭、氏族或公会。点击纹章打开族谱：父母、配偶、子女。点击族谱中的头像查看人物故事。亲属关系自动推算：设好父母，插件就知道堂表亲、姑姨和姻亲。","ui.guide.director.t":"导演","ui.guide.director.d":"关注谁很久没出现、谁按地点、关系和未了之事适合当前场景。「提示」在主界面显示人选；「自动」在进度到100%时让一人在下条回复登场。人物旁的🎬按钮可立即安排其登场。","ui.guide.time.t":"时间","ui.guide.time.d":"默认时间随剧情推进。故事进入新的一天或时间跳跃（“第二天早上”“一周后”）时，聊天模型会在回复末尾留下隐形标记，世界同步度过相同天数，与一天用了多少条消息无关。在 ⚙️ →「幕后生活」可改为「按回复数」或「手动」，编年史中也可一键度过一周或一个月。","ui.guide.life.t":"幕后生活","ui.guide.life.d":"主角不在时，其他人会相识、相恋、结婚、争吵、生病、换工作、生儿育女。主角自己不会行动——他们的人生由你掌控。⚙️ 中可设置节奏和可能发生的事（死亡默认关闭）。一切都在编年史中：「真相」是所有经过，「主角所知」只显示传到主角耳中的。","ui.guide.news.t":"传闻与消息","ui.guide.news.d":"公开消息和传闻会在熟人间传播。消息传到主角耳中时，模型可能在对话里提起：“你敢信，伊莎贝拉和罗兰……”。秘密在被揭开前始终是秘密。","ui.guide.intrigue.t":"秘密与图谋","ui.guide.intrigue.d":"人物可以有秘密（可看到谁知情）和图谋：复仇、有利的婚姻、权力。秘密会被发现、被用来勒索。针对主角的图谋不会在幕后完成——模型会得到暗示并在场景中演绎。","ui.guide.gossip.t":"八卦精","ui.guide.gossip.d":"额外的模型。每隔几条消息读取聊天并提议变动：新人物、婚礼、争吵、秘密——由你接受✓或拒绝✕。它还能解析角色卡和世界书，并用生动的语言书写编年史事件。不开启插件也能用，只是一切需手动录入。","ui.guide.model.t":"为八卦精接入自己的模型","ui.guide.model.d":"⚙️ → 八卦精 →「自定义模型」。填入任意兼容 OpenAI 的服务商地址（OpenRouter、自建代理、本地服务器）和密钥，点「选择」——插件会加载模型列表。「测试连接」可确认模型是否回应。推理模型会被自动识别并留出余量；若太慢，开启「不思考」。也可以什么都不设置，直接选「SillyTavern 模型」。","ui.guide.play.t":"扮演NPC","ui.guide.play.d":"每个NPC的故事里都有「扮演……」按钮。可选行动取决于情境，成功率由插件计算。开启八卦精时是一小段可选语气的场景。结果会留在世界中并以传闻扩散，「作为插曲发到聊天」会把片段放进输入框。","ui.guide.move.t":"迁移世界","ui.guide.move.d":"每个聊天都有自己的世界。要在新聊天中继续：⚙️ →「迁移」→ 复制文本，打开新聊天后在同一位置粘贴。模型密钥不会被迁移。","ui.guide.window.t":"窗口与按钮","ui.guide.window.d":"🌳按钮可拖到合适的位置，也可在 ⚙️ →「窗口」中隐藏。世界也能从输入框菜单或 SillyTavern 侧边栏打开。","ui.guide.windowST.d":"拖动标题栏移动窗口；电脑上可拖右下角调整大小，缩放在 ⚙️ →「窗口」。双击标题栏复位。打开方式：🌳按钮、输入框旁的魔杖菜单或扩展设置。","ui.tmode.title":"时间如何推进","ui.tmode.story":"随剧情","ui.tmode.msgs":"按回复数","ui.tmode.off":"手动","ui.tmode.storyD":"聊天模型会在剧情进入新的一天或时间跳跃（“第二天早上”“一周后”）时自行标记，幕后世界同步度过相同天数。一天用了多少条消息都没关系。","ui.tmode.msgsD":"每N条回复，世界就度过所选时长，与剧情无关。","ui.tmode.offD":"只有点击编年史里的按钮时间才会推进。","ui.time.story":"时间随剧情推进：聊天里进入新的一天，世界也一同度过。下面的按钮可以手动快进时间。","ui.win.zoom":"窗口缩放","ui.win.hint":"拖动标题栏移动窗口，拖动右下角调整大小。双击标题栏可恢复原样。","ui.win.hintPhone":"拖动标题栏可移动窗口。双击标题栏可复位。","ui.win.reset":"窗口复位","ui.win.wasReset":"窗口已复位","st.info":"点击聊天上方的🌳按钮或扩展菜单（输入框旁的魔杖）即可打开窗口。","st.dock":"🌳按钮复位","st.noPanel":"找不到窗口文件，请重新安装扩展。","ui.toast.saveFail":"保存失败","ui.toast.same":"已有同名角色","ui.toast.copied":"已复制","ui.toast.saved":"已保存","ui.toast.imported":"世界已载入"}};
/* PUSYA WORLD — ядро: модель мира, родство, поиск имён, справка для модели.
   Без DOM и без сети: общее для entry.js и окна, проверяется тестами. */
var PWL = (function () {
  var V = 1;
  var DEF = { on: true, scan: 6, max: 5, bio: true, first: true, dock: true, lang: 'auto', dir: 'hint', speed: 'mid', tmode: 'story', tickEvery: 0, tickDays: 7, pace: 'normal', pairs: 'any', news: 1,
    cats: { romance: true, family: true, career: true, fortune: true, health: true, drama: true, intrigue: true, death: false },
    gsrc: 'off', gep: '', gmodel: '', gthink: 'auto', gthinks: '', gevery: 8, gflavor: true, glore: true };
  var SEX = { f: 1, m: 1, x: 1 };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function str(v, max) { v = v == null ? '' : String(v).replace(/\s+/g, ' ').trim(); return max ? v.slice(0, max) : v; }
  function txt(v, max) { v = v == null ? '' : String(v).replace(/\r/g, '').replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim(); return max ? v.slice(0, max) : v; }
  function list(v, max) {
    if (typeof v === 'string') v = v.split(/[,;\n]/);
    if (!Array.isArray(v)) return [];
    var out = [], seen = {};
    v.forEach(function (x) { x = str(x, 80); var k = x.toLowerCase(); if (x && !seen[k]) { seen[k] = 1; out.push(x); } });
    return max ? out.slice(0, max) : out;
  }
  function num(v, lo, hi, d) { v = Math.round(+v); return isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d; }
  function uid(p) { return p + Date.now().toString(36).slice(-5) + Math.random().toString(36).slice(2, 6); }

  function settings(raw) {
    var s = Object.assign({}, DEF, raw && typeof raw === 'object' ? raw : {});
    s.on = s.on !== false; s.bio = s.bio !== false; s.first = s.first !== false; s.dock = s.dock !== false;
    s.scan = num(s.scan, 1, 30, DEF.scan);
    s.max = num(s.max, 1, 12, DEF.max);
    if (!/^(auto|ru|en|zh-CN)$/.test(s.lang)) s.lang = 'auto';
    if (!/^(off|hint|auto)$/.test(s.dir)) s.dir = DEF.dir;
    if (!/^(slow|mid|fast)$/.test(s.speed)) s.speed = DEF.speed;
    s.tickEvery = [0, 10, 20, 40].indexOf(+s.tickEvery) >= 0 ? +s.tickEvery : 0;
    /* время: по сюжету (модель чата отмечает новый день), по числу ответов или вручную.
       Старые настройки без tmode: был автотик — остаётся «по ответам» */
    if (raw && raw.tmode == null && +raw.tickEvery > 0) s.tmode = 'msgs';
    if (!/^(story|msgs|off)$/.test(s.tmode)) s.tmode = 'story';
    if (s.tmode === 'msgs' && !s.tickEvery) s.tickEvery = 20;
    s.tickDays = [1, 7, 30].indexOf(+s.tickDays) >= 0 ? +s.tickDays : 7;
    if (!/^(calm|normal|drama)$/.test(s.pace)) s.pace = 'normal';
    if (!/^(any|mf)$/.test(s.pairs)) s.pairs = 'any';
    s.news = num(s.news, 0, 2, 1);
    if (!/^(off|tavo|own)$/.test(s.gsrc)) s.gsrc = 'off';
    s.gep = str(s.gep, 300); s.gmodel = str(s.gmodel, 200);
    if (!/^(auto|off)$/.test(s.gthink)) s.gthink = 'auto';
    s.gthinks = str(s.gthinks, 520);
    s.gevery = [0, 4, 8, 16].indexOf(+s.gevery) >= 0 ? +s.gevery : 8;
    s.gflavor = s.gflavor !== false; s.glore = s.glore !== false;
    var c = raw && raw.cats && typeof raw.cats === 'object' ? raw.cats : {};
    s.cats = {};
    Object.keys(DEF.cats).forEach(function (k) { s.cats[k] = k in c ? !!c[k] : DEF.cats[k]; });
    return s;
  }

  /* ── мир ─────────────────────────────────────────────────────────────── */
  function person(raw, id) {
    raw = raw && typeof raw === 'object' ? raw : {};
    var r = raw.role && typeof raw.role === 'object' ? raw.role : {};
    var f = raw.flags && typeof raw.flags === 'object' ? raw.flags : {};
    var age = raw.age === '' || raw.age == null ? null : num(raw.age, 0, 9999, null);
    return {
      id: id,
      name: str(raw.name, 80) || '?',
      aliases: list(raw.aliases, 12),
      sex: SEX[raw.sex] ? raw.sex : 'x',
      age: age,
      alive: raw.alive !== false,
      house: raw.house ? String(raw.house) : '',
      role: { job: str(r.job, 80), title: str(r.title, 60), faction: str(r.faction, 80), place: str(r.place, 80) },
      traits: list(raw.traits, 10),
      bio: txt(raw.bio, 1500),
      lore: raw.lore && typeof raw.lore === 'object' ? { book: String(raw.lore.book == null ? '' : raw.lore.book), entry: String(raw.lore.entry == null ? '' : raw.lore.entry) } : null,
      flags: { important: !!f.important, char: !!f.char, player: !!f.player, nodir: !!f.nodir, safe: !!f.safe, away: !!f.away },
      ill: !!raw.ill,
      threads: (Array.isArray(raw.threads) ? raw.threads : []).map(function (x) { return txt(x, 300); }).filter(Boolean).slice(0, 12)
    };
  }
  function world(raw) {
    raw = raw && typeof raw === 'object' ? raw : {};
    var w = { v: V, people: {}, kin: [], houses: {}, places: [] };
    var P = raw.people && typeof raw.people === 'object' ? raw.people : {};
    Object.keys(P).forEach(function (id) { if (P[id]) w.people[id] = person(P[id], id); });
    var H = raw.houses && typeof raw.houses === 'object' ? raw.houses : {};
    Object.keys(H).forEach(function (id) {
      var h = H[id] || {};
      w.houses[id] = { id: id, name: str(h.name, 80) || '?', seat: str(h.seat, 80), motto: str(h.motto, 160), head: h.head && w.people[h.head] ? h.head : '' };
    });
    Object.keys(w.people).forEach(function (id) { if (w.people[id].house && !w.houses[w.people[id].house]) w.people[id].house = ''; });
    var seen = {};
    (Array.isArray(raw.kin) ? raw.kin : []).forEach(function (e) {
      if (!e || !w.people[e.a] || !w.people[e.b] || e.a === e.b) return;
      if (e.t !== 'parent' && e.t !== 'spouse' && e.t !== 'betrothed' && e.t !== 'sibling') return;
      var k = e.t === 'parent' ? e.a + '>' + e.b : [e.a, e.b].sort().join('=') + e.t;
      if (seen[k]) return; seen[k] = 1;
      var o = { a: e.a, b: e.b, t: e.t };
      if (e.t === 'parent') { if (e.ill) o.ill = true; if (e.ad) o.ad = true; }
      if (e.t === 'spouse' && e.ex) o.ex = true;
      w.kin.push(o);
    });
    w.places = list(raw.places, 60);
    w.rev = num(raw.rev, 0, 1e9, 0);
    w.clock = { day: num(raw.clock && raw.clock.day, 0, 1e7, 0) };
    w.rel = {};
    var RL = raw.rel && typeof raw.rel === 'object' ? raw.rel : {};
    Object.keys(RL).forEach(function (k) {
      var q = k.split('|'), r = RL[k] || {};
      if (q.length !== 2 || !w.people[q[0]] || !w.people[q[1]]) return;
      var o = { like: num(r.like, -100, 100, 0), love: num(r.love, 0, 100, 0), rival: num(r.rival, 0, 100, 0) };
      if (r.since != null) o.since = num(r.since, 0, 1e7, 0);
      if (r.affair) o.affair = true;
      if (r.feud) o.feud = true;
      w.rel[q.slice().sort().join('|')] = o;
    });
    w.events = (Array.isArray(raw.events) ? raw.events : []).filter(function (e) { return e && e.t && e.id; }).slice(-EV_MAX).map(function (e) {
      return { id: String(e.id), day: num(e.day, 0, 1e7, 0), t: String(e.t), a: e.a || null, b: e.b || null, v: e.v && typeof e.v === 'object' ? e.v : {},
        pub: /^(public|rumor|secret)$/.test(e.pub) ? e.pub : 'rumor', minor: !!e.minor,
        known: (Array.isArray(e.known) ? e.known : []).filter(function (x) { return w.people[x]; }),
        heard: e.heard && typeof e.heard === 'object' ? e.heard : {} };
    });
    w.pending = (Array.isArray(raw.pending) ? raw.pending : []).filter(function (p) { return p && w.people[p.mother]; });
    var tr = raw.traits && typeof raw.traits === 'object' ? raw.traits : null;
    if (!tr && raw.era) tr = OLD_ERA[raw.era] || null;
    w.traits = { magic: !!(tr && tr.magic), nobility: !!(tr && tr.nobility), modern: !!(tr && tr.modern), src: tr && /^(auto|hand)$/.test(tr.src) ? tr.src : (raw.eraSrc === 'hand' ? 'hand' : '') };
    w.events.forEach(function (e) { if (OLD_EV[e.t]) e.t = OLD_EV[e.t]; });
    w.secrets = (Array.isArray(raw.secrets) ? raw.secrets : []).filter(function (x) { return x && x.id && Array.isArray(x.about); }).map(function (x) {
      return { id: String(x.id), about: x.about.filter(function (a) { return w.people[a]; }), ev: x.ev ? String(x.ev) : '', text: txt(x.text, 300),
        known: (Array.isArray(x.known) ? x.known : []).filter(function (a) { return w.people[a]; }), bm: (Array.isArray(x.bm) ? x.bm : []).filter(function (a) { return w.people[a]; }), out: !!x.out, day: num(x.day, 0, 1e7, 0), stake: num(x.stake, 1, 3, 2) };
    }).filter(function (x) { return x.about.length && (x.text || x.ev); }).slice(-120);
    w.goals = (Array.isArray(raw.goals) ? raw.goals : []).filter(function (g) { return g && g.id && w.people[g.owner] && GOALS[g.t]; }).map(function (g) {
      return { id: String(g.id), owner: g.owner, t: g.t, target: g.target && w.people[g.target] ? g.target : null, mate: g.mate && w.people[g.mate] ? g.mate : null,
        pr: num(g.pr, 0, 100, 0), day: num(g.day, 0, 1e7, 0), end: g.end || null, ev: g.ev || '' };
    }).slice(-80);
    return w;
  }
  function addPerson(w, data) {
    var id = uid('p');
    w.people[id] = person(data, id);
    if (w.people[id].house && !w.houses[w.people[id].house]) w.people[id].house = '';
    return id;
  }
  function removePerson(w, id) {
    if (!w.people[id]) return;
    delete w.people[id];
    w.kin = w.kin.filter(function (e) { return e.a !== id && e.b !== id; });
    touch(w);
    Object.keys(w.houses).forEach(function (h) { if (w.houses[h].head === id) w.houses[h].head = ''; });
  }
  function addHouse(w, name) {
    var id = uid('h');
    w.houses[id] = { id: id, name: str(name, 80) || '?', seat: '', motto: '', head: '' };
    return id;
  }
  function removeHouse(w, id) {
    delete w.houses[id];
    Object.keys(w.people).forEach(function (p) { if (w.people[p].house === id) w.people[p].house = ''; });
  }
  function byName(w, name) {
    var n = str(name).toLowerCase();
    if (!n) return null;
    var ids = Object.keys(w.people);
    for (var i = 0; i < ids.length; i++) {
      var p = w.people[ids[i]];
      if (p.name.toLowerCase() === n || p.aliases.some(function (a) { return a.toLowerCase() === n; })) return ids[i];
    }
    return null;
  }

  /* ── связи ───────────────────────────────────────────────────────────── */
  /* Родители и дети с учётом связи «брат/сестра»: у кого своих родителей нет, тот наследует
     родителей братьев и сестёр, а если их нет ни у кого — получает общего невидимого родителя '@…'. */
  function fam(w) {
    if (w._c) return w._c;
    var par = {}, kids = {}, root = {};
    function add(p, c) { (par[c] = par[c] || []).push(p); (kids[p] = kids[p] || []).push(c); }
    function find(x) { while (root[x] !== x) x = root[x]; return x; }
    w.kin.forEach(function (e) { if (e.t === 'parent') add(e.a, e.b); });
    w.kin.forEach(function (e) {
      if (e.t !== 'sibling') return;
      if (!(e.a in root)) root[e.a] = e.a; if (!(e.b in root)) root[e.b] = e.b;
      var ra = find(e.a), rb = find(e.b);
      if (ra !== rb) root[rb] = ra;
    });
    var groups = {};
    Object.keys(root).forEach(function (x) { var r = find(x); (groups[r] = groups[r] || []).push(x); });
    Object.keys(groups).forEach(function (r) {
      var mem = groups[r], real = [];
      mem.forEach(function (m) { (par[m] || []).forEach(function (p) { if (real.indexOf(p) < 0) real.push(p); }); });
      var lone = mem.filter(function (m) { return !(par[m] || []).length; });
      var give = real.length ? real.slice(0, 2) : ['@' + r];
      lone.forEach(function (m) { give.forEach(function (p) { add(p, m); }); });
    });
    var c = { par: par, kids: kids };
    try { Object.defineProperty(w, '_c', { value: c, writable: true, configurable: true, enumerable: false }); } catch (x) { w._c = c; }
    return c;
  }
  function touch(w) { try { Object.defineProperty(w, '_c', { value: null, writable: true, configurable: true, enumerable: false }); } catch (x) { w._c = null; } }
  function parentsOf(w, id) { return (fam(w).par[id] || []).slice(); }
  function childrenOf(w, id) { return (fam(w).kids[id] || []).slice(); }
  function realParents(w, id) { return w.kin.filter(function (e) { return e.t === 'parent' && e.b === id; }).map(function (e) { return e.a; }); }
  function partners(w, id, t, ex) {
    return w.kin.filter(function (e) { return e.t === t && (e.a === id || e.b === id) && (ex == null || !!e.ex === ex); })
      .map(function (e) { return e.a === id ? e.b : e.a; });
  }
  function spousesOf(w, id) { return partners(w, id, 'spouse', false); }
  function siblingsOf(w, id) {
    var out = [];
    parentsOf(w, id).forEach(function (p) { childrenOf(w, p).forEach(function (c) { if (c !== id && out.indexOf(c) < 0) out.push(c); }); });
    return out;
  }
  function edge(w, a, b, t) {
    for (var i = 0; i < w.kin.length; i++) {
      var e = w.kin[i];
      if (e.t !== t) continue;
      if (t === 'parent' ? (e.a === a && e.b === b) : ((e.a === a && e.b === b) || (e.a === b && e.b === a))) return e;
    }
    return null;
  }
  function isAncestor(w, anc, id) {
    var stack = [id], seen = {};
    while (stack.length) {
      var x = stack.pop();
      if (x === anc) return true;
      if (seen[x]) continue; seen[x] = 1;
      parentsOf(w, x).forEach(function (p) { stack.push(p); });
    }
    return false;
  }
  /* Добавить прямую связь. t: parent (a — родитель b), spouse, betrothed.
     Возвращает '' или код ошибки для подписи в окне. */
  function addKin(w, a, b, t, opt) {
    opt = opt || {};
    if (!w.people[a] || !w.people[b]) return 'missing';
    if (a === b) return 'self';
    if (t === 'parent') {
      if (edge(w, a, b, 'parent')) return 'dup';
      if (isAncestor(w, b, a)) return 'cycle';
      if (realParents(w, b).length >= 2 && !opt.ad) return 'parents';
      var e = { a: a, b: b, t: 'parent' };
      if (opt.ill) e.ill = true; if (opt.ad) e.ad = true;
      w.kin.push(e); touch(w);
      return '';
    }
    if (t !== 'spouse' && t !== 'betrothed' && t !== 'sibling') return 'type';
    if (isAncestor(w, a, b) || isAncestor(w, b, a)) return 'blood';
    if (t === 'sibling') {
      if (edge(w, a, b, 'sibling') || siblingsOf(w, a).indexOf(b) >= 0) return 'dup';
      w.kin.push({ a: a, b: b, t: 'sibling' }); touch(w);
      return '';
    }
    var old = edge(w, a, b, t);
    if (old) { if (t === 'spouse' && !!old.ex !== !!opt.ex) { if (opt.ex) old.ex = true; else delete old.ex; return ''; } return 'dup'; }
    if (t === 'spouse') {
      var b0 = edge(w, a, b, 'betrothed');
      if (b0) w.kin.splice(w.kin.indexOf(b0), 1);
    }
    var s = { a: a, b: b, t: t };
    if (t === 'spouse' && opt.ex) s.ex = true;
    w.kin.push(s); touch(w);
    return '';
  }
  function removeKin(w, a, b, t) {
    var e = edge(w, a, b, t);
    if (e) { w.kin.splice(w.kin.indexOf(e), 1); touch(w); }
    return !!e;
  }

  /* Предки с путями: {id: {d, path:[from, родитель, …, id]}} */
  function ancestors(w, id) {
    var out = {}, q = [[id]];
    out[id] = { d: 0, path: [id] };
    while (q.length) {
      var path = q.shift(), last = path[path.length - 1];
      if (path.length > 9) continue;
      parentsOf(w, last).forEach(function (p) {
        if (out[p]) return;
        var np = path.concat(p);
        out[p] = { d: np.length - 1, path: np };
        q.push(np);
      });
    }
    return out;
  }
  function sexOf(w, id) { return (w.people[id] && w.people[id].sex) || 'x'; }

  /* Кем B приходится A. Список отношений: сначала супружеские, потом одно родственное. */
  function relate(w, A, B) {
    if (!w.people[A] || !w.people[B] || A === B) return [];
    var C = fam(w), key = A + '>' + B;
    C.rel = C.rel || {};
    if (C.rel[key]) return C.rel[key];
    return (C.rel[key] = relate0(w, A, B));
  }
  function relate0(w, A, B) {
    var out = [];
    var sp = edge(w, A, B, 'spouse');
    if (sp) out.push({ k: sp.ex ? 'exspouse' : 'spouse' });
    else if (edge(w, A, B, 'betrothed')) out.push({ k: 'betrothed' });

    var blood = null, aa = ancestors(w, A), ab = ancestors(w, B), best = null;
    Object.keys(aa).forEach(function (x) {
      if (!ab[x]) return;
      var da = aa[x].d, db = ab[x].d, sc = da + db;
      if (!best || sc < best.sc || (sc === best.sc && Math.max(da, db) < Math.max(best.da, best.db))) best = { x: x, da: da, db: db, sc: sc };
    });
    if (best) {
      var da = best.da, db = best.db, pa = aa[best.x].path, pb = ab[best.x].path, e;
      if (da === 0) {
        if (db === 1) { e = edge(w, A, B, 'parent'); blood = { k: 'child', ill: !!(e && e.ill), ad: !!(e && e.ad) }; }
        else blood = { k: 'grandchild', n: db };
      } else if (db === 0) {
        if (da === 1) { e = edge(w, B, A, 'parent'); blood = { k: 'parent', ad: !!(e && e.ad) }; }
        else blood = { k: 'grandparent', n: da };
      } else if (da === 1 && db === 1) {
        var ps = parentsOf(w, A), qs = parentsOf(w, B), sh = ps.filter(function (p) { return qs.indexOf(p) >= 0; });
        blood = { k: 'sibling' };
        if (sh.length === 1 && (ps.length > 1 || qs.length > 1)) blood.half = sexOf(w, sh[0]) === 'f' ? 'f' : 'm';
      } else if (da === 2 && db === 1) blood = { k: 'uncle', side: sexOf(w, pa[1]) };
      else if (da === 3 && db === 1) blood = { k: 'greatuncle', side: sexOf(w, pa[1]) };
      else if (da === 1 && db === 2) blood = { k: 'nephew', side: sexOf(w, pb[1]) };
      else if (da === 1 && db === 3) blood = { k: 'grandnephew', side: sexOf(w, pb[1]) };
      else if (da === db) blood = da <= 4 ? { k: 'cousin', n: da - 1, side: (sexOf(w, pa[1]) === 'm' && sexOf(w, pb[1]) === 'm') ? 'm' : 'f' } : { k: 'distant' };
      else if (da === 3 && db === 2) blood = { k: 'cousinuncle' };
      else if (da === 2 && db === 3) blood = { k: 'cousinnephew' };
      else if (da + db <= 9) blood = { k: 'distant' };
    }
    if (blood) { out.push(blood); return out; }

    var pA = parentsOf(w, A), pB = parentsOf(w, B), sA = spousesOf(w, A), sB = spousesOf(w, B);
    var other = null;
    if (pA.some(function (p) { return sB.indexOf(p) >= 0; })) other = { k: 'stepparent' };
    else if (pB.some(function (p) { return sA.indexOf(p) >= 0; })) other = { k: 'stepchild' };
    else if (pA.some(function (p) { return spousesOf(w, p).some(function (q) { return pB.indexOf(q) >= 0; }); })) other = { k: 'stepsibling' };
    else if (sA.some(function (s) { return parentsOf(w, s).indexOf(B) >= 0; })) other = { k: 'parentinlaw' };
    else if (sB.some(function (s) { return parentsOf(w, s).indexOf(A) >= 0; })) other = { k: 'childinlaw' };
    else if (sA.some(function (s) { return siblingsOf(w, s).indexOf(B) >= 0; })) other = { k: 'spousesibling' };
    else if (sB.some(function (s) { return siblingsOf(w, A).indexOf(s) >= 0; })) other = { k: 'siblingspouse' };
    else if (sA.some(function (s) { return siblingsOf(w, s).some(function (x) { return sB.indexOf(x) >= 0; }); })) other = { k: 'cosib' };
    if (other) { out.push(other); return out; }

    if (!sp) {
      var kids = childrenOf(w, A).filter(function (c) { return parentsOf(w, c).indexOf(B) >= 0; });
      if (kids.length) { out.push({ k: 'coparent', via: kids[0] }); return out; }
    }
    if (!out.length) {
      var via = linkVia(w, A, B);
      if (via) out.push({ k: 'related', via: via });
    }
    return out;
  }
  /* Путь по любым связям (до 5 шагов): возвращает того, через кого B связан с остальными. */
  function linkVia(w, A, B) {
    var C = fam(w), key = A + '~' + B;
    C.via = C.via || {};
    if (key in C.via) return C.via[key];
    return (C.via[key] = linkVia0(w, A, B));
  }
  function linkVia0(w, A, B) {
    var prev = {}, q = [A], depth = {};
    prev[A] = null; depth[A] = 0;
    while (q.length) {
      var x = q.shift();
      if (x === B) break;
      if (depth[x] >= 5) continue;
      w.kin.forEach(function (e) {
        if (e.t === 'spouse' && e.ex) return;
        var y = e.a === x ? e.b : e.b === x ? e.a : null;
        if (y && !(y in prev)) { prev[y] = x; depth[y] = depth[x] + 1; q.push(y); }
      });
    }
    if (!(B in prev)) return null;
    var path = [], c = B;
    while (c != null) { path.unshift(c); c = prev[c]; }
    return path.length > 2 ? path[path.length - 2] : null;
  }

  /* ── слова родства ───────────────────────────────────────────────────── */
  function g(sex, m, f, x) { return sex === 'm' ? m : sex === 'f' ? f : (x == null ? m + '/' + f : x); }
  var WORDS = {
    ru: function (r, s, sa, n) {
      var k = r.k;
      if (k === 'spouse') return g(s, 'муж', 'жена', 'супруг(а)');
      if (k === 'exspouse') return g(s, 'бывший муж', 'бывшая жена', 'бывший супруг');
      if (k === 'betrothed') return g(s, 'жених', 'невеста', 'нареченный');
      if (k === 'parent') return (r.ad ? g(s, 'приёмный ', 'приёмная ', 'приёмный ') : '') + g(s, 'отец', 'мать', 'родитель');
      if (k === 'child') return (r.ad ? g(s, 'приёмный ', 'приёмная ', 'приёмный ') : r.ill ? g(s, 'внебрачный ', 'внебрачная ', 'внебрачный ') : '') + g(s, 'сын', 'дочь', 'ребёнок');
      if (k === 'grandparent') return r.n === 2 ? g(s, 'дед', 'бабушка', 'дед/бабушка') : r.n <= 5 ? rep('пра', r.n - 2) + g(s, 'дед', 'бабушка', 'дед') : 'предок';
      if (k === 'grandchild') return r.n === 2 ? g(s, 'внук', 'внучка', 'внук') : r.n <= 5 ? rep('пра', r.n - 2) + g(s, 'внук', 'внучка', 'внук') : 'потомок';
      if (k === 'sibling') return (r.half ? (r.half === 'm' ? g(s, 'единокровный ', 'единокровная ', 'единокровный ') : g(s, 'единоутробный ', 'единоутробная ', 'единоутробный ')) : '') + g(s, 'брат', 'сестра', 'брат/сестра');
      if (k === 'uncle') return g(s, 'дядя', 'тётя');
      if (k === 'greatuncle') return g(s, 'двоюродный дед', 'двоюродная бабушка');
      if (k === 'nephew') return g(s, 'племянник', 'племянница');
      if (k === 'grandnephew') return g(s, 'внучатый племянник', 'внучатая племянница');
      if (k === 'cousin') return (['двоюрод', 'троюрод', 'четвероюрод'][r.n - 1] || 'дальн') + g(s, 'ный брат', 'ная сестра', 'ный брат/сестра');
      if (k === 'cousinuncle') return g(s, 'двоюродный дядя', 'двоюродная тётя');
      if (k === 'cousinnephew') return g(s, 'двоюродный племянник', 'двоюродная племянница');
      if (k === 'distant') return g(s, 'дальний родственник', 'дальняя родственница', 'дальняя родня');
      if (k === 'stepparent') return g(s, 'отчим', 'мачеха', 'неродной родитель');
      if (k === 'stepchild') return g(s, 'пасынок', 'падчерица', 'неродной ребёнок');
      if (k === 'stepsibling') return g(s, 'сводный брат', 'сводная сестра', 'сводный брат/сестра');
      if (k === 'parentinlaw') return sa === 'm' ? g(s, 'тесть', 'тёща') : sa === 'f' ? g(s, 'свёкор', 'свекровь') : g(s, 'отец супруга', 'мать супруга');
      if (k === 'childinlaw') return g(s, 'зять', 'невестка', 'супруг(а) ребёнка');
      if (k === 'spousesibling') return sa === 'm' ? g(s, 'шурин', 'свояченица') : sa === 'f' ? g(s, 'деверь', 'золовка') : g(s, 'брат супруга', 'сестра супруга');
      if (k === 'siblingspouse') return g(s, 'зять', 'невестка', 'супруг(а) брата/сестры');
      if (k === 'cosib') return s === 'm' && sa === 'm' ? 'свояк' : 'свойственник';
      if (k === 'coparent') return g(s, 'отец ребёнка', 'мать ребёнка', 'второй родитель ребёнка') + ' (' + n(r.via) + ')';
      if (k === 'related') return 'родня через ' + n(r.via);
      return '';
    },
    en: function (r, s, sa, n) {
      var k = r.k, ord = ['first', 'second', 'third'];
      if (k === 'spouse') return g(s, 'husband', 'wife', 'spouse');
      if (k === 'exspouse') return g(s, 'ex-husband', 'ex-wife', 'ex-spouse');
      if (k === 'betrothed') return g(s, 'fiancé', 'fiancée', 'betrothed');
      if (k === 'parent') return (r.ad ? 'adoptive ' : '') + g(s, 'father', 'mother', 'parent');
      if (k === 'child') return (r.ad ? 'adopted ' : r.ill ? 'illegitimate ' : '') + g(s, 'son', 'daughter', 'child');
      if (k === 'grandparent') return rep('great-', r.n - 2) + g(s, 'grandfather', 'grandmother', 'grandparent');
      if (k === 'grandchild') return rep('great-', r.n - 2) + g(s, 'grandson', 'granddaughter', 'grandchild');
      if (k === 'sibling') return (r.half ? (r.half === 'm' ? 'paternal half-' : 'maternal half-') : '') + g(s, 'brother', 'sister', 'sibling');
      if (k === 'uncle') return g(s, 'uncle', 'aunt', 'uncle/aunt');
      if (k === 'greatuncle') return g(s, 'great-uncle', 'great-aunt', 'great-uncle/aunt');
      if (k === 'nephew') return g(s, 'nephew', 'niece', 'nephew/niece');
      if (k === 'grandnephew') return g(s, 'grandnephew', 'grandniece', 'grandnephew/niece');
      if (k === 'cousin') return (ord[r.n - 1] || 'distant') + ' cousin';
      if (k === 'cousinuncle' || k === 'cousinnephew') return 'first cousin once removed';
      if (k === 'distant') return 'distant relative';
      if (k === 'stepparent') return g(s, 'stepfather', 'stepmother', 'step-parent');
      if (k === 'stepchild') return g(s, 'stepson', 'stepdaughter', 'stepchild');
      if (k === 'stepsibling') return g(s, 'stepbrother', 'stepsister', 'step-sibling');
      if (k === 'parentinlaw') return g(s, 'father-in-law', 'mother-in-law', 'parent-in-law');
      if (k === 'childinlaw') return g(s, 'son-in-law', 'daughter-in-law', 'child-in-law');
      if (k === 'spousesibling' || k === 'siblingspouse' || k === 'cosib') return g(s, 'brother-in-law', 'sister-in-law', 'sibling-in-law');
      if (k === 'coparent') return g(s, 'father', 'mother', 'other parent') + ' of their child ' + n(r.via);
      if (k === 'related') return 'related through ' + n(r.via);
      return '';
    },
    'zh-CN': function (r, s, sa, n) {
      var k = r.k, pat = r.side === 'm';
      if (k === 'spouse') return g(s, '丈夫', '妻子', '配偶');
      if (k === 'exspouse') return g(s, '前夫', '前妻', '前配偶');
      if (k === 'betrothed') return g(s, '未婚夫', '未婚妻', '未婚配偶');
      if (k === 'parent') return r.ad ? g(s, '养父', '养母', '养亲') : g(s, '父亲', '母亲', '家长');
      if (k === 'child') return r.ad ? g(s, '养子', '养女', '养子女') : r.ill ? g(s, '私生子', '私生女', '私生子女') : g(s, '儿子', '女儿', '孩子');
      if (k === 'grandparent') return r.n === 2 ? g(s, '祖父', '祖母', '祖辈') : r.n === 3 ? g(s, '曾祖父', '曾祖母', '曾祖辈') : '先祖';
      if (k === 'grandchild') return r.n === 2 ? g(s, '孙子', '孙女', '孙辈') : r.n === 3 ? g(s, '曾孙', '曾孙女', '曾孙辈') : '后裔';
      if (k === 'sibling') return (r.half ? (r.half === 'm' ? '同父异母的' : '同母异父的') : '') + g(s, '兄弟', '姐妹', '兄弟姐妹');
      if (k === 'uncle') return pat ? g(s, '叔伯', '姑姑', '叔伯/姑姑') : g(s, '舅舅', '姨妈', '舅舅/姨妈');
      if (k === 'greatuncle') return pat ? g(s, '叔公', '姑婆') : g(s, '舅公', '姨婆');
      if (k === 'nephew') return pat ? g(s, '侄子', '侄女') : g(s, '外甥', '外甥女');
      if (k === 'grandnephew') return g(s, '侄孙', '侄孙女');
      if (k === 'cousin') return r.n === 1 ? (pat ? '堂' : '表') + g(s, '兄弟', '姐妹', '兄弟姐妹') : '远房' + g(s, '兄弟', '姐妹', '亲戚');
      if (k === 'cousinuncle') return g(s, '表叔', '表姑');
      if (k === 'cousinnephew') return g(s, '表侄', '表侄女');
      if (k === 'distant') return '远亲';
      if (k === 'stepparent') return g(s, '继父', '继母', '继亲');
      if (k === 'stepchild') return g(s, '继子', '继女', '继子女');
      if (k === 'stepsibling') return g(s, '继兄弟', '继姐妹', '继兄弟姐妹');
      if (k === 'parentinlaw') return sa === 'm' ? g(s, '岳父', '岳母') : sa === 'f' ? g(s, '公公', '婆婆') : g(s, '配偶的父亲', '配偶的母亲');
      if (k === 'childinlaw') return g(s, '女婿', '儿媳', '子女的配偶');
      if (k === 'spousesibling') return sa === 'm' ? g(s, '舅子', '姨子') : sa === 'f' ? g(s, '小叔子', '小姑子') : g(s, '配偶的兄弟', '配偶的姐妹');
      if (k === 'siblingspouse') return g(s, '姐夫/妹夫', '嫂子/弟媳', '兄弟姐妹的配偶');
      if (k === 'cosib') return s === 'm' && sa === 'm' ? '连襟' : '姻亲';
      if (k === 'coparent') return n(r.via) + g(s, '的父亲', '的母亲', '的另一位家长');
      if (k === 'related') return '经由' + n(r.via) + '的亲戚';
      return '';
    }
  };
  function rep(s, n) { var o = ''; for (var i = 0; i < n; i++) o += s; return o; }
  function word(w, r, A, B, lang) {
    var f = WORDS[lang] || WORDS.en;
    return f(r, sexOf(w, B), sexOf(w, A), function (id) { return (w.people[id] && w.people[id].name) || '?'; });
  }
  /* «кем B приходится A» одной строкой, '' если не связаны */
  function label(w, A, B, lang) {
    return relate(w, A, B).map(function (r) { return word(w, r, A, B, lang); }).filter(Boolean).join(', ');
  }

  /* ── дома: дерево ───────────────────────────────────────────────────── */
  function byAge(w) { return function (a, b) { var x = w.people[a].age, y = w.people[b].age; return (y == null ? -1 : y) - (x == null ? -1 : x) || w.people[a].name.localeCompare(w.people[b].name); }; }
  /* Узлы: {id, spouses:[id], kids:[узел], out: true если не из этого дома} */
  function houseTree(w, hid) {
    var mem = Object.keys(w.people).filter(function (id) { return w.people[id].house === hid; });
    var done = {};
    function node(id, depth) {
      done[id] = 1;
      var sp = partners(w, id, 'spouse').filter(function (s) { return !done[s]; });
      sp.forEach(function (s) { done[s] = 1; });
      var kids = childrenOf(w, id).filter(function (c) { return !done[c]; }).sort(byAge(w));
      return {
        id: id, out: w.people[id].house !== hid, spouses: sp,
        kids: depth > 8 ? [] : kids.map(function (c) { return done[c] ? null : node(c, depth + 1); }).filter(Boolean)
      };
    }
    function inH(p) { return w.people[p] && w.people[p].house === hid; }
    var roots = mem.filter(function (id) { return !parentsOf(w, id).some(inH); }).sort(byAge(w));
    roots = roots.filter(function (id) {
      return !partners(w, id, 'spouse').some(function (s) { return inH(s) && parentsOf(w, s).some(inH); });
    });
    /* корни с общим родителем вне дома (или невидимым) собираем под ним */
    var out = [], vg = {};
    roots.forEach(function (id) { parentsOf(w, id).forEach(function (p) { (vg[p] = vg[p] || []).push(id); }); });
    roots.forEach(function (id) {
      if (done[id]) return;
      var best = null;
      parentsOf(w, id).forEach(function (p) {
        var n = vg[p].filter(function (m) { return !done[m]; }).length;
        if (n > 1 && (!best || n > best.n)) best = { p: p, n: n };
      });
      if (!best) { out.push(node(id, 0)); return; }
      var ghost = best.p.charAt(0) === '@';
      out.push({ id: best.p, ghost: ghost, out: true, spouses: [], kids: vg[best.p].filter(function (m) { return !done[m]; }).map(function (m) { return node(m, 1); }) });
    });
    mem.forEach(function (id) { if (!done[id]) out.push(node(id, 0)); });
    return out;
  }

  /* ── имена в тексте ──────────────────────────────────────────────────── */
  var SPLIT = /[^0-9A-Za-zÀ-ɏͰ-ϿЀ-ӿ'’-]+/;
  var CJK = /[぀-ヿ㐀-鿿가-힯]/;
  var TITLES = /^(lady|lord|sir|dame|king|queen|prince|princess|duke|duchess|count|countess|baron|baroness|mr|mrs|ms|miss|dr|master|mistress|father|mother|brother|sister|леди|лорд|сэр|сир|король|королева|принц|принцесса|князь|княгиня|княжна|граф|графиня|герцог|герцогиня|барон|баронесса|господин|госпожа|мистер|миссис|мисс|доктор|отец|мать|брат|сестра|царь|царица|царевич|царевна|боярин|боярыня|мастер|капитан|captain)$/i;
  var RU_END = /[аяоеёьйыиую]$/;
  var RU_CASE = { '': 1 };
  'а я о е ё у ю ы и ь й ой ей ёй ою ею ом ем ём ам ям ах ях ами ями ым им ого его ому ему ий ия ию ии ие ье ья ью ьи ьей ией ием ов ев ёв'.split(' ').forEach(function (e) { RU_CASE[e] = 1; });
  function tokens(text) {
    return String(text || '').split(SPLIT).filter(Boolean).map(function (t) {
      t = t.replace(/^[-'’]+|[-'’]+$/g, '').replace(/['’]s$/i, '');
      return t;
    }).filter(Boolean);
  }
  function isUpper(c) { return c !== c.toLowerCase() && c === c.toUpperCase(); }
  function wordRule(w) {
    var low = w.toLowerCase(), cap = isUpper(w.charAt(0)), stem = low;
    if (/[а-яё]/.test(low) && low.length >= 4) {
      var s = low.replace(RU_END, '');
      if (s.length >= 3 && s !== low) stem = s;
    }
    return function (t) {
      if (cap && !isUpper(t.charAt(0))) return false;
      var l = t.toLowerCase();
      if (l === low) return true;
      if (/[a-z]/.test(low)) return l === low + 's' || l === low + 'es';
      return l.length > stem.length && l.indexOf(stem) === 0 && RU_CASE[l.slice(stem.length)] === 1;
    };
  }
  function namesOf(p, s) {
    var out = [p.name].concat(p.aliases);
    if (!s || s.first !== false) {
      var tk = p.name.split(/\s+/).filter(Boolean), i = 0;
      while (i < tk.length - 1 && TITLES.test(tk[i])) i++;
      if (tk.length > 1 && tk[i] && tk[i].length >= 3 && !TITLES.test(tk[i])) out.push(tk[i]);
    }
    var seen = {};
    return out.filter(function (n) { var k = n.toLowerCase(); if (!n || seen[k]) return false; seen[k] = 1; return true; });
  }
  function matcher(p, s) {
    var rules = namesOf(p, s).map(function (n) {
      if (CJK.test(n)) return { cjk: n };
      var tk = tokens(n);
      return tk.length ? { seq: tk.map(wordRule) } : null;
    }).filter(Boolean);
    return function (tk, raw) {
      for (var r = 0; r < rules.length; r++) {
        var R = rules[r];
        if (R.cjk) { if (raw.indexOf(R.cjk) >= 0) return true; continue; }
        var seq = R.seq;
        for (var i = 0; i + seq.length <= tk.length; i++) {
          var ok = true;
          for (var j = 0; j < seq.length && ok; j++) ok = seq[j](tk[i + j]);
          if (ok) return true;
        }
      }
      return false;
    };
  }
  function clean(t) {
    return String(t || '').replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\{\{[^}]*\}\}/g, ' ');
  }
  function msgText(m) {
    if (m == null) return '';
    if (typeof m === 'string') return clean(m);
    return clean(m.content != null ? m.content : m.mes != null ? m.mes : m.text != null ? m.text : '');
  }
  /* Кто упомянут в сообщениях. Возвращает {id: сколько сообщений назад (0 — последнее)} */
  function mentions(w, msgs, s, ids) {
    ids = ids || Object.keys(w.people);
    var M = ids.map(function (id) { return { id: id, f: matcher(w.people[id], s) }; });
    var out = {}, left = M.length;
    for (var i = msgs.length - 1; i >= 0 && left; i--) {
      var raw = msgText(msgs[i]);
      if (!raw) continue;
      var tk = tokens(raw);
      for (var j = 0; j < M.length; j++) {
        var m = M[j];
        if (m.id in out) continue;
        if (m.f(tk, raw)) { out[m.id] = msgs.length - 1 - i; left--; }
      }
    }
    return out;
  }

  /* ── главные герои ───────────────────────────────────────────────────── */
  function mains(w) {
    return Object.keys(w.people).filter(function (id) { return w.people[id].flags.char || w.people[id].flags.player; });
  }
  /* Добавить в мир героев чата (карточки и персону), если их там нет. true — что-то изменилось. */
  function ensureMains(w, chars, user) {
    var ch = false;
    function one(name, flag) {
      name = str(name, 80);
      if (!name) return;
      var id = byName(w, name);
      if (id) { if (!w.people[id].flags[flag]) { w.people[id].flags[flag] = true; ch = true; } return; }
      id = addPerson(w, { name: name, flags: flag === 'char' ? { char: true, important: true } : { player: true, important: true } });
      ch = true;
    }
    (chars || []).forEach(function (n) { one(n, 'char'); });
    one(user, 'player');
    return ch;
  }

  /* ── справка для модели ──────────────────────────────────────────────── */
  function inScene(w, msgs, s, pins) {
    var seen = mentions(w, (msgs || []).slice(-s.scan), s);
    var ids = Object.keys(seen).sort(function (a, b) { return seen[a] - seen[b]; });
    (pins || []).slice().reverse().forEach(function (id) { if (w.people[id]) { ids = ids.filter(function (x) { return x !== id; }); ids.unshift(id); } });
    return ids;
  }
  function ties(w, id, others, lang) {
    var fam = [].concat(partners(w, id, 'spouse'), partners(w, id, 'betrothed'), parentsOf(w, id), childrenOf(w, id));
    var pool = [], out = [];
    others.concat(fam).forEach(function (o) { if (o !== id && pool.indexOf(o) < 0 && w.people[o]) pool.push(o); });
    pool.forEach(function (o) {
      var rs = relate(w, o, id);
      if (rs.length) out.push({ id: o, rs: rs, l: rs.map(function (r) { return word(w, r, o, id, lang); }).join(', ') });
    });
    return out;
  }
  function card(w, id, others, s) {
    var p = w.people[id], h = p.house && w.houses[p.house];
    var role = [p.role.title, p.role.job, p.role.faction].filter(Boolean).join(', ');
    var head = '- ' + p.name;
    var al = p.aliases.slice(0, 3);
    if (al.length) head += ' (also: ' + al.join(', ') + ')';
    var bits = [];
    if (role) bits.push(role);
    if (h) bits.push('House ' + h.name.replace(/^(дом|house|家族)\s+/i, '') + (h.head === id ? ' (head of house)' : ''));
    if (p.age != null) bits.push('age ' + p.age);
    if (p.role.place) bits.push('usually at ' + p.role.place);
    if (!p.alive) bits.push('DECEASED');
    if (bits.length) head += ' — ' + bits.join('; ');
    var lines = [head];
    if (p.traits.length) lines.push('  Traits: ' + p.traits.join(', '));
    var t = ties(w, id, others, 'en').slice(0, 6);
    function nm(x) { return (w.people[x] && w.people[x].name) || '?'; }
    if (t.length) lines.push('  Ties: ' + t.map(function (x) {
      return x.rs.map(function (r) {
        if (r.k === 'related') return 'related to ' + nm(x.id) + ' through ' + nm(r.via);
        if (r.k === 'coparent') return 'has a child (' + nm(r.via) + ') with ' + nm(x.id);
        return word(w, r, x.id, id, 'en') + ' of ' + nm(x.id);
      }).join(', ');
    }).join('; '));
    var now = [];
    if (p.ill) now.push('currently ill');
    if ((w.pending || []).some(function (x) { return x.mother === id && knownToMain(w, x.ev); })) now.push('expecting a child');
    partnersOf(w, id).forEach(function (o) {
      var r = relOf(w, id, o);
      if (!r.affair) now.push('seeing ' + w.people[o].name);
      else if (affairKnown(w, id, o)) now.push('in a secret affair with ' + w.people[o].name + ' (' + knowers(w, id, o) + ' know)');
    });
    Object.keys(w.people).forEach(function (o) { if (o !== id && relOf(w, id, o).rival >= 60) now.push('enemy of ' + w.people[o].name); });
    if (now.length) lines.push('  Now: ' + now.slice(0, 4).join('; '));
    var late = lately(w, id, 2);
    if (late.length) lines.push('  Lately: ' + late.map(function (e) { return evText(w, e, 'en') + ' (' + agoEn(w.clock.day - e.day) + ')'; }).join('; '));
    if (p.threads.length) lines.push('  Unfinished: ' + p.threads.slice(0, 3).join('; '));
    var ms0 = mains(w);
    (w.secrets || []).filter(function (x) { return !x.out && x.about.indexOf(id) >= 0 && !(x.ev && (w.events.filter(function (e) { return e.id === x.ev; })[0] || {}).t === 'plot'); }).slice(-2).forEach(function (x) {
      var kn = x.known.filter(function (k) { return x.about.indexOf(k) < 0 && w.people[k]; }).map(function (k) { return w.people[k].name; });
      var hero = ms0.filter(function (m) { return x.known.indexOf(m) >= 0; }).map(function (m) { return w.people[m].name; });
      lines.push('  Secret: ' + secretText(w, x, 'en') + ' (' + (kn.length ? 'also known to ' + kn.slice(0, 3).join(', ') : 'nobody else knows') + (hero.length ? '' : '; the main characters do NOT know') + ')');
    });
    (w.goals || []).filter(function (g) { return g.owner === id && !g.end; }).slice(0, 1).forEach(function (g) {
      lines.push('  Hidden agenda: ' + goalEn(w, g) + (g.pr >= 100 ? ' (ready to act on it now)' : ' (progress ' + g.pr + '%)'));
    });
    if (s.bio && p.bio) lines.push('  Notes: ' + p.bio.replace(/\s+/g, ' ').slice(0, 220) + (p.bio.length > 220 ? '…' : ''));
    return lines.join('\n');
  }
  /* Текст для generation:prepare. o: {world, settings, msgs, pins} */
  function compose(o) {
    var s = settings(o.settings), w = o.world;
    if (!s.on || !w || !Object.keys(w.people).length) return { text: '', ids: [] };
    var main = mains(w);
    var ids = inScene(w, o.msgs, s, o.pins).filter(function (id) { return main.indexOf(id) < 0; }).slice(0, s.max);
    if (!ids.length) return { text: '', ids: [] };
    var others = main.concat(ids);
    var body = ids.map(function (id) { return card(w, id, others, s); }).join('\n');
    return {
      ids: ids,
      text: '[World registry — characters present or mentioned in the current scene. Keep these facts (family ties, roles, unfinished business) consistent; use them only where they fit, never recite the list. Secrets and hidden agendas are for subtle play: let them color behavior and subtext, but never reveal them unless the story uncovers them.\n' + body + '\n]'
    };
  }

  /* ── жизнь за кадром ─────────────────────────────────────────────────── */
  var EV_MAX = 400, YEAR = 360, STEP = 30;
  var PACE = { calm: 0.5, normal: 1, drama: 2 };
  function relKey(a, b) { return a < b ? a + '|' + b : b + '|' + a; }
  function relOf(w, a, b, make) {
    var k = relKey(a, b), r = w.rel && w.rel[k];
    if (r) return r;
    r = { like: 0, love: 0, rival: 0 };
    if (make) { w.rel = w.rel || {}; w.rel[k] = r; }
    return r;
  }
  function clampRel(r) { r.like = Math.max(-100, Math.min(100, r.like)); r.love = Math.max(0, Math.min(100, r.love)); r.rival = Math.max(0, Math.min(100, r.rival)); }
  function married(w, a, b) { var e = edge(w, a, b, 'spouse'); return !!(e && !e.ex); }
  function loveIdx(w) {
    if (w._lp) return w._lp;
    var ix = {};
    Object.keys(w.rel || {}).forEach(function (k) { if (w.rel[k].love < 50) return; var q = k.split('|'); (ix[q[0]] = ix[q[0]] || []).push(q[1]); (ix[q[1]] = ix[q[1]] || []).push(q[0]); });
    try { Object.defineProperty(w, '_lp', { value: ix, writable: true, configurable: true, enumerable: false }); } catch (x) { w._lp = ix; }
    return ix;
  }
  function loveDirty(w) { if (w._lp) w._lp = null; }
  function partnersOf(w, id) {
    return (loveIdx(w)[id] || []).slice()
      .filter(function (o) { return w.people[o] && w.people[o].alive && !married(w, id, o) && !edge(w, id, o, 'betrothed'); });
  }
  function free(w, id) { return !spousesOf(w, id).some(function (x) { return w.people[x] && w.people[x].alive; }) && !partners(w, id, 'betrothed').length && !partnersOf(w, id).length; }
  function adult(p) { return p.age == null || p.age >= 16; }
  function blood(w, a, b) { return relate(w, a, b).some(function (r) { return /^(parent|child|grandparent|grandchild|sibling|uncle|greatuncle|nephew|grandnephew|cousin|cousinuncle|cousinnephew)$/.test(r.k) || (r.k === 'stepparent' || r.k === 'stepchild'); }); }
  function allPlaces(w) {
    var out = (w.places || []).slice();
    Object.keys(w.people).forEach(function (id) { var x = w.people[id].role.place; if (x && out.indexOf(x) < 0) out.push(x); });
    Object.keys(w.houses).forEach(function (h) { var x = w.houses[h].seat; if (x && out.indexOf(x) < 0) out.push(x); });
    return out;
  }
  function near(w, a, b) {
    var p = w.people[a], q = w.people[b];
    return !!((p.role.place && p.role.place === q.role.place) || (p.house && p.house === q.house));
  }
  function knownToMain(w, evId) {
    var e = evId && w.events.filter(function (x) { return x.id === evId; })[0];
    if (!e) return true;
    return e.pub === 'public' || mains(w).some(function (m) { return e.known.indexOf(m) >= 0; });
  }
  function affairEv(w, a, b) { return w.events.filter(function (e) { return e.t === 'affair' && ((e.a === a && e.b === b) || (e.a === b && e.b === a)); }).pop(); }
  function affairKnown(w, a, b) { var e = affairEv(w, a, b); return !!(e && mains(w).some(function (m) { return e.known.indexOf(m) >= 0; })); }
  function knowers(w, a, b) { var e = affairEv(w, a, b); return e ? mains(w).filter(function (m) { return e.known.indexOf(m) >= 0; }).map(function (m) { return w.people[m].name; }).join(', ') : ''; }
  /* События о человеке, которые не спойлер: публичные или уже известные героям */
  function lately(w, id, n) {
    return w.events.filter(function (e) {
      return !e.minor && (e.a === id || e.b === id || (e.v && e.v.child === id)) && w.clock.day - e.day <= 180 &&
        (e.pub === 'public' || mains(w).some(function (m) { return e.known.indexOf(m) >= 0; }));
    }).slice(-n).reverse();
  }
  function agoEn(d) { return d <= 0 ? 'today' : d < 14 ? d + ' days ago' : d < 60 ? Math.round(d / 7) + ' weeks ago' : Math.round(d / 30) + ' months ago'; }
  function date(day) {
    day = Math.max(0, Math.floor(day || 0));
    var y = Math.floor(day / YEAR) + 1, m = Math.floor((day % YEAR) / 30) + 1, d = day % 30 + 1;
    return { y: y, m: m, d: d, season: Math.floor((m - 1) / 3) };
  }

  var NAMES = {
    ru: { m: ['Алексей', 'Борис', 'Василий', 'Глеб', 'Даниил', 'Егор', 'Иван', 'Кирилл', 'Лев', 'Матвей', 'Никита', 'Олег', 'Павел', 'Роман', 'Святослав', 'Тимофей', 'Фёдор', 'Ярослав', 'Арсений', 'Мирон'],
      f: ['Анна', 'Варвара', 'Вера', 'Дарья', 'Евдокия', 'Елена', 'Зоя', 'Ирина', 'Ксения', 'Любава', 'Марфа', 'Милана', 'Ольга', 'Полина', 'Софья', 'Таисия', 'Ульяна', 'Агния', 'Василиса', 'Злата'] },
    en: { m: ['Alaric', 'Bennet', 'Cedric', 'Edwin', 'Felix', 'Gareth', 'Henry', 'Jasper', 'Lionel', 'Miles', 'Oliver', 'Percival', 'Rowan', 'Simon', 'Tobias', 'Walter', 'Arthur', 'Hugh', 'Roland', 'Thomas'],
      f: ['Alice', 'Beatrice', 'Cecily', 'Eleanor', 'Florence', 'Grace', 'Helena', 'Isolde', 'Juliet', 'Lydia', 'Mabel', 'Rosalind', 'Sybil', 'Viola', 'Agnes', 'Clara', 'Edith', 'Imogen', 'Maud', 'Rose'] },
    zh: { m: ['明轩', '浩然', '子墨', '景行', '承宇', '思远', '云帆', '书恒', '天佑', '俊杰'], f: ['婉清', '若曦', '思琪', '梦瑶', '静怡', '雨桐', '芷若', '诗涵', '欣妍', '语嫣'] }
  };
  function babyName(w, mother, sex, rnd) {
    var n = w.people[mother] ? w.people[mother].name : '';
    var pool = (CJK.test(n) ? NAMES.zh : /[а-яё]/i.test(n) ? NAMES.ru : NAMES.en)[sex === 'f' ? 'f' : 'm'];
    var used = {};
    Object.keys(w.people).forEach(function (id) { used[w.people[id].name.split(' ')[0]] = 1; });
    var free = pool.filter(function (x) { return !used[x]; });
    var list = free.length ? free : pool;
    return list[Math.floor(rnd() * list.length)];
  }

  /* ── эпохи ── */
  /* Признаки мира: есть ли магия, знать и титулы, современная техника. Определяются сами, можно поправить. */
  var OLD_ERA = { medieval: { nobility: true }, renaissance: { nobility: true }, regency: { nobility: true }, victorian: { nobility: true }, modern: { modern: true }, fantasy: { magic: true, nobility: true } };
  var OLD_EV = { tourney: 'contest', viral: 'fame', quest: 'journey', questback: 'return', cloister: 'withdraw' };
  function traitsOf(w) { var t = w.traits || {}; return { magic: !!t.magic, nobility: !!t.nobility, modern: !!t.modern }; }
  function arrangeK(w) { var t = traitsOf(w); return t.modern ? 0.3 : t.nobility ? 3 : 1; }
  function rx(re, p) { return re.test((p.traits.join(' ') + ' ' + p.role.job + ' ' + p.role.title).toLowerCase()); }
  var AMBI = /амбиц|честолюб|властн|хитр|расчётл|ambiti|cunning|scheming|power|野心|狡猾/;
  var VENG = /мститель|злопамят|гордый|гордая|ревнив|vengeful|spiteful|proud|jealous|记仇|嫉妒/;
  var GREED = /жадн|алчн|корыст|greedy|venal|贪/;

  /* ── тайны ── */
  function secretOf(w, evId) { return w.secrets.filter(function (x) { return x.ev === evId; })[0]; }
  function addSecret(w, about, opt) {
    opt = opt || {};
    var x = { id: uid('s'), about: about.filter(Boolean), ev: opt.ev || '', text: txt(opt.text, 300), known: (opt.known || about).filter(Boolean).slice(), out: false, day: w.clock.day, stake: opt.stake || 2 };
    w.secrets.push(x);
    return x;
  }
  function secretText(w, x, lang) {
    if (x.text) return x.text;
    var e = w.events.filter(function (y) { return y.id === x.ev; })[0];
    return e ? evText(w, e, lang) : '?';
  }
  function learn(w, x, who, by) {
    if (x.known.indexOf(who) >= 0) return false;
    x.known.push(who);
    var e = x.ev && w.events.filter(function (y) { return y.id === x.ev; })[0];
    if (e && e.known.indexOf(who) < 0) { e.known.push(who); if (mains(w).indexOf(who) >= 0) e.heard[who] = { by: by || null, day: w.clock.day }; }
    return true;
  }

  /* ── замыслы ──
     match — выгодная партия для ребёнка, revenge — месть, rise — возвышение, win — добиться занятого человека */
  var GOALS = { match: 1, revenge: 1, rise: 1, win: 1 };
  function hasGoal(w, id) { return w.goals.some(function (g) { return g.owner === id && !g.end; }); }
  function unmarriedKids(w, id) {
    return childrenOf(w, id).filter(function (c) { var p = w.people[c]; return p && p.alive && p.age != null && p.age >= 15 && free(w, c) && !p.flags.char && !p.flags.player; });
  }
  function suitor(w, kid, s, rnd) {
    var K = w.people[kid];
    var c = Object.keys(w.people).filter(function (o) {
      var p = w.people[o];
      return o !== kid && p.alive && !p.flags.char && !p.flags.player && !p.flags.safe && adult(p) && free(w, o) && pairOk(w, kid, o, { pairs: 'mf' }) && (!K.house || p.house !== K.house);
    });
    c.sort(function (a, b) { return (w.people[b].house ? 1 : 0) - (w.people[a].house ? 1 : 0) || (rnd() - 0.5); });
    return c[0] || null;
  }
  /* Новые замыслы: из черт и положения */
  function adoptGoals(w, alive, d, s, rnd, mult, push) {
    alive.forEach(function (id) {
      var p = w.people[id];
      if (p.flags.safe || !adult(p) || hasGoal(w, id)) return;
      var opts = [];
      var kids = unmarriedKids(w, id);
      if (kids.length) opts.push({ t: 'match', target: kids[Math.floor(rnd() * kids.length)], wt: 0.25 * arrangeK(w) });
      Object.keys(w.people).forEach(function (o) {
        if (o === id || !w.people[o].alive) return;
        var r = relOf(w, id, o);
        if (r.rival >= 50) opts.push({ t: 'revenge', target: o, wt: 0.25 * (rx(VENG, p) ? 2 : 1) * r.rival / 60 });
        if (r.like >= 50 && r.love < 50 && !free(w, o) && pairOk(w, id, o, s) && !w.people[o].flags.safe) opts.push({ t: 'win', target: o, wt: 0.06 * (rx(AMBI, p) || rx(VENG, p) ? 1.5 : 1) });
      });
      if (rx(AMBI, p)) opts.push({ t: 'rise', target: null, wt: 0.2 });
      for (var i = 0; i < opts.length; i++) {
        var o = opts[i];
        if (rnd() >= chance(o.wt, d, mult)) continue;
        startGoal(w, id, o.t, o.target, push);
        return;
      }
    });
  }
  function startGoal(w, owner, t, target, push) {
    var g = { id: uid('g'), owner: owner, t: t, target: target || null, mate: null, pr: 0, day: w.clock.day, end: null, ev: '' };
    w.goals.push(g);
    var ev = newEv(w, 'plot', owner, target || null, 'secret');
    ev.v.g = t;
    g.ev = ev.id;
    addSecret(w, [owner], { ev: ev.id, known: [owner], stake: t === 'revenge' || t === 'win' ? 3 : 1 });
    if (push) push(ev); else w.events.push(ev);
    return g;
  }
  function stepGoals(w, d, s, rnd, mult, ex, push) {
    var f = d / STEP;
    w.goals.forEach(function (g) {
      if (g.end) return;
      var O = w.people[g.owner], T = g.target && w.people[g.target];
      if (!O || !O.alive || (g.target && (!T || !T.alive))) { g.end = 'gone'; return; }
      if (ex.indexOf(g.owner) >= 0) return;
      if (g.t === 'match' && !free(w, g.target)) { g.end = 'moot'; return; }
      if (g.t === 'win' && free(w, g.target)) { g.end = 'moot'; return; }
      g.pr = Math.min(100, g.pr + Math.round((8 + rnd() * 14) * f * mult));
      if (g.pr < 100) return;
      /* замыслы против главных героев за кадром не развязываются: их доиграет сюжет */
      if (g.target && (T.flags.char || T.flags.player)) return;
      var ok = rnd() >= 0.25, ev = null;
      if (!ok) { ev = newEv(w, 'plotfail', g.owner, g.target, 'rumor'); ev.v.g = g.t; g.end = 'fail'; }
      else if (g.t === 'match') {
        var m = suitor(w, g.target, s, rnd);
        if (!m) { g.end = 'fail'; ev = newEv(w, 'plotfail', g.owner, g.target, 'rumor'); ev.v.g = g.t; }
        else {
          addKin(w, g.target, m, 'betrothed');
          var r = relOf(w, g.target, m, true); r.since = w.clock.day; r.like = Math.max(r.like, 5);
          ev = newEv(w, 'arranged', g.target, m, 'public'); ev.v.by = g.owner; ev.known.push(g.owner); g.mate = m; g.end = 'done';
        }
      } else if (g.t === 'revenge') {
        var sec = w.secrets.filter(function (x) { return !x.out && x.about.indexOf(g.target) >= 0 && x.known.indexOf(g.owner) >= 0; })[0];
        if (sec) { ev = scandal(w, sec, g.owner); }
        else {
          ev = newEv(w, 'revenge', g.owner, g.target, 'rumor');
          var rr = relOf(w, g.owner, g.target, true); rr.rival = Math.max(0, rr.rival - 30);
          Object.keys(w.people).forEach(function (o) { if (o !== g.target && near(w, o, g.target)) { var q = relOf(w, o, g.target, true); q.like -= 10; clampRel(q); } });
        }
        g.end = 'done';
      } else if (g.t === 'rise') {
        ev = newEv(w, 'rise', g.owner, null, 'public'); g.end = 'done';
      } else if (g.t === 'win') {
        var r2 = relOf(w, g.owner, g.target, true);
        if (rnd() < 0.5) {
          r2.love = 60; r2.affair = true; r2.since = w.clock.day; loveDirty(w);
          ev = newEv(w, 'affair', g.owner, g.target, 'secret');
        } else {
          var sp = spousesOf(w, g.target).concat(partnersOf(w, g.target))[0];
          if (sp) { var r3 = relOf(w, g.target, sp, true); r3.love = Math.max(0, r3.love - 35); r3.rival += 20; clampRel(r3); loveDirty(w); }
          ev = newEv(w, 'sow', g.owner, g.target, 'secret'); ev.v.c = sp || null; ev.known = [g.owner];
        }
        g.end = 'done';
      }
      if (ev) { ev.v.goal = g.id; push(ev); }
    });
  }
  /* Скандал: тайна всплыла. Возвращает публичное событие. */
  function scandal(w, x, by) {
    x.out = true;
    var ev = newEv(w, 'scandal', by || x.about[0], x.about[0] === by ? x.about[1] || null : x.about[0], 'public');
    ev.v.s = x.id;
    ev.known = Object.keys(w.people).filter(function (id) { return w.people[id].alive && (x.about.indexOf(id) >= 0 || (by && (near(w, id, by) || near(w, id, x.about[0])))); });
    if (by && ev.known.indexOf(by) < 0) ev.known.push(by);
    x.about.forEach(function (a) {
      if (by && by !== a) { var r = relOf(w, by, a, true); r.rival += 25; r.like -= 20; clampRel(r); }
      spousesOf(w, a).forEach(function (sp) {
        if (x.about.indexOf(sp) >= 0) return;
        var src = x.ev && w.events.filter(function (y) { return y.id === x.ev; })[0];
        if (src && (src.t === 'affair' || (src.t === 'conceive' && !src.v.wed))) { var r2 = relOf(w, a, sp, true); r2.love = Math.max(0, r2.love - 50); r2.rival += 40; clampRel(r2); }
      });
    });
    var src2 = x.ev && w.events.filter(function (y) { return y.id === x.ev; })[0];
    if (src2) { src2.pub = 'public'; }
    loveDirty(w);
    return ev;
  }
  /* Тайны живут: их узнают, ими шантажируют, они всплывают */
  function stepSecrets(w, d, s, rnd, mult, ex, push) {
    var C = contacts(w), f = d / STEP, ms = mains(w);
    w.secrets.forEach(function (x) {
      if (x.out) return;
      /* узнать: близкие к участникам; когда знают четверо посторонних — тайна ждёт скандала */
      var outsiders = x.known.filter(function (k) { return x.about.indexOf(k) < 0; }).length;
      var plot = x.ev && (w.events.filter(function (y) { return y.id === x.ev; })[0] || {}).t === 'plot';
      if (outsiders < 4) x.about.forEach(function (a) {
        Object.keys(C[a] || {}).forEach(function (c) {
          if (x.known.indexOf(c) >= 0 || ms.indexOf(c) >= 0 || ex.indexOf(c) >= 0) return;
          var p = w.people[c];
          if (rnd() < 0.008 * (C[a][c] >= 0.8 ? 1 : 0.25) * (plot ? 0.5 : 1) * gossip(p) * f * mult) {
            learn(w, x, c, null);
            var ev = newEv(w, 'discover', c, a, 'secret'); ev.v.s = x.id; ev.known = [c];
            push(ev);
            spousesOf(w, a).forEach(function (sp) { if (sp === c && x.about.indexOf(c) < 0) { var r = relOf(w, a, c, true); r.love = Math.max(0, r.love - 40); r.rival += 30; clampRel(r); loveDirty(w); } });
          }
        });
      });
      ms.forEach(function (m) {
        if (x.known.indexOf(m) >= 0) return;
        x.known.forEach(function (k) {
          if (x.known.indexOf(m) >= 0 || !C[m] || !C[m][k] || x.about.indexOf(m) >= 0) return;
          if (rnd() < 0.04 * C[m][k] * gossip(w.people[k]) * f * mult) learn(w, x, m, k);
        });
      });
      /* шантаж и разоблачение — от тех, кто знает и не участвует */
      x.known.forEach(function (k) {
        if (x.out || x.about.indexOf(k) >= 0 || ms.indexOf(k) >= 0 || ex.indexOf(k) >= 0) return;
        var p = w.people[k];
        if (!p || !p.alive || p.flags.safe) return;
        var hate = Math.max.apply(null, x.about.map(function (a) { return relOf(w, k, a).rival; }));
        var fond = Math.max.apply(null, x.about.map(function (a) { return relOf(w, k, a).like; }));
        var pBlack = (GREED.test(p.traits.join(' ').toLowerCase()) ? 0.4 : 0.05) + (hate >= 20 ? 0.15 : 0);
        var pOut = (hate >= 40 ? 0.2 : 0.02) * (gossip(p) > 1 ? 2.5 : gossip(p) < 1 ? 0.3 : 1) * (traitsOf(w).modern ? 1.5 : 1) * (fond >= 50 ? 0.2 : 1);
        if (rnd() < chance(pOut, d, mult)) { push(scandal(w, x, k)); return; }
        x.bm = x.bm || [];
        if (x.bm.indexOf(k) < 0 && rnd() < chance(pBlack, d, mult)) {
          x.bm.push(k);
          var victim = x.about[0];
          var ev = newEv(w, 'blackmail', k, victim, 'secret'); ev.v.s = x.id;
          var r = relOf(w, k, victim, true); r.rival += 20; r.like -= 30; clampRel(r);
          push(ev);
        }
      });
    });
  }
  /* Ручная тайна: about — о ком, known — кто знает (по умолчанию сами участники) */
  function newSecret(w, about, text, known) { return addSecret(w, about, { text: text, known: known || about, stake: 2 }); }

  /* Справочник событий. rate — в год; cat — категория в настройках; safe — можно и «не трогать» */
  var ONE = [
    { t: 'job', cat: 'career', rate: 0.1, safe: 1, ok: function (w, p) { return adult(p) && (p.age == null || p.age < 70); }, pub: 'rumor' },
    { t: 'move', cat: 'career', rate: 0.04, safe: 1, ok: function (w, p) { return adult(p) && allPlaces(w).filter(function (x) { return x !== p.role.place; }).length > 0; }, pub: 'rumor',
      fx: function (w, p, ev, rnd) { var pl = allPlaces(w).filter(function (x) { return x !== p.role.place; }); ev.v.from = p.role.place; ev.v.to = pl[Math.floor(rnd() * pl.length)]; p.role.place = ev.v.to; } },
    { t: 'rich', cat: 'fortune', rate: 0.03, safe: 1, ok: function (w, p) { return adult(p); }, pub: 'rumor' },
    { t: 'poor', cat: 'fortune', rate: 0.03, safe: 1, ok: function (w, p) { return adult(p); }, pub: 'rumor' },
    { t: 'ill', cat: 'health', rate: 0.06, ok: function (w, p) { return !p.ill; }, pub: 'rumor', fx: function (w, p) { p.ill = true; } },
    { t: 'heal', cat: 'health', rate: 2, safe: 1, ok: function (w, p) { return p.ill; }, pub: 'rumor', fx: function (w, p) { p.ill = false; } },
    { t: 'death', cat: 'death', rate: function (w, p) { return p.ill ? 0.5 : p.age != null && p.age >= 60 ? 0.02 * (p.age - 55) / 5 : 0.003; }, ok: function () { return true; }, pub: 'public',
      fx: function (w, p) { p.alive = false; p.ill = false; } },
    { t: 'contest', cat: 'career', rate: 0.12, safe: 1, pub: 'public', ok: function (w, p) { return adult(p) && (p.age == null || p.age < 45) && !p.flags.away; } },
    { t: 'withdraw', cat: 'drama', rate: function (w, p) { return w.events.some(function (e) { return (e.t === 'breakup' || e.t === 'scandal') && (e.a === p.id || e.b === p.id) && w.clock.day - e.day < 180; }) ? 0.25 : 0.004; },
      pub: 'public', ok: function (w, p) { return adult(p) && free(w, p.id) && !p.flags.away; }, fx: function (w, p) { p.flags.away = true; p.flags.nodir = true; } },
    { t: 'debut', need: function (t) { return t.nobility && !t.modern; }, cat: 'romance', rate: 0.8, safe: 1, pub: 'public', ok: function (w, p) { return p.sex === 'f' && p.age != null && p.age >= 16 && p.age <= 19 && free(w, p.id) && !w.events.some(function (e) { return e.t === 'debut' && e.a === p.id; }); },
      fx: function (w, p) { Object.keys(w.people).forEach(function (o) { if (o !== p.id && near(w, o, p.id)) { var r = relOf(w, o, p.id, true); r.like += 10; clampRel(r); } }); } },
    { t: 'inherit', cat: 'fortune', rate: 0.02, safe: 1, pub: 'rumor', ok: function (w, p) { return adult(p); } },
    { t: 'fame', cat: 'career', rate: 0.04, safe: 1, pub: 'public', ok: function (w, p) { return adult(p) && (p.age == null || p.age < 55) && !p.flags.away; } },
    { t: 'journey', cat: 'career', rate: 0.05, pub: 'public', ok: function (w, p) { return adult(p) && !p.flags.away && (p.age == null || p.age < 60); }, fx: function (w, p) { p.flags.away = true; } },
    { t: 'return', cat: 'career', rate: 1.2, safe: 1, pub: 'public', ok: function (w, p) { return p.flags.away && w.events.filter(function (e) { return e.a === p.id && (e.t === 'journey' || e.t === 'withdraw'); }).pop() && w.events.filter(function (e) { return e.a === p.id && (e.t === 'journey' || e.t === 'withdraw'); }).pop().t === 'journey'; },
      fx: function (w, p) { p.flags.away = false; } },
    { t: 'curse', need: function (t) { return t.magic; }, cat: 'health', rate: 0.02, pub: 'rumor', ok: function (w, p) { return !p.ill; }, fx: function (w, p) { p.ill = true; } }
  ];
  var TWO = [
    { t: 'meet', cat: 'social', rate: function (w, a, b) { return near(w, a, b) ? 0.3 : 0.02; }, safe: 1, minor: 1, pub: 'rumor',
      ok: function (w, a, b, r) { return r.like === 0 && r.love === 0 && r.rival === 0 && !linkVia(w, a, b) && !edge(w, a, b, 'sibling'); },
      fx: function (w, a, b, r, ev, rnd) { r.like += 20 + Math.floor(rnd() * 20); } },
    { t: 'quarrel', cat: 'drama', rate: 0.06, pub: 'rumor', ok: function (w, a, b, r) { return r.like >= 10 || linkVia(w, a, b) || relate(w, a, b).length; },
      fx: function (w, a, b, r) { r.like -= 30; r.rival += 25; } },
    { t: 'feud', cat: 'drama', rate: 0.3, pub: 'rumor', ok: function (w, a, b, r) { return r.rival >= 40 && !r.feud; }, fx: function (w, a, b, r) { r.rival += 30; r.feud = true; } },
    { t: 'reconcile', cat: 'drama', rate: 0.15, pub: 'rumor', ok: function (w, a, b, r) { return r.rival >= 20; }, fx: function (w, a, b, r) { r.rival -= 40; r.like += 25; r.feud = false; } },
    { t: 'date', cat: 'romance', pub: 'rumor', rate: function (w, a, b, r) { return (0.025 + Math.max(0, r.like) / 500) * (near(w, a, b) ? 2 : 1); },
      ok: function (w, a, b, r, s) { return pairOk(w, a, b, s) && free(w, a) && free(w, b); },
      fx: function (w, a, b, r) { r.love = 60; r.like += 10; r.since = w.clock.day; } },
    { t: 'affair', cat: 'romance', also: 'drama', pub: 'secret', rate: function (w, a, b) { return near(w, a, b) ? 0.02 : 0.006; },
      ok: function (w, a, b, r, s) {
        if (!pairOk(w, a, b, s) || married(w, a, b) || r.love >= 50) return false;
        var ma = spousesOf(w, a).length, mb = spousesOf(w, b).length;
        return (ma || mb) && !partnersOf(w, a).length && !partnersOf(w, b).length;
      },
      fx: function (w, a, b, r) { r.love = 60; r.affair = true; r.since = w.clock.day; } },
    { t: 'breakup', cat: 'romance', pub: 'rumor', rate: function (w, a, b, r) { return r.affair ? 0.5 : 0.3; },
      ok: function (w, a, b, r) { return r.love >= 50 && !married(w, a, b) && !edge(w, a, b, 'betrothed'); },
      fx: function (w, a, b, r) { r.love = 0; r.like -= 20; r.affair = false; } },
    { t: 'engage', cat: 'family', rate: 0.7, pub: 'public',
      ok: function (w, a, b, r) { return r.love >= 50 && !r.affair && w.clock.day - (r.since || 0) >= 60 && free2(w, a, b); },
      fx: function (w, a, b, r) { addKin(w, a, b, 'betrothed'); r.since = w.clock.day; } },
    { t: 'marry', cat: 'family', rate: 2.5, pub: 'public',
      ok: function (w, a, b, r) { return !!edge(w, a, b, 'betrothed') && w.clock.day - (r.since || 0) >= 30; },
      fx: function (w, a, b, r) { addKin(w, a, b, 'spouse'); r.love = Math.max(r.love, 60); } },
    { t: 'divorce', cat: 'family', also: 'drama', rate: 0.15, pub: 'public',
      ok: function (w, a, b, r) { return married(w, a, b) && (r.love < 30 || r.rival >= 30 || partnersOf(w, a).length || partnersOf(w, b).length); },
      fx: function (w, a, b, r) { addKin(w, a, b, 'spouse', { ex: true }); r.love = 0; } },
    { t: 'duel', need: function (t) { return t.nobility && !t.modern; }, cat: 'drama', rate: 0.3, pub: 'public',
      ok: function (w, a, b, r) { return r.rival >= 50 && w.people[a].sex !== 'f' && w.people[b].sex !== 'f' && adult(w.people[a]) && adult(w.people[b]); },
      fx: function (w, a, b, r, ev, rnd, s) {
        var lose = rnd() < 0.5 ? a : b; ev.v.lose = lose; ev.v.win = lose === a ? b : a;
        if (s && s.cats.death && rnd() < 0.25) { w.people[lose].alive = false; ev.v.dead = true; } else w.people[lose].ill = true;
        r.rival = Math.max(0, r.rival - 40);
      } },
    { t: 'compromise', need: function (t) { return t.nobility && !t.modern; }, cat: 'romance', also: 'family', rate: 0.05, pub: 'public',
      ok: function (w, a, b, r, s) { return pairOk(w, a, b, { pairs: 'mf' }) && free(w, a) && free(w, b) && near(w, a, b); },
      fx: function (w, a, b, r) { addKin(w, a, b, 'betrothed'); r.since = w.clock.day; r.love = Math.max(r.love, 30); } },
    { t: 'elope', cat: 'family', rate: 0.08, pub: 'rumor',
      ok: function (w, a, b, r) { return r.love >= 50 && !r.affair && free2(w, a, b) && !edge(w, a, b, 'betrothed') && w.clock.day - (r.since || 0) >= 90; },
      fx: function (w, a, b, r) { addKin(w, a, b, 'spouse'); } },
    { t: 'poison', cat: 'intrigue', also: 'health', rate: 0.12, pub: 'secret',
      ok: function (w, a, b, r) { return r.rival >= 70 && !w.people[b].ill; },
      fx: function (w, a, b, r, ev, rnd) { if (rnd() < 0.5) { var t = a; a = b; b = t; ev.a = a; ev.b = b; } w.people[b].ill = true; ev.known = [a]; } },
    { t: 'conceive', cat: 'family', rate: function (w, a, b) { return married(w, a, b) ? 0.3 : 0.08; },
      ok: function (w, a, b, r) {
        var A = w.people[a], B = w.people[b];
        if (!((A.sex === 'f' && B.sex === 'm') || (A.sex === 'm' && B.sex === 'f'))) return false;
        var mom = A.sex === 'f' ? A : B;
        if (mom.age != null && (mom.age < 16 || mom.age > 45)) return false;
        if ((w.pending || []).some(function (x) { return x.mother === mom.id; })) return false;
        if (w.events.some(function (e) { return e.t === 'birth' && e.a === mom.id && w.clock.day - e.day < 180; })) return false;
        return married(w, a, b) || r.love >= 50;
      },
      fx: function (w, a, b, r, ev) {
        var mom = w.people[a].sex === 'f' ? a : b, dad = mom === a ? b : a, wed = married(w, a, b);
        ev.a = mom; ev.b = dad; ev.pub = wed ? 'rumor' : 'secret';
        w.pending.push({ mother: mom, father: dad, due: w.clock.day + 270, wed: wed, ev: ev.id });
      } }
  ];
  function free2(w, a, b) { return !spousesOf(w, a).length && !spousesOf(w, b).length; }
  function pairOk(w, a, b, s) {
    var A = w.people[a], B = w.people[b];
    if (!adult(A) || !adult(B) || blood(w, a, b)) return false;
    if (A.age != null && B.age != null && Math.abs(A.age - B.age) > 15) return false;
    if (s.pairs === 'mf' && !((A.sex === 'f' && B.sex === 'm') || (A.sex === 'm' && B.sex === 'f'))) return false;
    return true;
  }
  function catOn(s, d) { return (d.cat === 'social' || s.cats[d.cat]) && (!d.also || s.cats[d.also]); }
  function chance(rate, days, mult) { return 1 - Math.pow(1 - Math.min(0.95, rate * mult), days / YEAR); }
  function newEv(w, t, a, b, pub, minor) {
    var ev = { id: uid('e'), day: w.clock.day, t: t, a: a || null, b: b || null, v: {}, pub: pub, minor: !!minor, known: [], heard: {} };
    if (a) ev.known.push(a);
    if (b && b !== a) ev.known.push(b);
    return ev;
  }
  /* Кто с кем общается: {id: {other: вес}} */
  function contacts(w) {
    var ids = Object.keys(w.people).filter(function (id) { return w.people[id].alive; }), out = {};
    ids.forEach(function (id) { out[id] = {}; });
    function link(a, b, wt) { if (a === b || !out[a] || !out[b]) return; out[a][b] = Math.max(out[a][b] || 0, wt); out[b][a] = Math.max(out[b][a] || 0, wt); }
    w.kin.forEach(function (e) { if (!(e.t === 'spouse' && e.ex)) link(e.a, e.b, 1); });
    ids.forEach(function (a) { siblingsOf(w, a).forEach(function (b) { link(a, b, 1); }); });
    Object.keys(w.rel || {}).forEach(function (k) { var q = k.split('|'), r = w.rel[k]; if (r.like >= 20 || r.love >= 50) link(q[0], q[1], 1); else if (r.like > 0) link(q[0], q[1], 0.5); });
    for (var i = 0; i < ids.length; i++) for (var j = i + 1; j < ids.length; j++) {
      var p = w.people[ids[i]], q = w.people[ids[j]];
      if (p.house && p.house === q.house) link(ids[i], ids[j], 0.8);
      else if (p.role.place && p.role.place === q.role.place) link(ids[i], ids[j], 0.4);
    }
    return out;
  }
  var SPREAD = { public: 0.6, rumor: 0.3, secret: 0.03 }, TOWN = { public: 0.35, rumor: 0.1, secret: 0 };
  function gossip(p) { var t = p.traits.join(' ').toLowerCase(); return /сплет|болтл|gossip|chatter|八卦/.test(t) ? 2 : /скрыт|молчал|secretive|silent|沉默/.test(t) ? 0.4 : 1; }
  function spread(w, days, rnd) {
    var C = contacts(w), ms = mains(w), f = Math.min(1, days / STEP);
    w.events.forEach(function (e) {
      if (w.clock.day - e.day > YEAR || e.minor || e.pub === 'secret') return;
      var newly = [];
      e.known.forEach(function (k) {
        var p = w.people[k];
        if (!p || !C[k]) return;
        Object.keys(C[k]).forEach(function (c) {
          if (e.known.indexOf(c) >= 0 || newly.some(function (x) { return x.c === c; })) return;
          if (rnd() < SPREAD[e.pub] * C[k][c] * gossip(p) * f) newly.push({ c: c, by: k });
        });
      });
      ms.forEach(function (m) {
        if (e.known.indexOf(m) >= 0 || newly.some(function (x) { return x.c === m; })) return;
        if (rnd() < TOWN[e.pub] * f) newly.push({ c: m, by: null });
      });
      newly.forEach(function (x) {
        e.known.push(x.c);
        if (ms.indexOf(x.c) >= 0) e.heard[x.c] = { by: x.by, day: w.clock.day };
      });
    });
  }
  /* Прожить дни. opt: {settings, exclude: [id] (кто в сцене), rnd}. Возвращает новые события. */
  function tick(w, days, opt) {
    opt = opt || {};
    var s = settings(opt.settings), rnd = opt.rnd || Math.random, mult = PACE[s.pace], TR = traitsOf(w);
    var ms = mains(w), ex = (opt.exclude || []).concat(ms), out = [];
    w.pending = w.pending || []; w.events = w.events || []; w.rel = w.rel || {};
    w.secrets = w.secrets || []; w.goals = w.goals || [];
    function push(ev) {
      w.events.push(ev); out.push(ev);
      if (ev.pub === 'secret' && ev.t !== 'plot' && ev.t !== 'discover' && ev.t !== 'blackmail' && !secretOf(w, ev.id)) addSecret(w, [ev.a, ev.b].filter(Boolean), { ev: ev.id, known: ev.known.slice(), stake: ev.t === 'poison' || ev.t === 'affair' ? 3 : 2 });
    }
    var left = Math.max(1, Math.round(days));
    while (left > 0) {
      var d = Math.min(STEP, left); left -= d;
      var y0 = Math.floor(w.clock.day / YEAR);
      w.clock.day += d;
      var dy = Math.floor(w.clock.day / YEAR) - y0;
      if (dy > 0) Object.keys(w.people).forEach(function (id) { var p = w.people[id]; if (p.alive && p.age != null) p.age += dy; });
      /* роды */
      w.pending = w.pending.filter(function (pb) {
        if (pb.due > w.clock.day) return true;
        var mom = w.people[pb.mother];
        if (!mom) return false;
        var sex = rnd() < 0.5 ? 'f' : 'm', dad = w.people[pb.father] ? pb.father : null;
        var house = (pb.wed && dad && w.people[dad].house) || mom.house || '';
        var kid = addPerson(w, { name: babyName(w, pb.mother, sex, rnd), sex: sex, age: 0, house: house, role: { place: mom.role.place } });
        addKin(w, pb.mother, kid, 'parent', { ill: !pb.wed });
        if (dad) addKin(w, dad, kid, 'parent', { ill: !pb.wed });
        var ev = newEv(w, 'birth', pb.mother, dad, pb.wed ? 'public' : 'rumor');
        ev.v.child = kid; ev.v.wed = !!pb.wed;
        push(ev);
        return false;
      });
      var alive = Object.keys(w.people).filter(function (id) { return w.people[id].alive && ex.indexOf(id) < 0; });
      /* одиночные */
      alive.forEach(function (id) {
        var p = w.people[id];
        for (var i = 0; i < ONE.length; i++) {
          var D = ONE[i];
          if (D.need && !D.need(TR)) continue;
          if (!catOn(s, D) || (p.flags.safe && !D.safe) || !p.alive || !D.ok(w, p)) continue;
          var r = typeof D.rate === 'function' ? D.rate(w, p) : D.rate;
          if (rnd() >= chance(r, d, D.t === 'heal' || D.t === 'death' ? 1 : mult)) continue;
          var ev = newEv(w, D.t, id, null, D.pub);
          if (D.fx) D.fx(w, p, ev, rnd);
          push(ev);
          break;
        }
      });
      /* пары: одно событие на пару за шаг */
      for (var i = 0; i < alive.length; i++) for (var j = i + 1; j < alive.length; j++) {
        var a = alive[i], b = alive[j];
        if (!w.people[a].alive || !w.people[b].alive) continue;
        var safe = w.people[a].flags.safe || w.people[b].flags.safe;
        var r = relOf(w, a, b);
        for (var k = 0; k < TWO.length; k++) {
          var D = TWO[k];
          if (D.need && !D.need(TR)) continue;
          if (!catOn(s, D) || (safe && !D.safe)) continue;
          if (!D.ok(w, a, b, r, s)) continue;
          var rt = typeof D.rate === 'function' ? D.rate(w, a, b, r) : D.rate;
          if (rnd() >= chance(rt, d, mult)) continue;
          r = relOf(w, a, b, true);
          var ev = newEv(w, D.t, a, b, D.pub, D.minor);
          if (D.fx) D.fx(w, a, b, r, ev, rnd, s);
          clampRel(r);
          loveDirty(w);
          push(ev);
          break;
        }
      }
      if (s.cats.intrigue) {
        stepSecrets(w, d, s, rnd, mult, ex, push);
        stepGoals(w, d, s, rnd, mult, ex, push);
        adoptGoals(w, alive.filter(function (id) { return w.people[id].alive; }), d, s, rnd, mult, push);
      }
      spread(w, d, rnd);
    }
    if (w.events.length > EV_MAX) w.events = w.events.slice(-EV_MAX);
    return out;
  }

  /* ── тексты событий ── */
  function gs(w, id, m, f, x) { var s = (w.people[id] && w.people[id].sex) || 'x'; return s === 'm' ? m : s === 'f' ? f : x; }
  var EVT = {
    ru: function (w, e, n) {
      var a = n(e.a), b = n(e.b), A = e.a;
      switch (e.t) {
        case 'job': return a + gs(w, A, ' получил новую должность', ' получила новую должность', ' получил(а) новую должность');
        case 'move': return a + gs(w, A, ' переехал', ' переехала', ' переехал(а)') + ' (теперь — ' + (e.v.to || '?') + ')';
        case 'rich': return a + gs(w, A, ' разбогател', ' разбогатела', ' разбогател(а)');
        case 'poor': return a + gs(w, A, ' разорился', ' разорилась', ' разорился(ась)');
        case 'ill': return a + gs(w, A, ' тяжело заболел', ' тяжело заболела', ' тяжело заболел(а)');
        case 'heal': return a + gs(w, A, ' поправился', ' поправилась', ' поправился(ась)');
        case 'death': return a + gs(w, A, ' умер', ' умерла', ' умер(ла)');
        case 'meet': return a + ' и ' + b + ' познакомились';
        case 'quarrel': return a + ' и ' + b + ' крупно поссорились';
        case 'feud': return a + ' и ' + b + ' стали врагами';
        case 'reconcile': return a + ' и ' + b + ' помирились';
        case 'date': return a + ' и ' + b + ' начали встречаться';
        case 'affair': return a + ' и ' + b + ' тайно сблизились';
        case 'breakup': return a + ' и ' + b + ' расстались';
        case 'engage': return a + ' и ' + b + ' обручились';
        case 'marry': return a + ' и ' + b + ' поженились';
        case 'divorce': return a + ' и ' + b + ' развелись';
        case 'conceive': return a + ' ждёт ребёнка' + (e.b ? ' от ' + b : '');
        case 'act': return ({ talk: a + ' и ' + b + ' долго говорили', charm: a + ' получил' + gs(w, A, '', 'а', '(а)') + ' отказ: ' + b, confess: a + ' признал' + gs(w, A, 'ся', 'ась', 'ся(ась)') + ' в чувствах и получил' + gs(w, A, '', 'а', '(а)') + ' отказ: ' + b, propose: 'Предложение отвергнуто: ' + a + ' → ' + b, letter: a + ' написал' + gs(w, A, '', 'а', '(а)') + ' письмо: ' + b })[e.v.act] || a + ' → ' + b;
        case 'plot': return ({ match: a + ' ищет выгодную партию — для: ' + b, revenge: 'Замысел мести: ' + a + ' → ' + b, rise: a + gs(w, A, ' задумал', ' задумала', ' задумал(а)') + ' возвыситься', win: a + ' добивается: ' + b })[e.v.g] || a + ' что-то замышляет';
        case 'plotfail': return 'Замысел провалился: ' + a + (e.b ? ' → ' + b : '');
        case 'arranged': return 'Договорная помолвка: ' + a + ' и ' + b + (e.v.by ? ' (устроил' + gs(w, e.v.by, '', 'а', '(а)') + ' ' + n(e.v.by) + ')' : '');
        case 'revenge': return 'Месть свершилась: ' + a + ' → ' + b;
        case 'rise': return a + gs(w, A, ' добился', ' добилась', ' добился(ась)') + ' высокого положения';
        case 'sow': return a + ' посеял' + gs(w, A, '', 'а', '(а)') + ' раздор в паре: ' + b + (e.v.c ? ' и ' + n(e.v.c) : '');
        case 'discover': return a + gs(w, A, ' узнал', ' узнала', ' узнал(а)') + ' тайну: ' + secretText(w, secretById(w, e.v.s), 'ru');
        case 'blackmail': return 'Шантаж: ' + a + ' → ' + b;
        case 'scandal': return 'Скандал! Всплыло: ' + secretText(w, secretById(w, e.v.s), 'ru');
        case 'contest': return a + gs(w, A, ' победил', ' победила', ' победил(а)') + ' в состязании';
        case 'withdraw': return a + gs(w, A, ' ушёл', ' ушла', ' ушёл(ла)') + ' от мира';
        case 'debut': return a + ' впервые вышла в свет';
        case 'inherit': return a + gs(w, A, ' получил', ' получила', ' получил(а)') + ' наследство';
        case 'fame': return a + gs(w, A, ' прославился', ' прославилась', ' прославился(ась)');
        case 'journey': return a + gs(w, A, ' отправился', ' отправилась', ' отправился(ась)') + ' в дальнюю дорогу';
        case 'return': return a + gs(w, A, ' вернулся', ' вернулась', ' вернулся(ась)') + ' из дальней дороги';
        case 'curse': return a + gs(w, A, ' проклят', ' проклята', ' проклят(а)');
        case 'duel': return 'Поединок: ' + a + ' и ' + b + '. ' + n(e.v.lose) + (e.v.dead ? gs(w, e.v.lose, ' убит', ' убита', ' убит(а)') : gs(w, e.v.lose, ' ранен', ' ранена', ' ранен(а)'));
        case 'compromise': return 'Скандал в свете: ' + a + ' и ' + b + ' — вынужденная помолвка';
        case 'elope': return a + ' и ' + b + ' тайно поженились';
        case 'poison': return 'Отравление: ' + a + ' → ' + b;
        case 'birth': return 'У ' + a + (e.b ? ' и ' + b : '') + gs(w, e.v.child, ' родился сын', ' родилась дочь', ' родился ребёнок') + ' — ' + n(e.v.child);
      }
      return e.t;
    },
    en: function (w, e, n) {
      var a = n(e.a), b = n(e.b);
      switch (e.t) {
        case 'job': return a + ' got a new position';
        case 'move': return a + ' moved to ' + (e.v.to || '?');
        case 'rich': return a + ' came into a fortune';
        case 'poor': return a + ' was ruined';
        case 'ill': return a + ' fell gravely ill';
        case 'heal': return a + ' recovered';
        case 'death': return a + ' died';
        case 'meet': return a + ' and ' + b + ' met';
        case 'quarrel': return a + ' and ' + b + ' had a bad falling-out';
        case 'feud': return a + ' and ' + b + ' became enemies';
        case 'reconcile': return a + ' and ' + b + ' made peace';
        case 'date': return a + ' and ' + b + ' started seeing each other';
        case 'affair': return a + ' and ' + b + ' began a secret affair';
        case 'breakup': return a + ' and ' + b + ' broke up';
        case 'engage': return a + ' and ' + b + ' got engaged';
        case 'marry': return a + ' and ' + b + ' got married';
        case 'divorce': return a + ' and ' + b + ' divorced';
        case 'conceive': return a + ' is expecting a child' + (e.b ? ' by ' + b : '');
        case 'act': return ({ talk: a + ' and ' + b + ' had a long talk', charm: a + ' was turned down by ' + b, confess: a + ' confessed to ' + b + ' and was turned down', propose: b + ' turned down ' + a + '’s proposal', letter: a + ' wrote a letter to ' + b })[e.v.act] || a + ' → ' + b;
        case 'plot': return ({ match: a + ' is seeking an advantageous match for ' + b, revenge: a + ' is plotting revenge on ' + b, rise: a + ' is scheming to rise higher', win: a + ' has set out to win ' + b })[e.v.g] || a + ' is scheming';
        case 'plotfail': return a + '’s scheme' + (e.b ? ' against ' + b : '') + ' failed';
        case 'arranged': return 'Arranged betrothal: ' + a + ' and ' + b + (e.v.by ? ' (arranged by ' + n(e.v.by) + ')' : '');
        case 'revenge': return a + ' took revenge on ' + b;
        case 'rise': return a + ' rose to a high position';
        case 'sow': return a + ' sowed discord between ' + b + (e.v.c ? ' and ' + n(e.v.c) : ' and their partner');
        case 'discover': return a + ' discovered a secret: ' + secretText(w, secretById(w, e.v.s), 'en');
        case 'blackmail': return a + ' is blackmailing ' + b;
        case 'scandal': return 'Scandal! It came out that ' + secretText(w, secretById(w, e.v.s), 'en');
        case 'contest': return a + ' won a contest';
        case 'withdraw': return a + ' withdrew from the world';
        case 'debut': return a + ' made a debut in society';
        case 'inherit': return a + ' came into an inheritance';
        case 'fame': return a + ' became famous';
        case 'journey': return a + ' set off on a long journey';
        case 'return': return a + ' returned from a long journey';
        case 'curse': return a + ' was cursed';
        case 'duel': return 'Duel between ' + a + ' and ' + b + ': ' + n(e.v.lose) + (e.v.dead ? ' was killed' : ' was wounded');
        case 'compromise': return 'Society scandal: ' + a + ' and ' + b + ' were compromised and are now engaged';
        case 'elope': return a + ' and ' + b + ' married in secret';
        case 'poison': return a + ' poisoned ' + b;
        case 'birth': return a + (e.b ? ' and ' + b : '') + ' had a ' + gs(w, e.v.child, 'son', 'daughter', 'child') + ', ' + n(e.v.child) + (e.v.wed === false ? ' (born out of wedlock)' : '');
      }
      return e.t;
    },
    'zh-CN': function (w, e, n) {
      var a = n(e.a), b = n(e.b);
      switch (e.t) {
        case 'job': return a + '获得了新职位';
        case 'move': return a + '搬到了' + (e.v.to || '?');
        case 'rich': return a + '发了财';
        case 'poor': return a + '破产了';
        case 'ill': return a + '病重';
        case 'heal': return a + '康复了';
        case 'death': return a + '去世了';
        case 'meet': return a + '和' + b + '相识了';
        case 'quarrel': return a + '和' + b + '大吵了一架';
        case 'feud': return a + '和' + b + '结下了仇';
        case 'reconcile': return a + '和' + b + '和好了';
        case 'date': return a + '和' + b + '开始交往';
        case 'affair': return a + '和' + b + '暗中走到了一起';
        case 'breakup': return a + '和' + b + '分手了';
        case 'engage': return a + '和' + b + '订婚了';
        case 'marry': return a + '和' + b + '结婚了';
        case 'divorce': return a + '和' + b + '离婚了';
        case 'conceive': return a + '怀上了' + (e.b ? b + '的' : '') + '孩子';
        case 'act': return ({ talk: a + '和' + b + '长谈了一番', charm: a + '被' + b + '拒绝了', confess: a + '向' + b + '表白却被拒绝', propose: b + '拒绝了' + a + '的求婚', letter: a + '给' + b + '写了一封信' })[e.v.act] || a + '→' + b;
        case 'plot': return ({ match: a + '在为' + b + '物色好亲事', revenge: a + '在谋划向' + b + '复仇', rise: a + '野心勃勃想往上爬', win: a + '想得到' + b })[e.v.g] || a + '在暗中谋划';
        case 'plotfail': return a + '的计谋失败了';
        case 'arranged': return '包办婚约：' + a + '和' + b + (e.v.by ? '（' + n(e.v.by) + '安排）' : '');
        case 'revenge': return a + '向' + b + '复仇成功';
        case 'rise': return a + '获得了显赫地位';
        case 'sow': return a + '离间了' + b + (e.v.c ? '和' + n(e.v.c) : '和其伴侣');
        case 'discover': return a + '发现了秘密：' + secretText(w, secretById(w, e.v.s), 'zh-CN');
        case 'blackmail': return a + '在要挟' + b;
        case 'scandal': return '丑闻！' + secretText(w, secretById(w, e.v.s), 'zh-CN');
        case 'contest': return a + '在比试中获胜';
        case 'withdraw': return a + '隐退避世';
        case 'debut': return a + '初入社交界';
        case 'inherit': return a + '继承了遗产';
        case 'fame': return a + '声名鹊起';
        case 'journey': return a + '踏上了远行之路';
        case 'return': return a + '远行归来';
        case 'curse': return a + '遭到了诅咒';
        case 'duel': return a + '与' + b + '决斗：' + n(e.v.lose) + (e.v.dead ? '身亡' : '负伤');
        case 'compromise': return '社交丑闻：' + a + '和' + b + '被迫订婚';
        case 'elope': return a + '和' + b + '秘密成婚';
        case 'poison': return a + '毒害了' + b;
        case 'birth': return a + (e.b ? '和' + b : '') + gs(w, e.v.child, '生了个儿子', '生了个女儿', '生了个孩子') + '：' + n(e.v.child);
      }
      return e.t;
    }
  };
  function goalEn(w, g) {
    var t = g.target && w.people[g.target] ? w.people[g.target].name : '';
    return ({ match: 'seeks an advantageous marriage for ' + t, revenge: 'plots revenge on ' + t, rise: 'schemes to rise to power and status', win: 'wants to win ' + t + ', who is taken' })[g.t] || 'scheming';
  }
  function secretById(w, id) { return w.secrets.filter(function (x) { return x.id === id; })[0] || { text: '?' }; }
  function evText(w, e, lang) {
    var f = EVT[lang] || EVT.en;
    return f(w, e, function (id) { return id && w.people[id] ? w.people[id].name : '?'; });
  }
  /* Новости, которые герой уже услышал и ещё не пересказал. told: {eventId: сколько раз уходило модели} */
  function newsFor(w, told, n) {
    told = told || {};
    var ms = mains(w).filter(function (m) { return w.people[m].flags.char; });
    if (!ms.length) ms = mains(w);
    var out = [];
    w.events.forEach(function (e) {
      if (e.minor || (e.v && e.v.onscreen) || (told[e.id] || 0) >= 3) return;
      ms.forEach(function (m) { if (e.heard[m] && w.clock.day - e.heard[m].day <= 90) out.push({ e: e, m: m, h: e.heard[m] }); });
    });
    out.sort(function (x, y) { return (y.h.day - x.h.day) || (y.e.day - x.e.day); });
    var seen = {};
    return out.filter(function (x) { if (seen[x.e.id]) return false; seen[x.e.id] = 1; return true; }).slice(0, n);
  }
  function newsText(w, list) {
    if (!list.length) return '';
    return '[Off-screen news — things that happened while the story looked elsewhere, which the character has recently heard:\n' + list.map(function (x) {
      var who = w.people[x.m].name, by = x.h.by && w.people[x.h.by] ? 'from ' + w.people[x.h.by].name : 'through town gossip';
      return '- ' + who + ' heard ' + by + ' (' + agoEn(w.clock.day - x.h.day) + '): ' + (x.e.v && x.e.v.flavor ? x.e.v.flavor + ' [' + evText(w, x.e, 'en') + ']' : evText(w, x.e, 'en')) + (x.e.pub === 'secret' ? ' — this is a secret' : '') + '.';
    }).join('\n') + '\nLet it surface naturally only when it fits — as gossip, worry, surprise or a passing remark, in character. Do not recite it or dump it all at once.]';
  }
  /* Шаг новостей на один запрос: как у режиссёра, перегенерация повторяет прошлое */
  function newsStep(o) {
    var s = settings(o.settings), w = o.world, st = Object.assign({ told: {}, gen: null }, o.state || {});
    var src = String(o.src || ''), count = o.count == null ? -1 : o.count;
    var regen = /regenerat|swipe/.test(src) || !!(st.gen && count >= 0 && typeof st.gen.count === 'number' && st.gen.count >= 0 && count <= st.gen.count && count >= st.gen.count - 1);
    if (regen) return { add: (st.gen && st.gen.add) || '', state: st, regen: true };
    if (/continu/.test(src) || !s.news) return { add: '', state: st };
    var list = newsFor(w, st.told, s.news);
    list.forEach(function (x) { st.told[x.e.id] = (st.told[x.e.id] || 0) + 1; });
    var ids = {}; w.events.forEach(function (e) { ids[e.id] = 1; });
    Object.keys(st.told).forEach(function (k) { if (!ids[k]) delete st.told[k]; });
    var add = newsText(w, list);
    st.gen = { add: add, count: count };
    return { add: add, state: st, list: list };
  }

  /* ── режиссёр ─────────────────────────────────────────────────────────── */
  var SPEED = { slow: [3, 9], mid: [5, 13], fast: [9, 19] }, LIMIT = 70, LONG = 40, FRESH = 8, COOL = 4;
  var CLOSE = { spouse: 1, exspouse: 1, betrothed: 1, parent: 1, child: 1, sibling: 1 };
  function stems(text) {
    var out = {};
    tokens(text).forEach(function (t) { t = t.toLowerCase(); if (t.length >= 5) out[t.slice(0, 4)] = t; });
    return out;
  }
  function placeHit(place, tk, raw) {
    if (!place) return false;
    return matcher({ name: place, aliases: [] }, { first: false })(tk, raw);
  }
  /* Кого можно ввести в сцену: [{id, score, why:[…]}] по убыванию.
     msgs — последние сообщения (по ним и «давно не было»), сцена — последние s.scan из них.
     recent — кого режиссёр вводил недавно: им штраф. */
  function director(w, msgs, s, pins, recent) {
    s = settings(s); msgs = msgs || []; recent = recent || [];
    var main = mains(w), scene = inScene(w, msgs, s, pins), seen = mentions(w, msgs, s);
    var present = main.concat(scene.filter(function (id) { return main.indexOf(id) < 0; }));
    var raw = msgs.slice(-s.scan).map(msgText).join('\n'), tk = tokens(raw), st = stems(raw);
    var names = present.map(function (o) { return w.people[o].name.toLowerCase().split(/\s+/).filter(function (x) { return !TITLES.test(x); })[0] || ''; }).filter(Boolean);
    var out = [];
    Object.keys(w.people).forEach(function (id) {
      var p = w.people[id];
      if (!p.alive || p.flags.nodir || p.flags.away || main.indexOf(id) >= 0 || scene.indexOf(id) >= 0) return;
      var why = [], sc = 0;
      if (placeHit(p.role.place, tk, raw)) { why.push({ k: 'place', v: p.role.place }); sc += 3; }
      var h = p.house && w.houses[p.house];
      if (h && h.seat && placeHit(h.seat, tk, raw)) { why.push({ k: 'seat', v: h.seat }); sc += 2; }
      var tieSc = 0;
      present.forEach(function (o) {
        if (tieSc >= 5) return;
        var rs = relate(w, o, id);
        if (!rs.length) return;
        var close = rs.some(function (r) { return CLOSE[r.k]; }), far = rs.every(function (r) { return r.k === 'related'; });
        tieSc += close ? 3 : far ? 1 : 2;
        why.push({ k: 'tie', id: o, rs: rs });
      });
      sc += Math.min(tieSc, 5);
      p.threads.forEach(function (t, i) {
        var l = t.toLowerCase(), hit = names.some(function (n) { return n.length >= 3 && l.indexOf(n.slice(0, Math.max(3, n.length - 1))) >= 0; });
        if (i < 2 || hit) { why.push({ k: 'thread', v: t }); sc += hit ? 3 : 1; }
      });
      var ago = seen[id];
      if (p.flags.important && (ago == null || ago >= LONG)) { why.push({ k: 'long', n: ago == null ? null : ago }); sc += 2; }
      if (ago != null && ago < FRESH) sc -= 3;
      var rh = 0;
      [p.role.job, p.role.faction, p.role.title].join(' ').split(/\s+/).forEach(function (wd) {
        var l = wd.toLowerCase();
        if (rh < 2 && l.length >= 5 && st[l.slice(0, 4)]) { why.push({ k: 'role', v: wd }); rh++; sc += 1; }
      });
      (w.goals || []).forEach(function (g) {
        if (g.end || g.owner !== id) return;
        if (g.target && present.indexOf(g.target) >= 0) { why.push({ k: 'goal', g: g.t, id: g.target }); sc += 4; }
        else { why.push({ k: 'goal', g: g.t, id: g.target }); sc += 1; }
      });
      (w.secrets || []).forEach(function (x) {
        if (x.out || x.known.indexOf(id) < 0 || x.about.indexOf(id) >= 0) return;
        var o = x.about.filter(function (a) { return present.indexOf(a) >= 0; })[0];
        if (o) { why.push({ k: 'knows', id: o }); sc += 3; }
      });
      if (recent.indexOf(id) >= 0) sc -= 4;
      if (!why.length || sc <= 0) return;
      out.push({ id: id, score: sc, why: why });
    });
    return out.sort(function (a, b) { return b.score - a.score || w.people[a.id].name.localeCompare(w.people[b.id].name); });
  }
  function whyEn(w, c) {
    var p = w.people[c.id], he = p.sex === 'f' ? 'she' : p.sex === 'm' ? 'he' : 'they', his = p.sex === 'f' ? 'her' : p.sex === 'm' ? 'his' : 'their';
    function nm(x) { return (w.people[x] && w.people[x].name) || '?'; }
    var bits = [];
    (c.why || []).forEach(function (x) {
      if (x.k === 'place') bits.push(he + (he === 'they' ? ' are' : ' is') + ' often at ' + x.v + ', where the scene is');
      else if (x.k === 'seat') bits.push('the scene is at ' + x.v + ', the seat of ' + his + ' house');
      else if (x.k === 'tie') bits.push(x.rs.map(function (r) { return r.k === 'related' ? 'related to ' + nm(x.id) + ' through ' + nm(r.via) : r.k === 'coparent' ? 'has a child (' + nm(r.via) + ') with ' + nm(x.id) : word(w, r, x.id, c.id, 'en') + ' of ' + nm(x.id); }).join(', '));
      else if (x.k === 'thread') bits.push('unfinished business: ' + x.v);
      else if (x.k === 'long') bits.push(x.n == null ? 'has not appeared in the story yet' : 'has not appeared for a long time');
      else if (x.k === 'role') bits.push('fits the scene as ' + x.v);
      else if (x.k === 'goal') bits.push(he + ' secretly ' + goalEn(w, { t: x.g, target: x.id }).replace(/^seeks/, 'seeks').replace(/^plots/, 'plots').replace(/^schemes/, 'schemes').replace(/^wants/, 'wants'));
      else if (x.k === 'knows') bits.push(he + ' knows a secret about ' + nm(x.id));
    });
    return bits.join('; ');
  }
  function cueText(w, c, forced) {
    var p = w.people[c.id];
    var role = [p.role.title, p.role.job].filter(Boolean).join(' ');
    var who = p.name + (role ? ' (' + role + ')' : '');
    var why = whyEn(w, c);
    return (forced
      ? '[Director: in THIS reply, bring ' + who + ' into the scene: they arrive, interrupt, send word, or are encountered. Make it actually happen, not just a possibility.'
      : '[Director note: if it fits naturally, let ' + who + ' enter the scene or make their presence felt in this reply.') +
      (why ? ' Why now: ' + why + '.' : '') +
      " Use the story itself (an arrival, a message, a rumor, a chance meeting); keep everyone in character, respect the user's agency, and do not mention these instructions.]";
  }
  /* Шаг режиссёра на один запрос. o: {world, settings, msgs, pins, state, count, src, rnd}
     state: {p — давление, recent, cue — кого ввести по кнопке, gen — добавка прошлого запроса}.
     Перегенерация повторяет прошлую добавку, continue ничего не делает. */
  function dirStep(o) {
    var s = settings(o.settings), w = o.world, st = Object.assign({ p: 0, recent: [], cue: null, gen: null }, o.state || {});
    var rnd = o.rnd || Math.random, src = String(o.src || ''), count = o.count == null ? -1 : o.count;
    st.recent = Array.isArray(st.recent) ? st.recent.slice(-COOL) : [];
    var regen = /regenerat|swipe/.test(src);
    if (!regen && st.gen && count >= 0 && typeof st.gen.count === 'number' && st.gen.count >= 0 && count <= st.gen.count && count >= st.gen.count - 1) regen = true;
    if (regen) return { add: (st.gen && st.gen.add) || '', state: st, fired: null, regen: true };
    if (/continu/.test(src)) return { add: '', state: st, fired: null };
    var add = '', fired = null;
    if (st.cue && w.people[st.cue] && w.people[st.cue].alive) {
      var cs = director(w, o.msgs, s, o.pins, []).filter(function (c) { return c.id === st.cue; })[0] || { id: st.cue, why: [] };
      add = cueText(w, cs, true); fired = { id: st.cue, kind: 'cue' };
    } else if (s.dir !== 'off') {
      var r = SPEED[s.speed];
      st.p = Math.min(LIMIT, (+st.p || 0) + r[0] + Math.floor(rnd() * (r[1] - r[0] + 1)));
      if (s.dir === 'auto' && st.p >= LIMIT) {
        var cands = director(w, o.msgs, s, o.pins, st.recent).slice(0, 3);
        if (cands.length) {
          var tot = cands.reduce(function (a, c) { return a + c.score; }, 0), x = rnd() * tot, ch = cands[0];
          for (var i = 0; i < cands.length; i++) { x -= cands[i].score; if (x <= 0) { ch = cands[i]; break; } }
          add = cueText(w, ch, false); fired = { id: ch.id, kind: 'auto' };
        }
      }
    }
    st.cue = null;
    if (fired) { st.p = 0; st.recent = st.recent.filter(function (x) { return x !== fired.id; }).concat(fired.id).slice(-COOL); st.last = { id: fired.id, kind: fired.kind }; }
    st.gen = { add: add, count: count };
    return { add: add, state: st, fired: fired };
  }

  /* ══ Сплетница: дополнительная модель. Здесь только промпты, разбор ответов и применение —
     сами запросы делает окно (сеть только там). Вставляется в core.js на место метки. ══ */

  /* Ответ модели → объект. Терпит ```json, текст вокруг и хвостовые запятые. */
  function parseJSON(t) {
    t = String(t == null ? '' : t).replace(/```(?:json)?/gi, '').trim();
    var a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a < 0 || b <= a) return null;
    var s = t.slice(a, b + 1);
    try { return JSON.parse(s); } catch (e) {}
    try { return JSON.parse(s.replace(/,\s*([}\]])/g, '$1')); } catch (e) {}
    return null;
  }
  function chatLang(msgs) {
    var s = (msgs || []).map(msgText).join(' ');
    if (CJK.test(s)) return 'Chinese';
    return (s.match(/[а-яё]/gi) || []).length > (s.match(/[a-z]/gi) || []).length ? 'Russian' : 'English';
  }
  /* Найти человека по имени из ответа модели: точное имя/синоним, потом по словам */
  function findName(w, name) {
    name = str(name, 80);
    if (!name) return null;
    var id = byName(w, name);
    if (id) return id;
    var tk = tokens(name), ids = Object.keys(w.people), hits = [];
    ids.forEach(function (x) { if (matcher(w.people[x], { first: true })(tk, name)) hits.push(x); });
    if (hits.length === 1) return hits[0];
    var low = name.toLowerCase();
    hits = ids.filter(function (x) { var n = w.people[x].name.toLowerCase(); return n.indexOf(low) >= 0 || low.indexOf(n) >= 0; });
    return hits.length === 1 ? hits[0] : null;
  }
  function statusLine(w, id) {
    var p = w.people[id], bits = [];
    if (!p.alive) bits.push('dead');
    spousesOf(w, id).forEach(function (o) { bits.push('married to ' + w.people[o].name); });
    partners(w, id, 'betrothed').forEach(function (o) { bits.push('engaged to ' + w.people[o].name); });
    partnersOf(w, id).forEach(function (o) { bits.push('seeing ' + w.people[o].name); });
    if (p.ill) bits.push('ill');
    if (p.role.job) bits.push(p.role.job);
    if (p.role.place) bits.push('at ' + p.role.place);
    return p.name + ' | ' + p.sex + (p.age != null ? ' | ' + p.age : '') + (bits.length ? ' | ' + bits.join('; ') : '');
  }

  /* ── 1. что изменилось в чате ── */
  var CHANGE_TYPES = ['marry', 'divorce', 'engage', 'date', 'breakup', 'death', 'ill', 'heal', 'move', 'job', 'title', 'quarrel', 'reconcile', 'enemy', 'secret_new', 'secret_out', 'pregnant', 'birth', 'kin'];
  function observePrompt(w, msgs) {
    var main = mains(w).map(function (id) { return w.people[id].name; });
    var known = Object.keys(w.people).filter(function (id) { return main.indexOf(w.people[id].name) < 0; }).slice(0, 80).map(function (id) { return '- ' + statusLine(w, id); });
    var chat = (msgs || []).map(function (m) { return '[' + str(m.name || (m.role === 'user' || m.is_user ? 'User' : 'Character'), 40) + ']: ' + txt(msgText(m), 1800); }).join('\n');
    return 'You keep the registry of people for an ongoing roleplay. Read the RECENT CHAT and report only concrete facts about people that the chat establishes as having actually happened or being true. Ignore plans, threats, dreams, hypotheticals, jokes and unconfirmed rumors.\n\n' +
      'MAIN CHARACTERS (report facts about them only when they involve another person, e.g. a marriage): ' + (main.join(', ') || '—') + '\n' +
      'KNOWN PEOPLE (name | sex | age | status):\n' + (known.join('\n') || '(none yet)') + '\n\n' +
      'RECENT CHAT:\n' + chat + '\n\n' +
      'Reply with JSON only, no comments:\n' +
      '{"new_people":[{"name":"","sex":"f|m|x","age":null,"title":"","job":"","place":"","house":"","traits":[],"bio":"one short sentence","relations":[{"type":"parent|child|sibling|spouse","name":""}]}],\n' +
      ' "changes":[{"type":"' + CHANGE_TYPES.join('|') + '","who":"","with":"","value":"","quote":"short quote from the chat"}]}\n\n' +
      'Rules:\n- new_people: only named people who appear or are clearly established in the recent chat and are NOT in the known list or main characters.\n' +
      '- Use names exactly as written in the known list.\n- move/job/title: value = new place/job/title. secret_new: value = the secret in one sentence. secret_out: value = what came out. kin: value = parent|child|sibling (who is the [value] of with). pregnant: who = mother, with = father. birth: value = child name.\n' +
      '- Write values in the language of the chat. If nothing changed, return {"new_people":[],"changes":[]}.';
  }
  /* Ответ → список находок для окна: [{id, k: 'person'|тип, ...}] без того, что уже правда */
  function parseObserve(w, j, opt) {
    var out = [], maxP = (opt && opt.max) || 8, maxC = (opt && opt.maxc) || 16;
    if (!j || typeof j !== 'object') return out;
    var news = {};
    (Array.isArray(j.new_people) ? j.new_people : []).slice(0, maxP).forEach(function (n) {
      var name = str(n && n.name, 80);
      if (!name || findName(w, name) || news[name.toLowerCase()]) return;
      news[name.toLowerCase()] = 1;
      out.push({ id: uid('g'), k: 'person', name: name, sex: SEX[n.sex] ? n.sex : 'x', age: n.age == null || n.age === '' ? null : num(n.age, 0, 999, null),
        title: str(n.title, 60), job: str(n.job, 80), place: str(n.place, 80), house: str(n.house, 80), traits: list(n.traits, 6), bio: txt(n.bio, 400),
        rel: (Array.isArray(n.relations) ? n.relations : []).filter(function (r) { return r && /^(parent|child|sibling|spouse)$/.test(r.type) && str(r.name); }).map(function (r) { return { t: r.type, name: str(r.name, 80) }; }).slice(0, 6) });
    });
    (Array.isArray(j.changes) ? j.changes : []).slice(0, maxC).forEach(function (c) {
      if (!c || CHANGE_TYPES.indexOf(c.type) < 0) return;
      var who = str(c.who, 80), wth = str(c.with, 80);
      if (!who) return;
      var a = findName(w, who), b = wth ? findName(w, wth) : null;
      if (!a && !news[who.toLowerCase()]) return;
      if (wth && !b && !news[wth.toLowerCase()] && /^(marry|divorce|engage|date|breakup|quarrel|reconcile|enemy|kin)$/.test(c.type)) return;
      var pr = { id: uid('g'), k: c.type, who: who, with: wth, a: a, b: b, value: txt(c.value, 300), quote: txt(c.quote, 200) };
      if (a && !stillNew(w, pr)) return;
      out.push(pr);
    });
    return out;
  }
  /* Не предлагать то, что уже записано */
  function stillNew(w, pr) {
    var a = pr.a, b = pr.b, p = w.people[a];
    if (!p) return true;
    switch (pr.k) {
      case 'marry': return !(b && married(w, a, b));
      case 'divorce': return !!(b && married(w, a, b));
      case 'engage': return !(b && edge(w, a, b, 'betrothed'));
      case 'date': return !(b && relOf(w, a, b).love >= 50);
      case 'breakup': return !!(b && relOf(w, a, b).love >= 50);
      case 'death': return p.alive;
      case 'ill': return !p.ill;
      case 'heal': return p.ill;
      case 'move': return !!pr.value && p.role.place.toLowerCase() !== pr.value.toLowerCase();
      case 'job': return !!pr.value && p.role.job.toLowerCase() !== pr.value.toLowerCase();
      case 'title': return !!pr.value && p.role.title.toLowerCase() !== pr.value.toLowerCase();
      case 'enemy': return !(b && relOf(w, a, b).rival >= 60);
      case 'reconcile': return !!(b && relOf(w, a, b).rival >= 20);
      case 'secret_new': return !!pr.value && !w.secrets.some(function (x) { return x.about.indexOf(a) >= 0 && x.text && x.text.toLowerCase() === pr.value.toLowerCase(); });
      case 'kin': return !!(b && /^(parent|child|sibling)$/.test(pr.value) && !relate(w, a, b).length);
    }
    return true;
  }
  var PLAYING = false;
  function onscreenEv(w, t, a, b) {
    var ev = { id: uid('e'), day: w.clock.day, t: t, a: a || null, b: b || null, v: PLAYING ? { played: true } : { onscreen: true }, pub: PLAYING ? 'rumor' : 'public', minor: false, known: [], heard: {} };
    ev.known = (PLAYING ? [] : mains(w)).concat([a, b].filter(Boolean)).filter(function (x, i, arr) { return x && arr.indexOf(x) === i; });
    w.events.push(ev);
    return ev;
  }
  /* Принять находку. Имена ищутся заново: человек мог появиться после разбора. Возвращает '' или код ошибки. */
  function applyFinding(w, pr) {
    if (pr.k === 'person') {
      if (findName(w, pr.name)) return 'exists';
      var hid = '';
      if (pr.house) { hid = Object.keys(w.houses).filter(function (h) { return w.houses[h].name.toLowerCase() === pr.house.toLowerCase(); })[0] || addHouse(w, pr.house); }
      var nid = addPerson(w, { name: pr.name, sex: pr.sex, age: pr.age, house: hid, role: { title: pr.title, job: pr.job, place: pr.place }, traits: pr.traits, bio: pr.bio });
      (pr.rel || []).forEach(function (r) {
        var o = findName(w, r.name);
        if (!o || o === nid) return;
        if (r.t === 'parent') addKin(w, o, nid, 'parent');
        else if (r.t === 'child') addKin(w, nid, o, 'parent');
        else if (r.t === 'sibling') addKin(w, nid, o, 'sibling');
        else if (r.t === 'spouse') addKin(w, nid, o, 'spouse');
      });
      pr.made = nid;
      return '';
    }
    var a = findName(w, pr.who), b = pr.with ? findName(w, pr.with) : null;
    if (!a) return 'who';
    if (pr.with && !b && /^(marry|divorce|engage|date|breakup|quarrel|reconcile|enemy|kin|pregnant)$/.test(pr.k)) return 'with';
    var p = w.people[a], r;
    switch (pr.k) {
      case 'marry': addKin(w, a, b, 'spouse'); onscreenEv(w, 'marry', a, b); break;
      case 'divorce': addKin(w, a, b, 'spouse', { ex: true }); r = relOf(w, a, b, true); r.love = 0; onscreenEv(w, 'divorce', a, b); break;
      case 'engage': addKin(w, a, b, 'betrothed'); r = relOf(w, a, b, true); r.love = Math.max(r.love, 60); r.since = w.clock.day; onscreenEv(w, 'engage', a, b); break;
      case 'date': r = relOf(w, a, b, true); r.love = 60; r.since = w.clock.day; onscreenEv(w, 'date', a, b); break;
      case 'breakup': r = relOf(w, a, b, true); r.love = 0; r.affair = false; onscreenEv(w, 'breakup', a, b); break;
      case 'death': p.alive = false; p.ill = false; onscreenEv(w, 'death', a, null); break;
      case 'ill': p.ill = true; onscreenEv(w, 'ill', a, null); break;
      case 'heal': p.ill = false; onscreenEv(w, 'heal', a, null); break;
      case 'move': p.role.place = str(pr.value, 80); onscreenEv(w, 'move', a, null).v.to = p.role.place; break;
      case 'job': p.role.job = str(pr.value, 80); onscreenEv(w, 'job', a, null); break;
      case 'title': p.role.title = str(pr.value, 60); break;
      case 'quarrel': r = relOf(w, a, b, true); r.like -= 30; r.rival += 25; onscreenEv(w, 'quarrel', a, b); break;
      case 'enemy': r = relOf(w, a, b, true); r.rival = Math.max(r.rival, 70); r.feud = true; onscreenEv(w, 'feud', a, b); break;
      case 'reconcile': r = relOf(w, a, b, true); r.rival = 0; r.like += 20; r.feud = false; onscreenEv(w, 'reconcile', a, b); break;
      case 'secret_new': newSecret(w, [a], pr.value, PLAYING ? [a] : [a].concat(mains(w))); break;
      case 'secret_out': {
        var x = w.secrets.filter(function (s) { return !s.out && s.about.indexOf(a) >= 0; }).pop() || newSecret(w, [a], pr.value || '?', [a]);
        var ev = scandal(w, x, null); ev.v.onscreen = true; ev.known = Object.keys(w.people).filter(function (id) { return w.people[id].alive; });
        w.events.push(ev);
        break;
      }
      case 'pregnant': if (b) { w.pending = w.pending || []; if (!w.pending.some(function (q) { return q.mother === a; })) w.pending.push({ mother: a, father: b, due: w.clock.day + 200, wed: married(w, a, b) }); onscreenEv(w, 'conceive', a, b); } break;
      case 'birth': {
        var kid = addPerson(w, { name: pr.value || '?', age: 0, house: p.house, role: { place: p.role.place } });
        addKin(w, a, kid, 'parent'); if (b) addKin(w, b, kid, 'parent');
        w.pending = (w.pending || []).filter(function (q) { return q.mother !== a; });
        onscreenEv(w, 'birth', a, b).v.child = kid;
        break;
      }
      case 'kin':
        if (pr.value === 'parent') addKin(w, a, b, 'parent');
        else if (pr.value === 'child') addKin(w, b, a, 'parent');
        else addKin(w, a, b, 'sibling');
        break;
    }
    if (r) clampRel(r);
    loveDirty(w); touch(w);
    return '';
  }

  /* ── 2. умный разбор лорбука ── */
  function lorePrompt(entries) {
    var hasCard = entries.some(function (e) { return e.card; });
    return 'These are ' + (hasCard ? 'parts of a roleplay character card and ' : '') + 'lorebook entries of a roleplay world. Find every person (character) they describe and extract the facts written about them. One entry can describe one person, several people (a cast list, family, party members, an RPG card with many NPCs) or nobody. Do not invent facts that are not in the text.' + (hasCard ? ' The card itself belongs to the main character(s); list the main character too only if the text gives facts about them, and list every other named person separately.' : '') + '\n\n' +
      entries.slice(0, 30).map(function (e) { return '### entry ' + e.id + ': ' + e.title + (e.keys && e.keys.length ? ' (keys: ' + e.keys.join(', ') + ')' : '') + '\n' + txt(e.body, e.long ? 8000 : 1200); }).join('\n\n') + '\n\n' +
      'Reply with JSON only:\n{"world":{"magic":false,"nobility":false,"modern":false},"people":[{"entry":"<entry id>","name":"","aliases":[],"sex":"f|m|x","age":null,"title":"","job":"","faction":"","place":"","house":"","traits":[],"bio":"1-2 sentences","relations":[{"type":"parent|child|sibling|spouse|betrothed","name":""}],"secrets":[]}]}\n' +
      'Rules: one item per person; "entry" is the id of the entry where the person is described. relations: "type" is what that OTHER person is to this one (her mother Agatha → {"type":"parent","name":"Agatha"}). house: family/clan/guild name if stated. Keep the language of the entries.';
  }
  /* Принять разбор: только отмеченные записи. Связи — между всеми, кто есть в мире после добавления. */
  function applyLore(w, j, bookId, selected) {
    var made = [], rels = [];
    if (!j || !Array.isArray(j.people)) return made;
    if (j.world && typeof j.world === 'object' && (!w.traits || w.traits.src !== 'hand')) w.traits = { magic: !!j.world.magic, nobility: !!j.world.nobility, modern: !!j.world.modern, src: 'auto' };
    j.people.forEach(function (n) {
      if (!n || !n.name) return;
      var eid = String(n.entry == null ? '' : n.entry);
      if (selected && selected.indexOf(eid) < 0) return;
      if (findName(w, n.name)) return;
      var hid = '';
      if (str(n.house)) { hid = Object.keys(w.houses).filter(function (h) { return w.houses[h].name.toLowerCase() === str(n.house).toLowerCase(); })[0] || addHouse(w, n.house); }
      var id = addPerson(w, { name: n.name, aliases: n.aliases, sex: SEX[n.sex] ? n.sex : 'x', age: n.age, house: hid,
        role: { title: n.title, job: n.job, faction: n.faction, place: n.place }, traits: n.traits, bio: n.bio, lore: { book: bookId, entry: eid } });
      made.push(id);
      (Array.isArray(n.relations) ? n.relations : []).forEach(function (r) { if (r && r.name) rels.push({ id: id, t: r.type, name: r.name }); });
      (Array.isArray(n.secrets) ? n.secrets : []).slice(0, 3).forEach(function (s) { if (str(s)) newSecret(w, [id], s, [id]); });
    });
    rels.forEach(function (r) {
      var o = findName(w, r.name);
      if (!o || o === r.id) return;
      if (r.t === 'parent') addKin(w, o, r.id, 'parent');
      else if (r.t === 'child') addKin(w, r.id, o, 'parent');
      else if (r.t === 'sibling') addKin(w, r.id, o, 'sibling');
      else if (r.t === 'spouse') addKin(w, r.id, o, 'spouse');
      else if (r.t === 'betrothed') addKin(w, r.id, o, 'betrothed');
    });
    return made;
  }

  /* ── 3. живые формулировки событий ── */
  function flavorPrompt(w, evs, lang) {
    var T0 = traitsOf(w);
    var setting = ['World: ' + (T0.magic ? 'magic exists' : 'no magic') + '; ' + (T0.nobility ? 'nobility and titles' : 'no nobility') + '; ' + (T0.modern ? 'modern technology' : 'no modern technology'), 'Places: ' + allPlaces(w).slice(0, 8).join(', '), 'Houses: ' + Object.keys(w.houses).map(function (h) { return w.houses[h].name; }).join(', ')].filter(Boolean).join('\n');
    var people = {};
    evs.forEach(function (e) { [e.a, e.b].forEach(function (x) { if (x && w.people[x]) people[x] = 1; }); });
    return 'Rewrite each off-screen event of a roleplay world as ONE vivid sentence (max 25 words) that fits the setting: concrete, in-world, like court gossip. Keep the facts exactly; do not add deaths, marriages or other major facts that are not in the event. Event names are generic: render each the way THIS world would (a contest may be a tournament, a fist fight or the games; withdrawing from the world may be taking vows or becoming a hermit; a journey may be a pilgrimage, a campaign or a trip abroad). Language: ' + (lang || 'English') + '.\n\n' +
      'SETTING:\n' + setting + '\nPEOPLE:\n' + Object.keys(people).map(function (id) { var p = w.people[id]; return '- ' + p.name + ': ' + [p.role.title, p.role.job, p.house && w.houses[p.house] ? w.houses[p.house].name : '', p.bio.slice(0, 120)].filter(Boolean).join('; '); }).join('\n') + '\n\n' +
      'EVENTS:\n' + evs.map(function (e) { return e.id + ': ' + evText(w, e, 'en'); }).join('\n') + '\n\nReply with JSON only: {"<event id>":"sentence", ...}';
  }
  function applyFlavor(w, j) {
    var n = 0;
    if (!j || typeof j !== 'object') return 0;
    w.events.forEach(function (e) { var s = j[e.id]; if (typeof s === 'string' && str(s)) { e.v.flavor = txt(s, 300); n++; } });
    return n;
  }
  function needFlavor(w, max) {
    return w.events.filter(function (e) { return !e.minor && !e.v.flavor && !e.v.onscreen && e.t !== 'plot'; }).slice(-(max || 8));
  }

  /* ── 4. признаки мира по тексту ── */
  var TRAIT_WORDS = {
    magic: /маги[яиюей]|магическ|колдун|ведьм|чародe?|чародей|эльф|дракон|заклинан|орк[аиу]?\b|гном|волшебн|нечист|леши|русалк|кикимор|оборот|mage|magic|witch|sorcer|elf|elves|dragon|spell|wizard/gi,
    nobility: /король|королев|княз|княгин|княжн|боярин|бояр|царь|царев|цариц|лорд|леди|граф[аиу]?\b|графин|герцог|барон|маркиз|вассал|дворян|знать|фараон|императ|базилевс|архонт|патриц|сёгун|самура|king|queen|prince|princess|lord|lady|duke|duchess|baron|noble|emperor|pharaoh|shogun|patrician/gi,
    modern: /телефон|смартфон|ноутбук|машин[аеуы]\b|офис|интернет|инстаграм|соцсет|кофейн|метро|такси|компьютер|phone|laptop|office|internet|instagram|subway|taxi|computer/gi
  };
  function detectTraits(text) {
    text = String(text || '');
    var out = {};
    Object.keys(TRAIT_WORDS).forEach(function (k) { out[k] = (text.match(TRAIT_WORDS[k]) || []).length >= 2; });
    return out;
  }

  /* ══ Игра за НПС: действия, шансы, последствия, сцены от Сплетницы ══ */
  /* who: кому можно — 'any' живые не-главные, кроме себя; need — доступно ли вообще */
  var ACTS = [
    { k: 'talk', who: 'any' },
    { k: 'charm', who: function (w, me, o, s) { return pairOk(w, me, o, s) && relOf(w, me, o).love < 50 && !married(w, me, o); } },
    { k: 'confess', who: function (w, me, o, s) { return pairOk(w, me, o, s) && relOf(w, me, o).love >= 25 && relOf(w, me, o).love < 50 && !married(w, me, o); } },
    { k: 'propose', who: function (w, me, o) { return relOf(w, me, o).love >= 50 && !married(w, me, o) && !edge(w, me, o, 'betrothed') && free2(w, me, o); } },
    { k: 'quarrel', who: 'any' },
    { k: 'reconcile', who: function (w, me, o) { return relOf(w, me, o).rival >= 20; } },
    { k: 'snoop', who: 'any' },
    { k: 'blackmail', who: function (w, me, o) { return knownSecretsAbout(w, me, o).length > 0; } },
    { k: 'expose', who: function (w, me, o) { return knownSecretsAbout(w, me, o).length > 0; } },
    { k: 'matchmake', need: function (w, me) { return unmarriedKids(w, me).length > 0; }, who: function (w, me, o) { return unmarriedKids(w, me).some(function (c) { return c !== o && free(w, o) && pairOk(w, c, o, { pairs: 'mf' }); }); } },
    { k: 'letter', who: 'far' },
    { k: 'scheme', need: function (w, me) { return w.goals.some(function (g) { return g.owner === me && !g.end; }); } },
    { k: 'go', need: function (w) { return allPlaces(w).length > 0; } },
    { k: 'free' }
  ];
  var AMAP = {};
  ACTS.forEach(function (a) { AMAP[a.k] = a; });
  function knownSecretsAbout(w, me, o) { return w.secrets.filter(function (x) { return !x.out && x.about.indexOf(o) >= 0 && x.about.indexOf(me) < 0 && x.known.indexOf(me) >= 0; }); }
  function playable(w, id) { var p = w.people[id]; return !!(p && p.alive && !p.flags.char && !p.flags.player); }
  /* Кто рядом: то же место или тот же дом, не главные, не в отъезде */
  function nearby(w, me) {
    return Object.keys(w.people).filter(function (o) {
      var p = w.people[o];
      return o !== me && p.alive && !p.flags.char && !p.flags.player && !p.flags.away && near(w, me, o);
    });
  }
  /* Какие действия доступны: [{k, targets:[id]|null}] */
  function actsFor(w, me, s) {
    s = settings(s);
    if (!playable(w, me)) return [];
    var all = Object.keys(w.people).filter(function (o) { var p = w.people[o]; return o !== me && p.alive && !p.flags.char && !p.flags.player; });
    var close = nearby(w, me);
    return ACTS.filter(function (a) { return !a.need || a.need(w, me); }).map(function (a) {
      if (!a.who) return { k: a.k, targets: null };
      var pool = a.who === 'far' ? all : a.who === 'any' ? close : close.concat(all.filter(function (o) { return close.indexOf(o) < 0; }));
      var t = a.who === 'any' || a.who === 'far' ? pool : pool.filter(function (o) { return a.who(w, me, o, s); });
      return { k: a.k, targets: t };
    }).filter(function (a) { return !a.targets || a.targets.length; });
  }
  var TONE = {
    warm: { talk: 0.1, charm: 0.12, confess: 0.1, reconcile: 0.15, letter: 0.1, blackmail: -0.1, matchmake: 0.08 },
    bold: { propose: 0.12, confess: 0.08, blackmail: 0.12, charm: 0.05, reconcile: -0.08, quarrel: 0.05 },
    sly: { snoop: 0.18, blackmail: 0.1, scheme: 0.15, matchmake: 0.1, charm: 0.04 },
    cold: { talk: -0.1, charm: -0.15, confess: -0.15, reconcile: -0.12, blackmail: 0.05 }
  };
  function hasTrait(p, re) { return re.test((p.traits.join(' ') + ' ' + p.role.job).toLowerCase()); }
  /* Шанс успеха 0.05..0.95 */
  function actChance(w, me, k, o, tone) {
    var P0 = w.people[me], r = o ? relOf(w, me, o) : { like: 0, love: 0, rival: 0 }, c;
    switch (k) {
      case 'talk': c = 0.82 + r.like / 250 - r.rival / 250; break;
      case 'charm': c = 0.3 + Math.max(0, r.like) / 160 + r.love / 250 - (o && !free(w, o) ? 0.2 : 0) - r.rival / 200; break;
      case 'confess': c = 0.35 + Math.max(0, r.like) / 200 + r.love / 120 - (o && !free(w, o) ? 0.25 : 0); break;
      case 'propose': c = 0.55 + r.love / 400 + Math.max(0, r.like) / 400; break;
      case 'quarrel': c = 0.95; break;
      case 'reconcile': c = 0.45 + Math.max(0, r.like) / 200 - r.rival / 300; break;
      case 'snoop': c = 0.32 + (hasTrait(P0, GOSSIP_RE2) ? 0.2 : 0) + (o && near(w, me, o) ? 0.1 : 0); break;
      case 'blackmail': c = 0.5 + (hasTrait(P0, GREED) ? 0.1 : 0) - r.like / 300; break;
      case 'expose': c = 0.9; break;
      case 'matchmake': c = 0.4 + arrangeK(w) * 0.06 + Math.max(0, r.like) / 300; break;
      case 'letter': c = 0.85; break;
      case 'scheme': c = 0.7 + (hasTrait(P0, AMBI) ? 0.1 : 0); break;
      case 'go': c = 1; break;
      default: c = 0.6;
    }
    if (tone && TONE[tone] && TONE[tone][k]) c += TONE[tone][k];
    return Math.max(0.05, Math.min(k === 'go' ? 1 : 0.95, c));
  }
  var GOSSIP_RE2 = /сплет|болтл|любопыт|gossip|chatter|curious|八卦/;
  function chanceWord(c) { return c >= 0.75 ? 'high' : c >= 0.45 ? 'mid' : 'low'; }
  function playEv(w, t, a, b, pub, minor) {
    var ev = newEv(w, t, a, b, pub, minor);
    ev.v.played = true;
    w.events.push(ev);
    if (ev.pub === 'secret' && t !== 'discover' && t !== 'blackmail' && t !== 'plot') addSecret(w, [a, b].filter(Boolean), { ev: ev.id, known: ev.known.slice(), stake: 2 });
    return ev;
  }
  /* Сыграть действие. opt: {rnd, tone, place, kid}. Возвращает {ok, chance, lines:[{c, id?, v?}], ev} */
  function playAct(w, me, k, o, opt) {
    opt = opt || {};
    var rnd = opt.rnd || Math.random, out = { ok: false, chance: 1, lines: [], ev: null };
    if (!playable(w, me) || !AMAP[k] || k === 'free') return out;
    var c = actChance(w, me, k, o, opt.tone);
    out.chance = c;
    var ok = rnd() < c, r = o ? relOf(w, me, o, true) : null, L = out.lines;
    out.ok = ok;
    switch (k) {
      case 'talk':
        if (ok) { r.like += 12; L.push({ c: 'like', id: o, d: 1 }); if (r.like <= 12 && r.love === 0 && r.rival === 0) out.ev = playEv(w, 'meet', me, o, 'rumor', true); }
        else { r.like -= 6; L.push({ c: 'like', id: o, d: -1 }); }
        break;
      case 'charm':
        if (ok) {
          r.like += 10; r.love += 30;
          if (r.love >= 50) {
            r.since = w.clock.day;
            var taken = !free(w, me) || !free(w, o);
            if (taken) { r.affair = true; out.ev = playEv(w, 'affair', me, o, 'secret'); L.push({ c: 'affair', id: o }); }
            else { out.ev = playEv(w, 'date', me, o, 'rumor'); L.push({ c: 'dating', id: o }); }
          } else L.push({ c: 'love', id: o, d: 1 });
        } else { r.like -= 10; L.push({ c: 'refused', id: o }); out.ev = playEv(w, 'act', me, o, 'rumor', true); out.ev.v.act = k; }
        break;
      case 'confess':
        if (ok) { r.love = 60; r.like += 10; r.since = w.clock.day; var tk = !free(w, me) || !free(w, o); if (tk) r.affair = true; out.ev = playEv(w, tk ? 'affair' : 'date', me, o, tk ? 'secret' : 'rumor'); L.push({ c: tk ? 'affair' : 'dating', id: o }); }
        else { r.love = 0; r.like -= 15; out.ev = playEv(w, 'act', me, o, 'rumor'); out.ev.v.act = k; L.push({ c: 'refused', id: o }); }
        break;
      case 'propose':
        if (ok) { addKin(w, me, o, 'betrothed'); r.since = w.clock.day; out.ev = playEv(w, 'engage', me, o, 'public'); L.push({ c: 'engaged', id: o }); }
        else { r.like -= 12; r.love = Math.max(0, r.love - 20); out.ev = playEv(w, 'act', me, o, 'rumor'); out.ev.v.act = k; L.push({ c: 'refused', id: o }); }
        break;
      case 'quarrel':
        r.like -= 25; r.rival += 25; out.ev = playEv(w, 'quarrel', me, o, 'rumor'); L.push({ c: 'rival', id: o, d: 1 });
        break;
      case 'reconcile':
        if (ok) { r.rival = Math.max(0, r.rival - 40); r.like += 20; r.feud = false; out.ev = playEv(w, 'reconcile', me, o, 'rumor'); L.push({ c: 'peace', id: o }); }
        else { r.rival += 10; L.push({ c: 'rival', id: o, d: 1 }); }
        break;
      case 'snoop': {
        var unknown = w.secrets.filter(function (x) { return !x.out && x.about.indexOf(o) >= 0 && x.known.indexOf(me) < 0; });
        if (ok && unknown.length) {
          var x = unknown[Math.floor(rnd() * unknown.length)];
          learn(w, x, me, null);
          out.ev = playEv(w, 'discover', me, o, 'secret'); out.ev.v.s = x.id; out.ev.known = [me];
          L.push({ c: 'secret', v: secretText(w, x, 'ru'), s: x.id });
        } else if (ok) L.push({ c: 'nothing' });
        else { r.rival += 12; r.like -= 8; L.push({ c: 'caught', id: o }); }
        break;
      }
      case 'blackmail': {
        var bx = knownSecretsAbout(w, me, o)[0];
        if (!bx) break;
        if (ok) { r.rival += 25; r.like -= 35; out.ev = playEv(w, 'blackmail', me, o, 'secret'); out.ev.v.s = bx.id; out.ev.known = [me, o]; L.push({ c: 'yields', id: o }); }
        else { r.rival += 40; r.like -= 40; var rr = relOf(w, o, me, true); rr.rival = r.rival; L.push({ c: 'defies', id: o }); }
        break;
      }
      case 'expose': {
        var ex = knownSecretsAbout(w, me, o)[0];
        if (!ex) break;
        out.ev = scandal(w, ex, me); out.ev.v.played = true; w.events.push(out.ev);
        out.ok = true; L.push({ c: 'scandal', v: secretText(w, ex, 'ru') });
        break;
      }
      case 'matchmake': {
        var kid = opt.kid && unmarriedKids(w, me).indexOf(opt.kid) >= 0 ? opt.kid : unmarriedKids(w, me).filter(function (c2) { return c2 !== o && pairOk(w, c2, o, { pairs: 'mf' }); })[0];
        if (!kid) break;
        if (ok) { addKin(w, kid, o, 'betrothed'); var r2 = relOf(w, kid, o, true); r2.since = w.clock.day; out.ev = playEv(w, 'arranged', kid, o, 'public'); out.ev.v.by = me; out.ev.known.push(me); L.push({ c: 'engaged2', id: kid, id2: o }); }
        else { r.like -= 10; L.push({ c: 'refused', id: o }); }
        break;
      }
      case 'letter':
        if (ok) { r.like += 8; L.push({ c: 'like', id: o, d: 1 }); } else L.push({ c: 'noanswer', id: o });
        out.ev = playEv(w, 'act', me, o, 'secret', true); out.ev.v.act = k; out.ev.known = [me, o];
        break;
      case 'scheme': {
        var g = w.goals.filter(function (x) { return x.owner === me && !x.end; })[0];
        if (!g) break;
        g.pr = Math.min(100, g.pr + (ok ? 30 : 8));
        L.push({ c: 'goal', v: g.pr, g: g.t });
        break;
      }
      case 'go': {
        var pl = str(opt.place, 80);
        if (!pl) break;
        w.people[me].role.place = pl; out.ok = true;
        out.ev = playEv(w, 'move', me, null, 'rumor', true); out.ev.v.to = pl;
        L.push({ c: 'moved', v: pl });
        break;
      }
    }
    if (r) clampRel(r);
    loveDirty(w); touch(w);
    return out;
  }
  /* Для модели: что произошло по-английски */
  function outcomeEn(w, me, k, o, res) {
    function nm(x) { return (w.people[x] && w.people[x].name) || '?'; }
    var bits = res.lines.map(function (l) {
      switch (l.c) {
        case 'like': return nm(l.id) + (l.d > 0 ? ' warms to ' : ' cools toward ') + nm(me);
        case 'love': return nm(l.id) + ' is clearly interested';
        case 'dating': return nm(me) + ' and ' + nm(l.id) + ' are now together';
        case 'affair': return nm(me) + ' and ' + nm(l.id) + ' begin a secret affair';
        case 'refused': return nm(l.id) + ' refuses';
        case 'engaged': return nm(me) + ' and ' + nm(l.id) + ' are now engaged';
        case 'engaged2': return nm(l.id) + ' is now betrothed to ' + nm(l.id2);
        case 'rival': return nm(l.id) + ' is now hostile';
        case 'peace': return 'they make peace';
        case 'secret': return nm(me) + ' learns a secret: ' + l.v;
        case 'nothing': return nm(me) + ' finds nothing';
        case 'caught': return nm(me) + ' is caught snooping by ' + nm(l.id);
        case 'yields': return nm(l.id) + ' gives in to the blackmail';
        case 'defies': return nm(l.id) + ' defies the blackmail and is now a sworn enemy';
        case 'scandal': return 'the secret is out: ' + l.v;
        case 'noanswer': return 'no answer comes';
        case 'goal': return 'the scheme moves forward (' + l.v + '%)';
        case 'moved': return nm(me) + ' goes to ' + l.v;
      }
      return '';
    }).filter(Boolean);
    return (res.ok ? 'SUCCESS' : 'FAILURE') + (bits.length ? ': ' + bits.join('; ') : '');
  }
  var ACT_EN = { talk: 'has a conversation with', charm: 'tries to charm / flirt with', confess: 'confesses feelings to', propose: 'proposes marriage to', quarrel: 'has it out with', reconcile: 'tries to make peace with', snoop: 'secretly tries to dig up something about', blackmail: 'blackmails', expose: 'exposes the secret of', matchmake: 'tries to arrange a match for their child with', letter: 'writes a letter to', scheme: 'works on a secret scheme', go: 'goes to' };
  function personBrief(w, id) {
    var p = w.people[id];
    return p.name + ' — ' + [p.sex === 'f' ? 'woman' : p.sex === 'm' ? 'man' : '', p.age != null ? p.age + ' y.o.' : '', p.role.title, p.role.job, p.traits.join(', '), p.bio.slice(0, 160)].filter(Boolean).join('; ');
  }
  /* Сцена: stage 'open' — завязка и варианты; 'end' — развязка по итогу; 'free' — своё действие */
  function scenePrompt(w, me, k, o, stage, opt) {
    opt = opt || {};
    var lang = opt.lang || 'English', T0 = traitsOf(w);
    var ctx = 'WORLD: ' + (T0.magic ? 'magic exists; ' : 'no magic; ') + (T0.nobility ? 'nobility and titles; ' : '') + (T0.modern ? 'modern technology; ' : 'no modern technology; ') + 'places: ' + allPlaces(w).slice(0, 6).join(', ') + '\n' +
      'PLAYER CHARACTER: ' + personBrief(w, me) + (w.people[me].role.place ? '; now at ' + w.people[me].role.place : '') + '\n' +
      (o ? 'OTHER: ' + personBrief(w, o) + (label(w, me, o, 'en') ? ' (' + label(w, me, o, 'en') + ' of ' + w.people[me].name + ')' : '') + '\n' : '') +
      (o ? 'THEIR RELATIONSHIP: like ' + relOf(w, me, o).like + ', love ' + relOf(w, me, o).love + ', hostility ' + relOf(w, me, o).rival + '\n' : '');
    var act = k === 'free' ? 'does this: ' + str(opt.text, 400) : (ACT_EN[k] || k) + (o ? ' ' + w.people[o].name : '') + (k === 'go' && opt.place ? ' ' + opt.place : '');
    var head = 'You are writing a short interactive scene of a roleplay world, seen from the player character\'s side, in close third person, present tense, with some dialogue. Language: ' + lang + '. Keep it tasteful and grounded in the world.\n\n' + ctx + '\nACTION: ' + w.people[me].name + ' ' + act + '.\n';
    if (stage === 'open') return head + '\nWrite the OPENING (2 short paragraphs) and stop right before the decisive moment. Then give 2-3 options for how ' + w.people[me].name + ' acts now, each with a tone: warm, bold, sly or cold.\nReply with JSON only: {"scene":"...","options":[{"text":"short option","tone":"warm|bold|sly|cold"}]}';
    if (stage === 'end') return head + (opt.history ? '\nSO FAR:\n' + str(opt.history, 1500) + '\n' : '') + (opt.choice ? 'PLAYER CHOSE: ' + str(opt.choice, 200) + '\n' : '') + 'OUTCOME (decided, you must follow it exactly): ' + opt.outcome + '\n\nWrite the ENDING (1-2 short paragraphs) that leads to this outcome, then one sentence summary for the chronicle.\nReply with JSON only: {"scene":"...","summary":"..."}';
    return head + '\nWrite the scene (2-3 short paragraphs). Then list only the concrete lasting consequences for people as changes.\nReply with JSON only: {"scene":"...","summary":"one sentence","changes":[{"type":"' + CHANGE_TYPES.join('|') + '","who":"","with":"","value":""}]}';
  }
  function parseScene(j) {
    if (!j || typeof j !== 'object') return null;
    var tones = { warm: 1, bold: 1, sly: 1, cold: 1 };
    return {
      scene: txt(j.scene, 3000),
      summary: txt(j.summary, 300),
      options: (Array.isArray(j.options) ? j.options : []).map(function (o) { return typeof o === 'string' ? { text: str(o, 200), tone: 'warm' } : { text: str(o && o.text, 200), tone: tones[o && o.tone] ? o.tone : 'warm' }; }).filter(function (o) { return o.text; }).slice(0, 3),
      changes: Array.isArray(j.changes) ? j.changes : []
    };
  }
  /* Своё действие: изменения из ответа модели, только с участием игрока */
  function applyFree(w, me, sc) {
    var found = parseObserve(w, { changes: sc.changes || [] }).filter(function (f) { return f.k !== 'person' && (f.a === me || f.b === me); });
    var done = [];
    PLAYING = true;
    try { found.forEach(function (f) { if (!applyFinding(w, f)) done.push(f); }); } finally { PLAYING = false; }
    return done;
  }

  /* ── лорбук ──────────────────────────────────────────────────────────── */
  function loreEntries(book) {
    var ent = (book && (book.entries || book.items)) || [];
    if (!Array.isArray(ent)) ent = Object.keys(ent).map(function (k) { var e = ent[k]; if (e && e.uid == null && e.id == null) e.__k = k; return e; });
    return ent.filter(Boolean).map(function (e, i) {
      var keys = e.keys || e.key || [];
      if (typeof keys === 'string') keys = keys.split(',');
      keys = list(keys, 12);
      var title = str(e.comment || e.name || e.title, 80) || keys[0] || '';
      var body = txt(clean(e.content || e.value || e.text || ''), 1500);
      var id = e.uid != null ? e.uid : e.id != null ? e.id : e.__k != null ? e.__k : i;
      return { id: String(id), title: title, keys: keys, body: body, off: e.disable === true || e.enabled === false };
    }).filter(function (e) { return e.title || e.body; });
  }
  function guessSex(t) {
    t = ' ' + String(t || '').toLowerCase() + ' ';
    function c(re) { var m = t.match(re); return m ? m.length : 0; }
    var f = c(/\s(she|her|hers|herself|она|её|ее|ей|неё|нее|девушка|женщина|дочь|жена|сестра|леди|королева|她)[\s.,!?;:]/g);
    var m = c(/\s(he|him|his|himself|он|его|ему|него|нему|парень|мужчина|сын|муж|брат|лорд|король|他)[\s.,!?;:]/g);
    return f > m * 1.5 ? 'f' : m > f * 1.5 ? 'm' : 'x';
  }
  function fromLore(e, bookId) {
    var name = e.title || e.keys[0] || '?';
    var aliases = e.keys.filter(function (k) { return k.toLowerCase() !== name.toLowerCase(); }).slice(0, 8);
    return { name: name, aliases: aliases, sex: guessSex(e.body), bio: e.body.slice(0, 600), lore: { book: bookId, entry: e.id } };
  }
  function hasLore(w, bookId, entryId) {
    return Object.keys(w.people).some(function (id) { var l = w.people[id].lore; return l && l.book === String(bookId) && l.entry === String(entryId); });
  }

  /* ── время по сюжету ─────────────────────────────────────────────────
     Модель основного чата в конце ответа ставит скрытую пометку <!--pwl:day N-->,
     когда в истории проходит день (ночь, утро, «через неделю»). Плагин проживает эти дни. */
  var DAY_RE = /<!--\s*pwl\s*:\s*(?:day|days|time)\s*[:=+]?\s*\+?(\d{1,4})\s*(d|day|days|w|week|weeks|m|month|months)?\s*-->/gi;
  function dayMarks(text) {
    var t = String(text || ''), m, n = 0;
    DAY_RE.lastIndex = 0;
    while ((m = DAY_RE.exec(t))) {
      var k = +m[1] || 0, u = String(m[2] || '').toLowerCase();
      if (/^w/.test(u)) k *= 7; else if (/^m/.test(u)) k *= 30;
      n += k;
    }
    return Math.min(n, 3 * YEAR);
  }
  function stripMarks(text) { return String(text || '').replace(/<!--\s*pwl\s*:[\s\S]*?-->/gi, '').replace(/[ \t]+$/gm, '').trimEnd(); }
  /* msgs — все сообщения чата по порядку; state — {seen:{индекс:дни}, base}. Перегенерация на том же месте не считается дважды. */
  function storyDays(msgs, state) {
    var st = state && typeof state === 'object' ? state : {};
    var seen = st.seen && typeof st.seen === 'object' ? st.seen : {}, first = !st.seen, days = 0, hits = [];
    (msgs || []).forEach(function (m, i) {
      if (!m || m.role === 'user' || m.is_user) return;
      var raw = typeof m === 'string' ? m : m.content != null ? m.content : m.mes != null ? m.mes : m.text;
      var n = dayMarks(raw);
      if (!n || seen[i] != null) return;
      seen[i] = n;
      if (!first) { days += n; hits.push(i); }
    });
    var keys = Object.keys(seen);
    if (keys.length > 300) keys.sort(function (a, b) { return a - b; }).slice(0, keys.length - 300).forEach(function (k) { delete seen[k]; });
    return { days: days, hits: hits, state: Object.assign({}, st, { seen: seen }) };
  }
  function timePrompt() {
    return '[World clock] If in this reply the story moves on to a new day (the night passes and morning comes, or there is a time skip), add one hidden line at the very end of your reply: <!--pwl:day N--> where N is how many days have passed (1 for the next day, 7 for "a week later", 30 for "a month later"). If the day has not changed, add nothing. This line is bookkeeping for a plugin: do not mention it and do not move time forward because of it.';
  }

  return {
    dayMarks: dayMarks, stripMarks: stripMarks, storyDays: storyDays, timePrompt: timePrompt,
    V: V, DEF: DEF, esc: esc, str: str, list: list, uid: uid,
    settings: settings, world: world, person: person,
    addPerson: addPerson, removePerson: removePerson, addHouse: addHouse, removeHouse: removeHouse, byName: byName,
    parentsOf: parentsOf, childrenOf: childrenOf, partners: partners, spousesOf: spousesOf, siblingsOf: siblingsOf,
    addKin: addKin, removeKin: removeKin, edge: edge, realParents: realParents,
    relate: relate, word: word, label: label, houseTree: houseTree,
    tokens: tokens, namesOf: namesOf, matcher: matcher, mentions: mentions, msgText: msgText,
    mains: mains, ensureMains: ensureMains, inScene: inScene, ties: ties, compose: compose,
    director: director, cueText: cueText, whyEn: whyEn, dirStep: dirStep, LIMIT: LIMIT, LONG: LONG,
    allPlacesOf: allPlaces, actsFor: actsFor, actChance: actChance, chanceWord: chanceWord, playAct: playAct, outcomeEn: outcomeEn, scenePrompt: scenePrompt, parseScene: parseScene, applyFree: applyFree, nearby: nearby, playable: playable, knownSecretsAbout: knownSecretsAbout, unmarriedKids: unmarriedKids,
    parseJSON: parseJSON, chatLang: chatLang, findName: findName, observePrompt: observePrompt, parseObserve: parseObserve, applyFinding: applyFinding, stillNew: stillNew,
    lorePrompt: lorePrompt, applyLore: applyLore, flavorPrompt: flavorPrompt, applyFlavor: applyFlavor, needFlavor: needFlavor, detectTraits: detectTraits, traitsOf: traitsOf,
    tick: tick, newSecret: newSecret, startGoal: startGoal, scandal: scandal, secretText: secretText, goalEn: goalEn,
    date: date, evText: evText, newsFor: newsFor, newsText: newsText, newsStep: newsStep, relOf: relOf, partnersOf: partnersOf, married: married, YEAR: YEAR, lately: lately,
    loreEntries: loreEntries, fromLore: fromLore, hasLore: hasLore, guessSex: guessSex
  };
})();

(function () {
  if (window.__pwl_panel && typeof window.__pwl_panel.destroy === 'function') { try { window.__pwl_panel.destroy(); } catch (e) {} }
  var T = window.__pwl_tavo || (typeof tavo !== 'undefined' ? tavo : null);
  var I18N = (T && T.plugin && T.plugin.i18n) || null;
  var DICT = window.__PWL_I18N || {};
  var LANGS = [['auto', ''], ['ru', 'Русский'], ['en', 'English'], ['zh-CN', '中文']];
  var TREE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.8" r="2.5"/><circle cx="5.2" cy="18.6" r="2.5"/><circle cx="12" cy="18.6" r="2.5"/><circle cx="18.8" cy="18.6" r="2.5"/><path d="M12 7.3v4.9M5.2 16.1v-3.9h13.6v3.9M12 12.2v3.9"/></svg>';
  var SCAN_ALL = 400, LONG_AGO = 40;
  var esc = PWL.esc, offs = [];

  function $(id) { return document.getElementById(id); }
  function fill(s, p) { return p ? String(s).replace(/\{(\w+)\}/g, function (m, n) { return (n in p) ? p[n] : m; }) : String(s); }
  function mapLang(l) { l = String(l || '').toLowerCase(); return /^zh/.test(l) ? 'zh-CN' : /^(ru|uk|be|kk)/.test(l) ? 'ru' : 'en'; }
  function langOf(pref) {
    if (pref && pref !== 'auto') return pref;
    var host = '';
    try { host = I18N && I18N.locale; } catch (e) {}
    return mapLang(host || (navigator.language || ''));
  }
  var LANG = 'ru';
  function t(k, p) {
    var cat = DICT[LANG], s = cat && cat[k];
    if (s == null || s === '') s = DICT.en && DICT.en[k];
    if (s == null || s === '') s = k;
    return fill(s, p);
  }
  function toast(m) { try { if (T && T.utils && T.utils.toast) T.utils.toast(m); } catch (e) {} }
  function within(p, ms) {
    return new Promise(function (res, rej) {
      var tm = setTimeout(function () { rej(new Error('timeout')); }, ms);
      Promise.resolve(p).then(function (v) { clearTimeout(tm); res(v); }, function (e) { clearTimeout(tm); rej(e); });
    });
  }
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  async function vread(name, scope) {
    try {
      var v = await within(T.variable.get(name, scope), 4000);
      if (v == null || v === '') return { ok: true, v: null };
      return { ok: true, v: typeof v === 'string' ? JSON.parse(v) : v };
    } catch (e) { return { ok: false }; }
  }
  async function vset(name, val, scope) {
    try { await within(T.variable.set(name, val == null ? '' : JSON.stringify(val), scope), 4000); return true; } catch (e) { return false; }
  }

  /* ── состояние ───────────────────────────────────────────────────────── */
  var S = PWL.settings(LS.get('pwl_settings', null));
  LANG = langOf(S.lang);
  var DIR = { p: 0, cue: null, recent: [] }, CANDS = [], DIR_SCAN = 200, LREV = 0, TOLD = {};
  var RECENT = [], W = PWL.world({}), PINS = [], CHAT = { id: null, chars: [], user: '' }, SEEN = {}, SCENE = [], READY = false;
  var UI = { view: 'people', pid: null, hid: null, q: '', filter: 'all', sheet: null, confirm: '', lore: null, dockpos: LS.get('pwl_dockpos', null) };
  /* в Таверне окно двигается за шапку, на ПК ещё меняет размер и масштаб */
  var ST_WIN = !!window.__pwl_tavo, WIDE_MIN = 560, WIN_MIN = { w: 330, h: 420 };
  UI.winPos = LS.get('pwl_winpos', null); UI.winSize = LS.get('pwl_winsize', null); UI.winZoom = +LS.get('pwl_winzoom', 1) || 1;

  async function loadGlobal() {
    var r = await vread('pwl_settings', 'global');
    if (r.ok && r.v) { S = PWL.settings(r.v); LS.set('pwl_settings', S); }
    LANG = langOf(S.lang);
    var d = await vread('pwl_dockpos', 'global');
    if (d.ok && d.v) { UI.dockpos = d.v; placeDock(); }
    syncDock();
  }
  async function chatInfo() {
    try {
      var c = await within(T.chat.current(), 4000);
      if (!c) return { id: null, chars: [], user: '' };
      var chars = (c.characters || []).map(function (x) { return x && x.name; }).filter(Boolean);
      if (!chars.length && c.character && c.character.name) chars = [c.character.name];
      return { id: c.id != null ? String(c.id) : null, chars: chars, user: (c.persona && c.persona.name) || '' };
    } catch (e) { return { id: null, chars: [], user: '' }; }
  }
  async function msgs() {
    var a = null;
    try { a = await within(T.message.find({ limit: 99999 }), 6000); } catch (e) {}
    if (!a || a.length === undefined) { try { a = await within(T.message.find(), 6000); } catch (e) {} }
    return a && a.length !== undefined ? a : [];
  }
  var loading = null;
  async function loadChat() {
    if (!T) return;
    if (loading) return loading;
    loading = (async function () {
      await flush();
      var info = await chatInfo();
      var changed = info.id !== CHAT.id;
      CHAT = info;
      var r = await vread('pwl_world', 'chat');
      if (r.ok) { W = PWL.world(r.v); LREV = W.rev || 0; }
      var nz = await vread('pwl_news', 'chat');
      if (nz.ok) TOLD = (nz.v && nz.v.told) || {};
      var p = await vread('pwl_scene', 'chat');
      if (p.ok) PINS = Array.isArray(p.v) ? p.v.filter(function (id) { return W.people[id]; }) : [];
      var d = await vread('pwl_dir', 'chat');
      if (d.ok) DIR = Object.assign({ p: 0, cue: null, recent: [] }, d.v || {});
      PWL.ensureMains(W, CHAT.chars, CHAT.user);
      var allm = await msgs();
      MCOUNT = allm.length;
      RECENT = allm.slice(-SCAN_ALL);
      await loadGossip();
      rescan();
      READY = true;
      autoTraits();
      setTimeout(function () { observe(false); }, 60);
      setTimeout(flavorize, 400);
      if (changed) { UI.view = 'people'; UI.pid = null; UI.hid = null; UI.sheet = null; }
      if (UI.pid && !W.people[UI.pid]) { UI.pid = null; UI.view = 'people'; }
      if (UI.hid && !W.houses[UI.hid]) { UI.hid = null; UI.view = 'houses'; }
      if (isOpen()) render(true);
    })();
    try { await loading; } finally { loading = null; }
  }
  var saveT = null, dirty = false;
  function save(now) {
    dirty = true;
    clearTimeout(saveT);
    if (now) return flush();
    saveT = setTimeout(flush, 450);
  }
  async function flush() {
    clearTimeout(saveT);
    if (!dirty || !T) return;
    dirty = false;
    var info = await chatInfo();
    if (CHAT.id && info.id && info.id !== CHAT.id) return;
    var cur = await vread('pwl_world', 'chat');
    if (cur.ok && cur.v && (+cur.v.rev || 0) > LREV) { toast(t('ui.toast.conflict')); soon(); return; }
    W.rev = LREV + 1;
    var ok = await vset('pwl_world', W, 'chat');
    if (!ok) { dirty = true; W.rev = LREV; toast(t('ui.toast.saveFail')); return; }
    LREV = W.rev;
  }
  function savePins() { vset('pwl_scene', PINS, 'chat'); }
  async function saveSettings() { LS.set('pwl_settings', S); await vset('pwl_settings', S, 'global'); }

  /* ── помощники вида ──────────────────────────────────────────────────── */
  function P(id) { return W.people[id]; }
  function mainId() {
    var m = PWL.mains(W);
    return m.filter(function (id) { return P(id).flags.char; })[0] || m[0] || null;
  }
  function isMain(id) { var p = P(id); return !!(p && (p.flags.char || p.flags.player)); }
  function sw(on) { return '<span class="pwl-sw' + (on ? ' on' : '') + '"></span>'; }
  function opt(act, label, small, on, extra) { return '<div class="pwl-row" data-act="' + act + '"' + (extra || '') + '><div class="pwl-lb">' + esc(label) + (small ? '<small>' + esc(small) + '</small>' : '') + '</div>' + sw(on) + '</div>'; }
  function chip(act, val, label, on) { return '<span class="pwl-chip' + (on ? ' on' : '') + '" data-act="' + act + '" data-v="' + esc(val) + '">' + esc(label) + '</span>'; }
  function btn(act, label, cls, extra) { return '<span class="pwl-btn' + (cls ? ' ' + cls : '') + '" data-act="' + act + '"' + (extra || '') + '>' + esc(label) + '</span>'; }
  function field(lbl, attr, val, ph, type) {
    return '<label class="pwl-l">' + esc(lbl) + '</label><input ' + attr + ' value="' + esc(val == null ? '' : val) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : '') + (type ? ' type="' + type + '" inputmode="numeric"' : '') + '>';
  }
  function ava(id) {
    var p = P(id), c = (p.name.replace(/^(леди|лорд|сэр|lady|lord|sir)\s+/i, '').charAt(0) || '?').toUpperCase();
    return '<span class="pwl-ava ' + p.sex + (p.alive ? '' : ' dead') + '">' + esc(c) + '</span>';
  }
  function seenText(id) {
    if (SCENE.indexOf(id) >= 0) return t('ui.seen.now');
    var n = SEEN[id];
    if (n == null) return t('ui.seen.never');
    return n === 0 ? t('ui.seen.last') : t('ui.seen.ago', { n: n });
  }
  function relToMain(id) {
    var m = mainId();
    if (!m || m === id) return '';
    var l = PWL.label(W, m, id, LANG);
    return l ? t('ui.relOf', { rel: l, name: P(m).name }) : '';
  }
  function whyUi(c) {
    return c.why.map(function (x) {
      if (x.k === 'place') return t('ui.why.place', { v: x.v });
      if (x.k === 'seat') return t('ui.why.seat', { v: x.v });
      if (x.k === 'tie') return P(x.id) ? t('ui.relOf', { rel: PWL.label(W, x.id, c.id, LANG), name: P(x.id).name }) : '';
      if (x.k === 'thread') return t('ui.why.thread', { v: x.v });
      if (x.k === 'long') return x.n == null ? t('ui.why.never') : t('ui.why.long');
      if (x.k === 'role') return t('ui.why.role', { v: x.v });
      if (x.k === 'goal') return t('ui.why.goal', { g: t('ui.goal.' + x.g, { name: x.id && P(x.id) ? P(x.id).name : '' }) });
      if (x.k === 'knows') return t('ui.why.knows', { name: P(x.id) ? P(x.id).name : '?' });
      return '';
    }).filter(Boolean);
  }
  function dirBlock() {
    if (S.dir === 'off' && !DIR.cue) return '';
    var pct = Math.round(Math.min(100, (+DIR.p || 0) / PWL.LIMIT * 100));
    var ripe = S.dir !== 'off' && pct >= 100;
    var mode = S.dir === 'auto' ? t('ui.dir.autoNow', { n: pct }) : S.dir === 'hint' ? (ripe ? t('ui.dir.ripe') : t('ui.dir.hintNow', { n: pct })) : '';
    var h = '<div class="pwl-dir' + (ripe ? ' ripe' : '') + '"><div class="pwl-dirhd"><b>🎬 ' + esc(t('ui.dir.title')) + '</b><small>' + esc(mode) + '</small></div>';
    if (S.dir !== 'off') h += '<div class="pwl-bar"><i style="width:' + pct + '%"></i></div>';
    if (DIR.cue && P(DIR.cue)) h += '<div class="pwl-row cue" data-act="person" data-v="' + DIR.cue + '">' + ava(DIR.cue) + '<div class="pwl-lb">' + esc(P(DIR.cue).name) + '<small>' + esc(t('ui.dir.waiting')) + '</small></div><span class="pwl-off" data-act="cue" data-v="' + DIR.cue + '">✕</span></div>';
    var list = CANDS.filter(function (c) { return c.id !== DIR.cue; }).slice(0, UI.dirAll ? 8 : 3);
    if (!list.length && !DIR.cue) h += '<p class="pwl-hint">' + esc(t('ui.dir.none')) + '</p>';
    h += list.map(function (c) {
      return '<div class="pwl-row" data-act="person" data-v="' + c.id + '">' + ava(c.id) + '<div class="pwl-lb">' + esc(P(c.id).name) + '<small class="pwl-why">' + esc(whyUi(c).slice(0, 3).join(' · ')) + '</small></div><span class="pwl-cue" data-act="cue" data-v="' + c.id + '" title="' + esc(t('ui.dir.cue')) + '">🎬</span></div>';
    }).join('');
    if (CANDS.length > 3 && !(DIR.cue && CANDS.length === 4)) h += '<div class="pwl-more" data-act="dirall">' + esc(UI.dirAll ? t('ui.dir.less') : t('ui.dir.more', { n: Math.min(8, CANDS.length) })) + '</div>';
    return h + '</div>';
  }
  function houseName(hid) { return hid && W.houses[hid] ? W.houses[hid].name : ''; }
  function sortPeople(ids) {
    return ids.sort(function (a, b) {
      var ma = isMain(a) ? 0 : 1, mb = isMain(b) ? 0 : 1;
      if (ma !== mb) return ma - mb;
      var sa = SCENE.indexOf(a), sb = SCENE.indexOf(b);
      if ((sa >= 0) !== (sb >= 0)) return sa >= 0 ? -1 : 1;
      return P(a).name.localeCompare(P(b).name);
    });
  }
  function matchQ(id, q) {
    if (!q) return true;
    var p = P(id);
    return [p.name, p.aliases.join(' '), p.role.job, p.role.title, p.role.faction, p.role.place, houseName(p.house), p.traits.join(' ')].join(' ').toLowerCase().indexOf(q) >= 0;
  }
  function longAgo(id) { var p = P(id); return p.flags.important && !isMain(id) && p.alive && SCENE.indexOf(id) < 0 && (SEEN[id] == null || SEEN[id] >= LONG_AGO); }
  function personRow(id, act) {
    var p = P(id), badges = '';
    if (p.ill && p.alive) badges += '🤒';
    if (!p.alive) badges += '🕯️';
    if (isMain(id)) badges += '🎭';
    else if (p.flags.important) badges += '⭐';
    if (p.house && W.houses[p.house] && W.houses[p.house].head === id) badges += '👑';
    var sub = [relToMain(id), [p.role.title, p.role.job].filter(Boolean).join(' '), houseName(p.house)].filter(Boolean).join(' · ');
    var pin = isMain(id) || act ? '' : '<span class="pwl-pin' + (PINS.indexOf(id) >= 0 ? ' on' : '') + '" data-act="pin" data-v="' + id + '" title="' + esc(t('ui.pin')) + '">📍</span>';
    return '<div class="pwl-row" data-act="' + (act || 'person') + '" data-v="' + id + '">' + ava(id) +
      '<div class="pwl-lb">' + esc(p.name) + (badges ? ' <span class="pwl-bd">' + badges + '</span>' : '') +
      (sub ? '<small class="pwl-one">' + esc(sub) + '</small>' : '') +
      '<small class="pwl-seen' + (SCENE.indexOf(id) >= 0 ? ' now' : longAgo(id) ? ' long' : '') + '">' + esc(seenText(id)) + '</small></div>' + pin + '</div>';
  }

  /* ── экраны ──────────────────────────────────────────────────────────── */


  function intrigueBlock(id) {
    var p = P(id), hero = heroId(), h = '<div class="pwl-sub">' + esc(t('ui.sec.intrigue')) + '</div>';
    var secs = W.secrets.filter(function (x) { return x.about.indexOf(id) >= 0 && !(x.ev && (W.events.filter(function (e) { return e.id === x.ev; })[0] || {}).t === 'plot'); }).slice(-8).reverse();
    if (secs.length) h += '<div class="pwl-card">' + secs.map(function (x) {
      var others = x.known.filter(function (k) { return x.about.indexOf(k) < 0 && P(k); }).map(function (k) { return P(k).name; });
      var hk = hero && x.known.indexOf(hero) >= 0;
      var meta = [x.out ? t('ui.sec.out') : others.length ? t('ui.sec.knownBy', { names: others.slice(0, 4).join(', ') }) : t('ui.sec.nobody')];
      if (hero && x.about.indexOf(hero) < 0 && !x.out) meta.push(hk ? t('ui.sec.heroKnows', { name: P(hero).name }) : t('ui.sec.heroNot', { name: P(hero).name }));
      return '<div class="pwl-row' + (x.out ? ' dim' : '') + '"><span class="pwl-ic sv' + (x.out ? '' : ' lock') + '">' + svg(x.out ? 'bubble' : 'lock') + '</span><div class="pwl-lb">' + esc(PWL.secretText(W, x, LANG)) + '<small>' + esc(meta.join(' · ')) + '</small></div>' +
        (hero && x.about.indexOf(hero) < 0 && !x.out ? '<span class="pwl-off" data-act="secknow" data-v="' + x.id + '" title="' + esc(t('ui.sec.toggle')) + '">' + svg(hk ? 'eye' : 'close') + '</span>' : '') +
        '<span class="pwl-off" data-act="secdel" data-v="' + x.id + '">' + svg('trash') + '</span></div>';
    }).join('') + '</div>';
    h += '<div class="pwl-row2"><div class="pwl-col"><input id="pwl-secret" placeholder="' + esc(t('ui.ph.secret')) + '"></div><span class="pwl-ibtn" data-act="secadd">' + svg('plus') + '</span></div>';
    if (isMain(id)) return h + '<p class="pwl-hint">' + esc(t('ui.hint.secretsHero')) + '</p>';
    var gs = W.goals.filter(function (g) { return g.owner === id; }).slice(-4).reverse();
    if (gs.length) h += '<div class="pwl-card">' + gs.map(function (g) {
      var tn = g.target && P(g.target) ? P(g.target).name : '';
      var st = g.end ? t('ui.goal.end.' + g.end) : g.pr >= 100 ? t('ui.goal.ready') : g.pr + '%';
      return '<div class="pwl-row' + (g.end ? ' dim' : '') + '"><span class="pwl-ic sv goal">' + svg('mask') + '</span><div class="pwl-lb">' + esc(t('ui.goal.' + g.t, { name: tn })) + '<small>' + esc(st) + '</small>' + (g.end ? '' : '<div class="pwl-bar sm"><i style="width:' + g.pr + '%"></i></div>') + '</div>' + (g.end ? '' : '<span class="pwl-off" data-act="goaldel" data-v="' + g.id + '">' + svg('trash') + '</span>') + '</div>';
    }).join('') + '</div>';
    if (!W.goals.some(function (g) { return g.owner === id && !g.end; }) && p.alive) {
      var kids = PWL.childrenOf(W, id).filter(function (c) { return P(c) && P(c).alive && !isMain(c); });
      h += '<div class="pwl-chips">' + ['revenge', 'win', 'rise'].concat(kids.length ? ['match'] : []).map(function (g) { return chip('goaladd', g, '+ ' + t('ui.goal.btn.' + g), false); }).join('') + '</div>';
    }
    return h + '<p class="pwl-hint">' + esc(t('ui.hint.intrigue')) + '</p>';
  }

    /* ════════════════════════════════════════════════════════════════════════
     Новый облик: значки, гербы, главный экран с плитками, древо, история.
     Вставляется сборкой внутрь panel.js на место метки /*@UI@*\/.
     ════════════════════════════════════════════════════════════════════════ */
  var REDUCED = false;
  try { REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var IC = {
    crown: '<path d="M4 18.5h16M5 15.5 3.6 7.4l5 3.6L12 5l3.4 6 5-3.6L19 15.5z"/>',
    eye: '<path d="M2.5 12S6 6.2 12 6.2 21.5 12 21.5 12 18 17.8 12 17.8 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
    lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2.2"/><path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5M12 14.4v2"/>',
    flame: '<path d="M12 21c-3.8 0-6.4-2.6-6.4-6.1 0-3.3 2.4-5.2 3.4-8.6 1.7 1.3 2.4 2.9 2.4 4.5.9-.9 1.6-2.3 1.7-3.9 2.6 2.1 4.3 4.9 4.3 8 0 3.5-2.6 6.1-5.4 6.1z"/>',
    mask: '<path d="M4 6.2c5.2 2 10.8 2 16 0v5.2c0 5-3.6 8.8-8 8.8s-8-3.8-8-8.8z"/><path d="M7.8 11.2c.8-.7 2-.7 2.8 0M13.4 11.2c.8-.7 2-.7 2.8 0M9 15.3c1.9 1.3 4.1 1.3 6 0"/>',
    bubble: '<path d="M4 5h16v11H10l-5 4v-4H4z"/><path d="M8.4 10.6h.01M12 10.6h.01M15.6 10.6h.01"/>',
    swords: '<path d="M4.5 4.5 14 14M19.5 4.5 10 14M7 15.5l1.5 1.5M17 15.5 15.5 17M3.5 20.5l3-3M20.5 20.5l-3-3"/>',
    heart: '<path d="M12 20s-7.2-4.4-7.2-10.1A4.1 4.1 0 0 1 12 7.3a4.1 4.1 0 0 1 7.2 2.6C19.2 15.6 12 20 12 20z"/>',
    drop: '<path d="M12 3.2c3 4.3 6 7.5 6 10.9a6 6 0 0 1-12 0c0-3.4 3-6.6 6-10.9z"/>',
    candle: '<path d="M9.2 21h5.6V11H9.2zM12 11V8.4"/><path d="M12 3.2c1.4 1.5 1.4 3 0 4.1-1.4-1.1-1.4-2.6 0-4.1z"/>',
    spark: '<path d="M12 2.8l1.9 6.3 6.3 1.9-6.3 1.9L12 19.2l-1.9-6.3L3.8 11l6.3-1.9z"/><path d="M19 17.5v3M17.5 19h3"/>',
    star: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.8L12 17l-5.2 2.7 1-5.8-4.3-4.2 5.9-.8z"/>',
    clock: '<circle cx="12" cy="12" r="8.4"/><path d="M12 7.6V12l3 1.9"/>',
    people: '<circle cx="9" cy="8.2" r="3.1"/><path d="M3 19.5c0-3.4 2.7-5.6 6-5.6s6 2.2 6 5.6"/><circle cx="17.2" cy="9.2" r="2.4"/><path d="M15.8 14c2.9.1 5.2 2 5.2 5"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.2"/><path d="m20 20-4.6-4.6"/>',
    gear: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
    back: '<path d="M15 4.5 7.5 12 15 19.5"/>',
    close: '<path d="m6.5 6.5 11 11M17.5 6.5l-11 11"/>',
    edit: '<path d="M4 20h4.2L19.4 8.8l-4.2-4.2L4 15.8z"/><path d="m13.6 6.2 4.2 4.2"/>',
    scroll: '<path d="M7.5 4H18v12.5a3.5 3.5 0 0 1-3.5 3.5H6.5A3.5 3.5 0 0 1 3 16.5V16h11v.5a3.5 3.5 0 0 0 3.5 3.5"/><path d="M7.5 4A2.5 2.5 0 0 0 5 6.5V16M10 8.5h5M10 12h5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    book: '<path d="M4 5.5c2.7-1 5.3-1 8 .8 2.7-1.8 5.3-1.8 8-.8v13c-2.7-1-5.3-1-8 .8-2.7-1.8-5.3-1.8-8-.8z"/><path d="M12 6.3v13"/>',
    ring: '<circle cx="9" cy="13.5" r="5"/><circle cx="15" cy="13.5" r="5"/>',
    chev: '<path d="m9 5 7 7-7 7"/>'
  };
  function svg(name, cls) { return '<svg class="pwl-svg' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (IC[name] || '') + '</svg>'; }

  /* Значки над портретами: что с человеком сейчас */
  var BADGE = [
    { k: 'main', i: 'spark', c: '#e6c36f' },
    { k: 'scene', i: 'eye', c: '#74d3bf' },
    { k: 'affair', i: 'flame', c: '#f2709c' },
    { k: 'scheme', i: 'mask', c: '#b48cf2' },
    { k: 'secret', i: 'lock', c: '#f0a35a' },
    { k: 'gossip', i: 'bubble', c: '#6fb6f2' },
    { k: 'feud', i: 'swords', c: '#ef6767' },
    { k: 'love', i: 'heart', c: '#ff9ab8' },
    { k: 'ill', i: 'drop', c: '#8fd17a' },
    { k: 'dead', i: 'candle', c: '#a3a1b4' }
  ];
  var BMAP = {};
  BADGE.forEach(function (b) { BMAP[b.k] = b; });
  var GOSSIP_RE = /сплет|болтл|gossip|chatter|八卦/;
  function badgesOf(id) {
    var p = P(id), out = [];
    if (!p) return out;
    if (!p.alive) return ['dead'];
    if (isMain(id)) out.push('main');
    if (SCENE.indexOf(id) >= 0) out.push('scene');
    var aff = false, love = false;
    PWL.partnersOf(W, id).forEach(function (o) { if (PWL.relOf(W, id, o).affair) aff = true; else love = true; });
    if (aff) out.push('affair');
    if (W.goals.some(function (g) { return g.owner === id && !g.end; })) out.push('scheme');
    if (W.secrets.some(function (x) { return !x.out && x.about.indexOf(id) >= 0; })) out.push('secret');
    if (GOSSIP_RE.test(p.traits.join(' ').toLowerCase()) || W.secrets.some(function (x) { return !x.out && x.about.indexOf(id) < 0 && x.known.indexOf(id) >= 0; })) out.push('gossip');
    if (Object.keys(W.people).some(function (o) { return o !== id && PWL.relOf(W, id, o).rival >= 60; })) out.push('feud');
    if (love) out.push('love');
    if (p.ill) out.push('ill');
    return out;
  }
  function badgeDots(keys, max) {
    var show = keys.slice(0, max || 3), more = keys.length - show.length;
    return '<span class="pwl-bdg">' + show.map(function (k) { var b = BMAP[k]; return '<i style="--c:' + b.c + '" title="' + esc(t('ui.badge.' + k)) + '">' + svg(b.i) + '</i>'; }).join('') + (more > 0 ? '<i class="more">+' + more + '</i>' : '') + '</span>';
  }
  function badgeChips(keys) {
    return keys.map(function (k) { var b = BMAP[k]; return '<span class="pwl-bchip" style="--c:' + b.c + '">' + svg(b.i) + esc(t('ui.badge.' + k)) + '</span>'; }).join('');
  }

  /* Цвет и герб дома */
  var HUES = ['#a8364f', '#2f7d5f', '#3060a8', '#7d4cab', '#b47a2a', '#2a8b96', '#ab4a73', '#5d6a80', '#8a6a2a', '#456b2f'];
  function houseColor(hid) {
    var H = W.houses[hid];
    if (!H) return '#5d6a80';
    var s = H.name, h = 7;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 9973;
    return HUES[h % HUES.length];
  }
  function monogram(name) {
    var w = String(name || '?').replace(/^(дом|семья|род|клан|house|family|clan|the)\s+/i, '').replace(/家族$/, '');
    return (w.trim().charAt(0) || '?').toUpperCase();
  }
  function crest(hid, size) {
    var c = houseColor(hid);
    return '<span class="pwl-crest" style="--hc:' + c + ';--cs:' + (size || 44) + 'px"><svg viewBox="0 0 24 26" aria-hidden="true"><path class="sh" d="M12 1.5 21 4.6v6.8c0 6-3.9 10.6-9 12.6-5.1-2-9-6.6-9-12.6V4.6z"/><path class="hl" d="M12 3.4 19.2 6v5.4c0 4.9-3.1 8.7-7.2 10.4"/></svg><b>' + esc(monogram(W.houses[hid] ? W.houses[hid].name : '?')) + '</b></span>';
  }
  function face(id, opt) {
    opt = opt || {};
    var p = P(id), hc = p.house && W.houses[p.house] ? houseColor(p.house) : 'rgba(255,255,255,.25)';
    var c = (p.name.replace(/^(леди|лорд|сэр|брат|сестра|lady|lord|sir|brother|sister)\s+/i, '').charAt(0) || '?').toUpperCase();
    return '<span class="pwl-face ' + p.sex + (p.alive ? '' : ' dead') + (opt.big ? ' big' : '') + (opt.out ? ' out' : '') + '" style="--hc:' + hc + '">' + esc(c) + '</span>';
  }

  /* ── главный экран: плитки ── */
  var TILES = [
    { k: 'scene', i: 'eye', c: '#74d3bf' },
    { k: 'important', i: 'star', c: '#e6c36f' },
    { k: 'long', i: 'clock', c: '#f0a35a' },
    { k: 'all', i: 'people', c: '#b9b4e6' }
  ];
  function tileIds(k) {
    var ids = Object.keys(W.people);
    if (k === 'scene') return sortPeople(ids.filter(function (id) { return SCENE.indexOf(id) >= 0 && !isMain(id); }));
    if (k === 'important') return sortPeople(ids.filter(function (id) { return isMain(id) || P(id).flags.important; }));
    if (k === 'long') return sortPeople(ids.filter(longAgo));
    var q = (UI.q || '').trim().toLowerCase();
    return sortPeople(ids.filter(function (id) { return matchQ(id, q); }));
  }
  function facesGrid(ids) {
    if (!ids.length) return '<p class="pwl-hint pwl-empty2">' + esc(t('ui.tile.none')) + '</p>';
    return '<div class="pwl-faces">' + ids.map(function (id, i) {
      var p = P(id), sub = relToMain(id) || [p.role.title, p.role.job].filter(Boolean).join(' ');
      return '<div class="pwl-fc" data-act="person" data-v="' + id + '" style="--i:' + Math.min(i, 16) + '">' + badgeDots(badgesOf(id), 3) + face(id) + '<b>' + esc(p.name) + '</b>' + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</div>';
    }).join('') + '</div>';
  }
  function drawerInner(k) {
    var h = '';
    if (k === 'all') h += '<div class="pwl-search">' + svg('search') + '<input data-q="1" value="' + esc(UI.q || '') + '" placeholder="' + esc(t('ui.search')) + '"></div>';
    return h + '<div id="pwl-dfaces">' + facesGrid(tileIds(k)) + '</div>';
  }
  function viewHome() {
    if (Object.keys(W.people).length - PWL.mains(W).length < 1 && !Object.keys(W.houses).length) return (FULL || G.pending.length ? gossipBlock() : '') + (FULL && !FULL.done ? '' : emptyHome());
    var npc = SCENE.filter(function (id) { return !isMain(id); }).slice(0, S.max);
    var st = !S.on ? t('ui.status.off') : npc.length ? t('ui.status.scene', { names: npc.map(function (id) { return P(id).name; }).join(', ') }) : t('ui.status.empty');
    var h = '<div class="pwl-status' + (npc.length && S.on ? ' armed' : '') + '" data-act="note">' + svg('eye') + '<span class="pwl-sttx">' + esc(st) + '</span>' + svg('chev', 'sm') + '</div>';
    h += gossipBlock();
    h += dirBlock();
    var ids = Object.keys(W.people);
    h += '<div class="pwl-sec">' + esc(t('ui.sec.people')) + '</div><div class="pwl-tiles">' + TILES.map(function (T0, i) {
      var list = tileIds(T0.k), n = T0.k === 'all' ? ids.length : list.length;
      return '<div class="pwl-tile' + (UI.tile === T0.k ? ' on' : '') + (n ? '' : ' zero') + '" data-act="tile" data-v="' + T0.k + '" style="--c:' + T0.c + ';--i:' + i + '"><span class="ic">' + svg(T0.i) + '</span><b>' + esc(t('ui.tile.' + T0.k)) + '</b><em>' + n + '</em>' +
        '<span class="mini">' + list.slice(0, 4).map(function (id) { return face(id); }).join('') + '</span></div>';
    }).join('') + '</div>';
    h += '<div class="pwl-drawer' + (UI.tile ? ' open' : '') + '" id="pwl-drawer"><div class="in">' + (UI.tile ? drawerInner(UI.tile) : '') + '</div></div>';

    var hs = Object.keys(W.houses);
    h += '<div class="pwl-sec">' + esc(t('ui.sec.houses')) + '</div><div class="pwl-houses">' + hs.map(function (hid, i) {
      var H = W.houses[hid], mem = ids.filter(function (id) { return P(id).house === hid; });
      return '<div class="pwl-htile" data-act="house" data-v="' + hid + '" style="--hc:' + houseColor(hid) + ';--i:' + i + '">' + crest(hid, 40) + '<b>' + esc(H.name) + '</b><small>' + esc(t('ui.house.members', { n: mem.length })) + (H.head && P(H.head) ? ' · ' + esc(P(H.head).name) : '') + '</small></div>';
    }).join('') + '<div class="pwl-htile add" data-act="newhouse">' + svg('plus') + '<b>' + esc(t('ui.house.add')) + '</b></div></div>';

    var last = W.events.filter(function (e) { return !e.minor; }).slice(-2).reverse();
    h += '<div class="pwl-sec">' + esc(t('ui.head.chron')) + '</div><div class="pwl-chprev" data-act="go" data-v="chron"><div class="hd">' + svg('scroll') + '<b>' + esc(fmtDate(W.clock.day)) + '</b>' + svg('chev', 'sm') + '</div>' +
      (last.length ? last.map(function (e) { return '<p><span>' + (EVI[e.t] || '•') + '</span>' + esc(e.v.flavor || PWL.evText(W, e, LANG)) + '</p>'; }).join('') : '<p class="mut">' + esc(t('ui.chron.empty')) + '</p>') + '</div>';
    h += '<div class="pwl-row2">' + btn('newp', t('ui.btn.add'), 'main') + btn('go', t('ui.btn.lore'), '', ' data-v="lore"') + '</div>';
    if (ids.length <= 2) h += '<p class="pwl-hint">' + esc(t('ui.hint.start')) + '</p>';
    return h;
  }
  /* Плитка раскрывается без перерисовки экрана, чтобы шторка плавно ехала */
  function toggleTile(k) {
    var d = $('pwl-drawer');
    var same = UI.tile === k;
    UI.tile = same ? null : k;
    if (UI.tile !== 'all') UI.q = '';
    [].forEach.call(document.querySelectorAll('#pwl-body .pwl-tile'), function (el) { el.classList.toggle('on', el.getAttribute('data-v') === UI.tile); });
    if (!d) { render(true); return; }
    var inn = d.querySelector('.in');
    if (same) { d.classList.remove('open'); return; }
    inn.innerHTML = drawerInner(k);
    if (!d.classList.contains('open')) { void d.offsetWidth; d.classList.add('open'); }
    else { inn.classList.remove('swap'); void inn.offsetWidth; inn.classList.add('swap'); }
  }

  /* ── дом: герб и древо ── */
  var NW = 86, NG = 10, ROWH = 150, TOPB = 18;
  function treeLayout(nodes) {
    function measure(n) {
      var self = n.ghost ? 60 : (1 + n.spouses.length) * NW + n.spouses.length * 14;
      n.kids.forEach(measure);
      var kw = n.kids.reduce(function (a, k) { return a + k.w; }, 0) + Math.max(0, n.kids.length - 1) * NG;
      n.self = self; n.w = Math.max(self, kw); n.kw = kw;
    }
    var pos = [], links = [], maxD = 0;
    function place(n, x, d, y) {
      maxD = Math.max(maxD, y + ROWH);
      var cx = x + n.w / 2, left = cx - n.self / 2;
      var members = n.ghost ? [] : [n.id].concat(n.spouses);
      members.forEach(function (id, i) { pos.push({ id: id, x: left + i * (NW + 14), y: y, out: i > 0 ? P(id).house !== n.hid : n.out, d: d }); });
      if (n.ghost) pos.push({ ghost: true, x: cx - 30, y: y + 4, d: d });
      if (members.length > 1) links.push({ ring: true, x1: left + NW - 18, x2: left + NW + 14 + 18, y: y + TOPB + 26, cx: left + NW + 7 });
      var kx = x + (n.w - n.kw) / 2, from = { x: members.length > 1 ? left + NW + 7 : cx, y: n.ghost ? y + 30 : y + TOPB + 54 };
      var kids = [];
      var step = n.ghost ? 62 : ROWH;
      n.kids.forEach(function (k) { var kc = place(k, kx, d + 1, y + step); kids.push(kc); kx += k.w + NG; });
      if (kids.length) links.push({ from: from, kids: kids, mid: y + step - 22 });
      return { x: n.ghost ? cx : left + NW / 2, y: y + TOPB };
    }
    nodes.forEach(measure);
    var total = nodes.reduce(function (a, n) { return a + n.w; }, 0) + Math.max(0, nodes.length - 1) * NG * 2, x = 0;
    nodes.forEach(function (n) { place(n, x, 0, 0); x += n.w + NG * 2; });
    return { pos: pos, links: links, w: total, h: maxD - 10 };
  }
  function tagHid(nodes, hid) { nodes.forEach(function (n) { n.hid = hid; tagHid(n.kids, hid); }); return nodes; }
  function treeCanvas(hid) {
    var L = treeLayout(tagHid(PWL.houseTree(W, hid), hid)), pad = 14, W0 = L.w + pad * 2, H0 = L.h + 6;
    var lines = L.links.map(function (k) {
      if (k.ring) return '<path class="rg" pathLength="1" d="M' + (k.x1 + pad) + ' ' + k.y + 'H' + (k.x2 + pad) + '"/>';
      var s = 'M' + (k.from.x + pad) + ' ' + k.from.y + 'V' + k.mid;
      var xs = k.kids.map(function (c) { return c.x + pad; });
      s += 'M' + Math.min.apply(null, xs.concat(k.from.x + pad)) + ' ' + k.mid + 'H' + Math.max.apply(null, xs.concat(k.from.x + pad));
      k.kids.forEach(function (c) { s += 'M' + (c.x + pad) + ' ' + k.mid + 'V' + c.y; });
      return '<path pathLength="1" d="' + s + '"/>';
    }).join('');
    var rings = L.links.filter(function (k) { return k.ring; }).map(function (k) { return '<span class="pwl-wed" style="left:' + (k.cx + pad - 8) + 'px;top:' + (k.y - 8) + 'px">' + svg('ring') + '</span>'; }).join('');
    var head = W.houses[hid] && W.houses[hid].head;
    var nodes = L.pos.map(function (n, i) {
      if (n.ghost) return '<span class="pwl-gh" style="left:' + (n.x + pad) + 'px;top:' + n.y + 'px;--i:' + (n.d * 3) + '">' + esc(t('ui.tree.sibs')) + '</span>';
      var p = P(n.id);
      return '<div class="pwl-node' + (n.out ? ' out' : '') + '" data-act="person" data-v="' + n.id + '" style="left:' + (n.x + pad) + 'px;top:' + n.y + 'px;--i:' + (n.d * 3 + (i % 3)) + '">' +
        badgeDots(badgesOf(n.id), 3) + '<span class="av">' + face(n.id, { out: n.out }) + (head === n.id ? '<span class="hd">' + svg('crown') + '</span>' : '') + '</span>' +
        '<b>' + esc(p.name) + '</b>' + (p.age != null ? '<small>' + p.age + '</small>' : '') + '</div>';
    }).join('');
    return '<div class="pwl-treebox" id="pwl-treebox"><div class="pwl-canvas" style="width:' + W0 + 'px;height:' + H0 + 'px"><svg class="pwl-lines" width="' + W0 + '" height="' + H0 + '">' + lines + '</svg>' + rings + nodes + '</div></div>';
  }
  function viewHouse2() {
    var hid = UI.hid, H = W.houses[hid];
    if (!H) { UI.view = 'people'; return viewHome(); }
    var mem = Object.keys(W.people).filter(function (id) { return P(id).house === hid; });
    var h = '<div class="pwl-hhero" style="--hc:' + houseColor(hid) + '">' + crest(hid, 64) + '<div><b>' + esc(H.name) + '</b>' + (H.motto ? '<i>«' + esc(H.motto) + '»</i>' : '') +
      '<small>' + esc([H.seat, H.head && P(H.head) ? t('ui.f.head') + ': ' + P(H.head).name : '', t('ui.house.members', { n: mem.length })].filter(Boolean).join(' · ')) + '</small></div></div>';
    if (!mem.length) return h + '<div class="pwl-empty">' + esc(t('ui.hint.houseEmpty')) + '</div>' + btn('member', t('ui.btn.member'), 'main');
    h += treeCanvas(hid);
    var used = {};
    mem.forEach(function (id) { badgesOf(id).forEach(function (k) { used[k] = 1; }); });
    PWL.houseTree(W, hid).forEach(function walk(n) { (n.spouses || []).forEach(function (s) { badgesOf(s).forEach(function (k) { used[k] = 1; }); }); (n.kids || []).forEach(walk); });
    var keys = BADGE.map(function (b) { return b.k; }).filter(function (k) { return used[k]; });
    if (keys.length) h += '<div class="pwl-legend">' + badgeChips(keys) + '</div>';
    h += '<p class="pwl-hint">' + esc(t('ui.tree.hint')) + '</p>';
    h += btn('member', t('ui.btn.member'), '');
    return h;
  }
  function houseEditSheet() {
    var hid = UI.hid, H = W.houses[hid], mem = Object.keys(W.people).filter(function (id) { return P(id).house === hid; });
    var h = field(t('ui.f.hname'), 'data-hf="name"', H.name);
    h += '<div class="pwl-row2"><div class="pwl-col">' + field(t('ui.f.seat'), 'data-hf="seat"', H.seat, t('ui.ph.seat')) + '</div><div class="pwl-col"><label class="pwl-l">' + esc(t('ui.f.head')) + '</label><select data-hf="head"><option value="">—</option>' +
      mem.map(function (id) { return '<option value="' + id + '"' + (H.head === id ? ' selected' : '') + '>' + esc(P(id).name) + '</option>'; }).join('') + '</select></div></div>';
    h += field(t('ui.f.motto'), 'data-hf="motto"', H.motto, t('ui.ph.motto'));
    h += btn('delh', UI.confirm === 'h:' + hid ? t('ui.btn.sure') : t('ui.btn.delHouse'), 'danger');
    return h;
  }

  /* ── история человека ── */
  function nowLines(id) {
    var p = P(id), out = [];
    if (!p.alive) out.push({ i: 'candle', c: BMAP.dead.c, tx: t('ui.now.dead') });
    PWL.spousesOf(W, id).forEach(function (o) { if (P(o)) out.push({ i: 'ring', c: '#e6c36f', tx: t('ui.now.married', { name: P(o).name }), id: o }); });
    PWL.partners(W, id, 'betrothed').forEach(function (o) { if (P(o)) out.push({ i: 'ring', c: '#e6c36f', tx: t('ui.now.betrothed', { name: P(o).name }), id: o }); });
    PWL.partnersOf(W, id).forEach(function (o) {
      var aff = PWL.relOf(W, id, o).affair;
      out.push({ i: aff ? 'flame' : 'heart', c: aff ? BMAP.affair.c : BMAP.love.c, tx: t(aff ? 'ui.now.affair' : 'ui.now.seeing', { name: P(o).name }), id: o });
    });
    Object.keys(W.people).forEach(function (o) { if (o !== id && PWL.relOf(W, id, o).rival >= 60) out.push({ i: 'swords', c: BMAP.feud.c, tx: t('ui.now.enemy', { name: P(o).name }), id: o }); });
    if (p.ill && p.alive) out.push({ i: 'drop', c: BMAP.ill.c, tx: t('ui.now.ill') });
    if (p.role.place) out.push({ i: 'eye', c: '#9fa3c8', tx: t('ui.now.place', { v: p.role.place }) });
    p.threads.forEach(function (x) { out.push({ i: 'scroll', c: '#d9b765', tx: x }); });
    return out;
  }
  function familyChips(id) {
    var direct = {}, list = [];
    W.kin.forEach(function (e) { if (e.a === id) direct[e.b] = 1; if (e.b === id) direct[e.a] = 1; });
    Object.keys(W.people).forEach(function (o) {
      if (o === id) return;
      var l = PWL.label(W, id, o, LANG);
      if (l) list.push({ o: o, l: l, d: direct[o] ? 0 : 1 });
    });
    list.sort(function (a, b) { return a.d - b.d; });
    return list;
  }
  function viewStory() {
    var id = UI.pid, p = P(id);
    if (!p) { UI.view = 'people'; return viewHome(); }
    var hc = p.house && W.houses[p.house] ? houseColor(p.house) : '#5d6a80';
    var role = [p.role.title, p.role.job].filter(Boolean).join(' · ');
    var h = '<div class="pwl-shero" style="--hc:' + hc + '">' + face(id, { big: true }) + '<div class="nm"><b>' + esc(p.name) + '</b>' +
      '<small>' + esc([role, p.age != null ? t('ui.story.age', { n: p.age }) : ''].filter(Boolean).join(' · ')) + '</small>' +
      (p.house && W.houses[p.house] ? '<span class="hs" data-act="house" data-v="' + p.house + '">' + crest(p.house, 18) + esc(W.houses[p.house].name) + '</span>' : '') + '</div></div>';
    var bk = badgesOf(id);
    if (bk.length) h += '<div class="pwl-legend">' + badgeChips(bk) + '</div>';
    if (!isMain(id) && p.alive && !p.flags.nodir) h += btn('cue', DIR.cue === id ? t('ui.dir.cueOn') : t('ui.dir.cueBtn'), DIR.cue === id ? 'main' : 'cue', ' data-v="' + id + '"');
    if (PWL.playable(W, id)) h += btn('play', t('ui.play.btn', { name: p.name }), 'play');
    if (UI.why && UI.why.id === id && UI.why.list.length) h += '<p class="pwl-hint">🎬 ' + esc(UI.why.list.join(' · ')) + '</p>';
    if (p.bio) h += '<blockquote class="pwl-quote">' + esc(p.bio) + '</blockquote>';

    var fam = familyChips(id);
    if (fam.length) {
      var lim = UI.famAll ? fam.length : 8;
      h += '<div class="pwl-sec">' + esc(t('ui.sec.family')) + '</div><div class="pwl-kin">' + fam.slice(0, lim).map(function (x, i) {
        return '<span class="pwl-kc' + (x.d ? ' far' : '') + '" data-act="person" data-v="' + x.o + '" style="--i:' + i + '">' + face(x.o) + '<span><small>' + esc(x.l) + '</small><b>' + esc(P(x.o).name) + '</b></span></span>';
      }).join('') + (fam.length > lim ? '<span class="pwl-kc more" data-act="famall">' + esc(t('ui.story.more', { n: fam.length - lim })) + '</span>' : '') + '</div>';
    }
    var now = nowLines(id);
    if (now.length) h += '<div class="pwl-sec">' + esc(t('ui.story.now')) + '</div><div class="pwl-now">' + now.map(function (x) {
      return '<div' + (x.id ? ' data-act="person" data-v="' + x.id + '"' : '') + '><i style="--c:' + x.c + '">' + svg(x.i) + '</i><span>' + esc(x.tx) + '</span></div>';
    }).join('') + '</div>';

    var secs = W.secrets.filter(function (x) { return x.about.indexOf(id) >= 0 && !(x.ev && (W.events.filter(function (e) { return e.id === x.ev; })[0] || {}).t === 'plot'); }).slice(-6).reverse();
    var goals = W.goals.filter(function (g) { return g.owner === id; }).slice(-3).reverse();
    if (secs.length || goals.length) {
      h += '<div class="pwl-sec">' + esc(t('ui.sec.intrigue')) + '</div>';
      h += secs.map(function (x) {
        var open = UI.reveal && UI.reveal[x.id];
        var others = x.known.filter(function (k) { return x.about.indexOf(k) < 0 && P(k); }).map(function (k) { return P(k).name; });
        return '<div class="pwl-secret' + (open ? ' open' : '') + (x.out ? ' out' : '') + '" data-act="reveal" data-v="' + x.id + '"><i>' + svg(x.out ? 'bubble' : 'lock') + '</i><div><p>' + esc(PWL.secretText(W, x, LANG)) + '</p><small>' +
          esc(x.out ? t('ui.sec.out') : open ? (others.length ? t('ui.sec.knownBy', { names: others.slice(0, 4).join(', ') }) : t('ui.sec.nobody')) : t('ui.story.tapReveal')) + '</small></div></div>';
      }).join('');
      h += goals.map(function (g) {
        var tn = g.target && P(g.target) ? P(g.target).name : '', pr = Math.min(100, g.pr);
        return '<div class="pwl-goal' + (g.end ? ' end' : '') + '"><span class="ring" style="--p:' + pr + '">' + svg('mask') + '</span><div><p>' + esc(t('ui.goal.' + g.t, { name: tn })) + '</p><small>' +
          esc(g.end ? t('ui.goal.end.' + g.end) : g.pr >= 100 ? t('ui.goal.ready') : t('ui.story.pr', { n: pr })) + '</small></div></div>';
      }).join('');
    }
    var mine = W.events.filter(function (e) { return !e.minor && (e.a === id || e.b === id || (e.v && e.v.child === id)); }).slice(-12).reverse();
    if (mine.length) h += '<div class="pwl-sec">' + esc(t('ui.story.history')) + '</div><div class="pwl-tl">' + mine.map(function (e, i) {
      return '<div style="--i:' + i + '"><span class="dot">' + (EVI[e.t] || '•') + '</span><p>' + esc(e.v.flavor || PWL.evText(W, e, LANG)) + '<small>' + esc(fmtDate(e.day) + (e.v.onscreen ? ' · ' + t('ui.ev.onscreen') : '')) + '</small></p></div>';
    }).join('') + '</div>';
    h += '<div class="pwl-row2">' + btn('edit', t('ui.story.edit'), '') + '</div>';
    return h;
  }

  /* ── переходы ── */
  function animate(kind, origin) {
    var b = $('pwl-body');
    if (!b || REDUCED) return;
    b.classList.remove('pwl-a-push', 'pwl-a-pop', 'pwl-a-zoom');
    b.style.transformOrigin = origin || '';
    void b.offsetWidth;
    b.classList.add('pwl-a-' + kind);
  }
  function afterRender() {
    var tb = $('pwl-treebox');
    if (tb && tb.scrollWidth > tb.clientWidth) tb.scrollLeft = (tb.scrollWidth - tb.clientWidth) / 2;
  }

  /* ════ хроника и настройки в новом облике ════ */
  var IC2 = {
    sprout: '<path d="M12 20.5v-8"/><path d="M12 12.5c0-4 3-6.3 7.2-6.3 0 4-3 6.3-7.2 6.3zM12 14.5c0-3.2-2.5-5.2-6.2-5.2 0 3.2 2.5 5.2 6.2 5.2z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6"/>',
    leaf: '<path d="M5 19.5C5 11 10 6 19.5 4.5 18 14 13 19.5 5 19.5z"/><path d="M5 19.5 13.5 11"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/><path d="M9.6 4.6 12 7l2.4-2.4M9.6 19.4 12 17l2.4 2.4"/>',
    briefcase: '<rect x="3.5" y="7.5" width="17" height="12" rx="2.2"/><path d="M9 7.5V5.6h6v1.9M3.5 12.5h17"/>',
    coin: '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.3 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.3-3.8-8.5s1.2-6.1 3.8-8.5z"/>',
    castle: '<path d="M4 20.5V9h3V6h2v3h2V6h2v3h2V6h2v3h3v11.5z"/><path d="M10 20.5v-4a2 2 0 0 1 4 0v4"/>',
    column: '<path d="M5.5 5.5h13M7 8.5h10M8.5 8.5v9.5M12 8.5v9.5M15.5 8.5v9.5M5.5 20.5h13M6.5 18h11"/><path d="M5.5 5.5c2.2-1.6 10.8-1.6 13 0"/>',
    fan: '<path d="M12 20.5 3.8 10.2a11.5 11.5 0 0 1 16.4 0z"/><path d="m12 20.5-3.8-12M12 20.5V8M12 20.5l3.8-12"/>',
    hat: '<path d="M8 15V5.5h8V15"/><path d="M3.8 15h16.4c0 2.1-3.7 3.6-8.2 3.6S3.8 17.1 3.8 15z"/><path d="M8 12h8"/>',
    phone: '<rect x="7" y="2.8" width="10" height="18.4" rx="2.6"/><path d="M11 17.6h2"/>',
    moon: '<path d="M14.5 3.6a8.4 8.4 0 1 0 5.9 14.2A7.4 7.4 0 0 1 14.5 3.6z"/><path d="m17.6 6.6.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6z"/>',
    model: '<path d="M4 5.5h16v10H9.5L5 19.5v-4H4z"/><path d="M8 9.5h8M8 12.3h5"/>',
    window: '<rect x="3.5" y="4.5" width="17" height="15" rx="3"/><path d="M3.5 9h17"/><circle cx="7" cy="6.8" r=".5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>'
  };
  Object.keys(IC2).forEach(function (k) { IC[k] = IC2[k]; });

  /* Сегментный переключатель: ползунок едет, потом срабатывает действие */
  function seg(act, cur, opts) {
    var k = 0;
    opts.forEach(function (o, i) { if (String(o[0]) === String(cur)) k = i; });
    return '<div class="pwl-seg" style="--n:' + opts.length + ';--k:' + k + '"><span class="th"></span>' + opts.map(function (o, i) {
      return '<b class="' + (i === k ? 'on' : '') + '" data-act="' + act + '" data-v="' + esc(o[0]) + '" data-k="' + i + '">' + esc(o[1]) + '</b>';
    }).join('') + '</div>';
  }
  function segTap(el) {
    var sg = el.closest && el.closest('.pwl-seg');
    if (!sg || REDUCED) return false;
    sg.style.setProperty('--k', el.getAttribute('data-k'));
    [].forEach.call(sg.querySelectorAll('b'), function (b) { b.classList.toggle('on', b === el); });
    return true;
  }

  /* ── хроника ── */
  var EVCAT = {
    date: 'romance', affair: 'romance', breakup: 'romance', debut: 'romance', compromise: 'romance',
    engage: 'family', marry: 'family', divorce: 'family', conceive: 'family', birth: 'family', arranged: 'family', elope: 'family',
    plot: 'intrigue', plotfail: 'intrigue', revenge: 'intrigue', sow: 'intrigue', discover: 'intrigue', blackmail: 'intrigue', scandal: 'intrigue', poison: 'intrigue',
    quarrel: 'drama', feud: 'drama', reconcile: 'drama', duel: 'drama', meet: 'drama',
    job: 'career', move: 'career', rise: 'career', contest: 'career', fame: 'career', journey: 'career', return: 'career', withdraw: 'career',
    rich: 'fortune', poor: 'fortune', inherit: 'fortune',
    ill: 'health', heal: 'health', curse: 'health', death: 'health'
  };
  var CATS = {
    romance: { c: '#f2709c', i: 'heart' }, family: { c: '#e6c36f', i: 'ring' }, intrigue: { c: '#b48cf2', i: 'mask' }, drama: { c: '#ef6767', i: 'swords' },
    career: { c: '#6fb6f2', i: 'briefcase' }, fortune: { c: '#f0a35a', i: 'coin' }, health: { c: '#8fd17a', i: 'drop' }, death: { c: '#a3a1b4', i: 'candle' }
  };
  var SEASON = [{ i: 'sprout', c: '#8fd17a' }, { i: 'sun', c: '#e6c36f' }, { i: 'leaf', c: '#f0a35a' }, { i: 'snow', c: '#9cc8f0' }];
  var PUBIC = { public: 'people', rumor: 'bubble', secret: 'lock' };
  function seasonOf(day) { return PWL.date(day).season; }
  function fmtSeason(day) { var d = PWL.date(day); return t('ui.ch.season', { y: d.y, s: t('ui.season.' + d.season) }); }
  function evCard(e, i) {
    var cat = EVCAT[e.t] || 'drama', C = CATS[cat], hero = heroId(), h = hero && e.heard[hero];
    var who = [e.a, e.b, e.v && e.v.child].filter(function (x, k, a) { return x && P(x) && a.indexOf(x) === k; }).slice(0, 3);
    var tap = e.v && e.v.child && P(e.v.child) ? e.v.child : who[0];
    var meta = e.v.onscreen ? '<span class="pub onscreen">' + svg('eye') + esc(t('ui.ev.onscreen')) + '</span>' : '<span class="pub ' + e.pub + '">' + svg(PUBIC[e.pub]) + esc(t('ui.pub.' + e.pub)) + '</span>';
    if ((UI.chMode || 'all') === 'all' && !e.minor) meta += '<span>' + esc(t('ui.ev.known', { n: e.known.length })) + '</span>';
    var heard = h ? '<div class="heard">' + (h.by && P(h.by) ? face(h.by) : svg('bubble')) + '<span>' + esc(t(h.by && P(h.by) ? 'ui.ev.heardBy' : 'ui.ev.heardTown', { name: P(hero).name, by: h.by && P(h.by) ? P(h.by).name : '' })) + (TOLD[e.id] ? ' · ' + esc(t('ui.ev.told')) : '') + '</span></div>' : '';
    return '<div class="pwl-evc' + (e.minor ? ' minor' : '') + (UI.fresh && UI.fresh[e.id] ? ' fresh' : '') + '" data-act="' + (tap ? 'person' : '') + '" data-v="' + (tap || '') + '" style="--c:' + C.c + ';--i:' + Math.min(i, 14) + '">' +
      '<span class="ei">' + (EVI[e.t] || '•') + '</span><div class="et"><p' + (e.v.flavor ? ' class="fl"' : '') + '>' + esc(e.v.flavor || PWL.evText(W, e, LANG)) + '</p>' + (e.v.flavor ? '<p class="tpl">' + esc(PWL.evText(W, e, LANG)) + '</p>' : '') + '<div class="em"><span class="dt">' + esc(fmtDate(e.day)) + '</span>' + meta + '</div>' + heard + '</div>' +
      '<span class="ew">' + who.map(function (x) { return face(x); }).join('') + '</span></div>';
  }
  function viewChron2() {
    var hero = heroId(), mode = UI.chMode || 'all', d = PWL.date(W.clock.day), se = SEASON[d.season];
    var yearPct = ((W.clock.day % PWL.YEAR) / PWL.YEAR) * 100;
    var h = '<div class="pwl-clock2" style="--sc:' + se.c + '"><span class="sg">' + svg(se.i) + '</span><div class="cd"><small>' + esc(t('ui.ch.year', { y: d.y })) + '</small><b>' + esc(t('ui.season.' + d.season)) + ', ' + esc(t('ui.ch.day', { d: ((d.m - 1) % 3) * 30 + d.d })) + '</b>' +
      '<div class="yr">' + SEASON.map(function (x, i) { return '<i style="--c:' + x.c + '" class="' + (i < d.season ? 'past' : i === d.season ? 'now' : '') + '"></i>'; }).join('') + '<em style="left:' + yearPct.toFixed(1) + '%"></em></div></div></div>';
    h += '<div class="pwl-time">' + [[1, 'd'], [7, 'w'], [30, 'm'], [90, 's'], [360, 'y']].map(function (x) {
      return '<span data-act="time" data-v="' + x[0] + '"><b>+</b>' + esc(t('ui.time.' + x[1])) + '</span>';
    }).join('') + '</div>';
    h += '<p class="pwl-hint">' + esc(S.tmode === 'story' ? t('ui.time.story') : S.tmode === 'msgs' ? t('ui.time.auto', { n: S.tickEvery, d: t('ui.time.' + ({ 1: 'd', 7: 'w', 30: 'm' })[S.tickDays]) }) : t('ui.time.hint')) + '</p>';
    if (Object.keys(W.people).length - PWL.mains(W).length < 2) return h + '<div class="pwl-empty">' + esc(t('ui.ch.few')) + '</div>';
    h += seg('chmode', mode, [['all', t('ui.ch.all')]].concat(hero ? [['known', t('ui.ch.known', { name: P(hero).name })]] : []));
    var f = UI.chCat || '';
    var cats = ['romance', 'family', 'intrigue', 'drama', 'career', 'fortune', 'health'];
    h += '<div class="pwl-cats">' + '<span class="' + (f ? '' : 'on') + '" data-act="chcat" data-v="" style="--c:#d9b765">' + esc(t('ui.f.all')) + '</span>' + cats.map(function (c) {
      return '<span class="' + (f === c ? 'on' : '') + '" data-act="chcat" data-v="' + c + '" style="--c:' + CATS[c].c + '">' + svg(CATS[c].i) + esc(t('ui.cat.' + c)) + '</span>';
    }).join('') + '<span class="' + (UI.chMinor ? 'on' : '') + '" data-act="chminor" data-v="1" style="--c:#9fa3c8">' + esc(t('ui.ch.minor')) + '</span></div>';
    var evs = W.events.filter(function (e) {
      if (e.minor && !UI.chMinor) return false;
      if (mode === 'known' && !(hero && e.known.indexOf(hero) >= 0)) return false;
      if (f && (EVCAT[e.t] || 'drama') !== f) return false;
      return true;
    }).slice(-150).reverse();
    if (!evs.length) return h + '<div class="pwl-empty">' + esc(W.events.length ? t('ui.ch.noneMode') : t('ui.ch.none')) + '</div>';
    var last = '', out = '', i = 0;
    evs.forEach(function (e) {
      var m = fmtSeason(e.day);
      if (m !== last) { out += '<div class="pwl-sec2" style="--c:' + SEASON[seasonOf(e.day)].c + '">' + svg(SEASON[seasonOf(e.day)].i) + esc(m) + '</div>'; last = m; i = 0; }
      out += evCard(e, i++);
    });
    return h + '<div class="pwl-evs">' + out + '</div>';
  }

  /* ── настройки ── */
  var ERAI = { any: 'globe', medieval: 'castle', renaissance: 'column', regency: 'fan', victorian: 'hat', modern: 'phone', fantasy: 'moon' };
  function scard(icon, title, body, extra) { return '<div class="pwl-scard"' + (extra || '') + '><div class="sh">' + svg(icon) + '<b>' + esc(title) + '</b></div>' + body + '</div>'; }
  function tog(act, v, label, desc, on) {
    return '<div class="pwl-tog' + (on ? ' on' : '') + '" data-act="' + act + '" data-v="' + v + '"><div><b>' + esc(label) + '</b>' + (desc ? '<small>' + esc(desc) + '</small>' : '') + '</div>' + sw(on) + '</div>';
  }
  function viewSet2() {
    var h = '<div class="pwl-gcta" data-act="guide">' + svg('book') + '<div><b>' + esc(t('ui.guide.title')) + '</b><small>' + esc(t('ui.guide.cta')) + '</small></div>' + svg('chev') + '</div>';
    /* этот мир */
    var w = '<label class="pwl-l">' + esc(t('ui.world.title')) + '</label>' + traitsLine();
    w += '<div class="pwl-row2">' + btn('note', t('ui.btn.note')) + btn('io', t('ui.btn.io')) + '</div>';
    w += '<span class="pwl-link danger" data-act="wipe">' + esc(UI.confirm === 'wipe' ? t('ui.btn.sure') : t('ui.btn.wipe')) + '</span>';
    h += scard('castle', t('ui.set.world'), w);
    /* режиссёр */
    var d = seg('dirmode', S.dir, ['off', 'hint', 'auto'].map(function (m) { return [m, t('ui.dir.m.' + m)]; })) + '<p class="pwl-hint">' + esc(t('ui.dir.m.' + S.dir + 'D')) + '</p>';
    if (S.dir !== 'off') d += '<label class="pwl-l">' + esc(t('ui.set.dirSpeed')) + '</label>' + seg('dirspeed', S.speed, ['slow', 'mid', 'fast'].map(function (m) { return [m, t('ui.dir.sp.' + m)]; }));
    h += scard('mask', t('ui.dir.title'), d);
    h += scard('gossip', t('ui.gs.name'), gossipCard());
    /* жизнь за кадром */
    var l = '<label class="pwl-l">' + esc(t('ui.tmode.title')) + '</label>' + seg('tmode', S.tmode, ['story', 'msgs', 'off'].map(function (m) { return [m, t('ui.tmode.' + m)]; })) + '<p class="pwl-hint">' + esc(t('ui.tmode.' + S.tmode + 'D')) + '</p>';
    if (S.tmode === 'msgs') l += '<label class="pwl-l">' + esc(t('ui.life.every')) + '</label>' + seg('tickEvery', S.tickEvery, [[10, '10'], [20, '20'], [40, '40']]);
    if (S.tmode === 'msgs') l += '<label class="pwl-l">' + esc(t('ui.life.days')) + '</label>' + seg('tickDays', S.tickDays, [[1, t('ui.time.d')], [7, t('ui.time.w')], [30, t('ui.time.m')]]);
    l += '<label class="pwl-l">' + esc(t('ui.life.pace')) + '</label>' + seg('pace', S.pace, ['calm', 'normal', 'drama'].map(function (m) { return [m, t('ui.pace.' + m)]; }));
    l += '<label class="pwl-l">' + esc(t('ui.set.cats')) + '</label><div class="pwl-catgrid">' + ['romance', 'family', 'intrigue', 'drama', 'career', 'fortune', 'health', 'death'].map(function (c, i) {
      var C = CATS[c];
      return '<span class="' + (S.cats[c] ? 'on' : '') + '" data-act="cat" data-v="' + c + '" style="--c:' + C.c + ';--i:' + i + '"><i>' + svg(C.i) + '</i><b>' + esc(t('ui.cat.' + c)) + '</b><small>' + esc(t('ui.cat.' + c + 'D')) + '</small><em>' + svg('check') + '</em></span>';
    }).join('') + '</div>';
    l += '<label class="pwl-l">' + esc(t('ui.life.pairs')) + '</label>' + seg('pairs', S.pairs, [['any', t('ui.pairs.any')], ['mf', t('ui.pairs.mf')]]);
    l += '<label class="pwl-l">' + esc(t('ui.life.news')) + '</label>' + seg('news', S.news, [[0, t('ui.dir.m.off')], [1, '1'], [2, '2']]) + '<p class="pwl-hint">' + esc(t('ui.life.newsD')) + '</p>';
    h += scard('scroll', t('ui.life.title'), l);
    /* что видит модель */
    var m = tog('set', 'on', t('ui.set.on'), t('ui.set.onD'), S.on) + tog('set', 'bio', t('ui.set.bio'), t('ui.set.bioD'), S.bio) + tog('set', 'first', t('ui.set.first'), t('ui.set.firstD'), S.first);
    m += '<label class="pwl-l">' + esc(t('ui.set.scan')) + '</label>' + seg('scan', S.scan, [2, 4, 6, 10, 16].map(function (n) { return [n, String(n)]; })) + '<p class="pwl-hint">' + esc(t('ui.set.scanD')) + '</p>';
    m += '<label class="pwl-l">' + esc(t('ui.set.max')) + '</label>' + seg('max', S.max, [2, 3, 5, 8, 12].map(function (n) { return [n, String(n)]; }));
    h += scard('model', t('ui.set.model'), m);
    /* окно */
    var o = tog('set', 'dock', t('ui.set.dock'), '', S.dock) + '<label class="pwl-l">' + esc(t('ui.set.lang')) + '</label>' + seg('lang', S.lang, LANGS.map(function (x) { return [x[0], x[0] === 'auto' ? t('ui.set.auto') : x[0] === 'zh-CN' ? '中文' : x[0].toUpperCase()]; }));
    if (ST_WIN) {
      if (winWide()) o += '<label class="pwl-l">' + esc(t('ui.win.zoom')) + '</label>' + seg('winzoom', UI.winZoom, [0.9, 1, 1.1, 1.2, 1.35, 1.5].map(function (z) { return [z, Math.round(z * 100) + '%']; }));
      o += '<p class="pwl-hint">' + esc(t(winWide() ? 'ui.win.hint' : 'ui.win.hintPhone')) + '</p>' + btn('winreset', t('ui.win.reset'));
    }
    h += scard('window', t('ui.set.window'), o);
    h += '<p class="pwl-hint pwl-foot2">' + esc(t('ui.set.where')) + '</p>';
    return h;
  }

  /* ════ листы, импорт, правка, пустой мир — в новом облике ════ */
  var IC3 = {
    up: '<path d="M12 19.5V5.5M6 11l6-6 6 6"/>',
    down: '<path d="M12 4.5v14M6 13l6 6 6-6"/>',
    sides: '<path d="M4 12h16M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2.4"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    file: '<path d="M6 3.5h8l4.5 4.5v12.5H6z"/><path d="M14 3.5V8h4.5M9 13h6M9 16.5h6"/>',
    inbox: '<path d="M4 13.5 6.5 5h11l2.5 8.5v5H4z"/><path d="M4 13.5h4.5l1.5 2.5h4l1.5-2.5H20"/>',
    trash: '<path d="M5 7h14M9.5 7V4.8h5V7M7 7l1 13h8l1-13"/>',
    news: '<path d="M4 5.5h13v13H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a1.5 1.5 0 0 1-3 0M7.5 9h6M7.5 12.5h6M7.5 16h4"/>'
  };
  Object.keys(IC3).forEach(function (k) { IC[k] = IC3[k]; });

  function sheetHead(title) { return '<div class="pwl-grab"></div><div class="pwl-shhd"><b>' + esc(title) + '</b><span class="pwl-ibtn" data-act="shclose">' + svg('close') + '</span></div>'; }
  function pickGrid(ids) {
    if (!ids.length) return '<p class="pwl-hint pwl-empty2">' + esc(t('ui.empty.filter')) + '</p>';
    return '<div class="pwl-faces pick">' + ids.slice(0, 80).map(function (id, i) {
      var p = P(id), sub = [p.role.title, p.role.job].filter(Boolean).join(' ') || houseName(p.house);
      return '<div class="pwl-fc" data-act="picked" data-v="' + id + '" style="--i:' + Math.min(i, 16) + '">' + face(id) + '<b>' + esc(p.name) + '</b>' + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</div>';
    }).join('') + '</div>';
  }
  function optChip(act, v, label, on, c) { return '<span class="' + (on ? 'on' : '') + '" data-act="' + act + '" data-v="' + v + '" style="--c:' + (c || '#d9b765') + '">' + (on ? svg('check') : '') + esc(label) + '</span>'; }

  /* справка, разобранная на карточки */
  var NOTE_KEYS = { 'Traits': 'traits', 'Ties': 'ties', 'Now': 'now', 'Lately': 'lately', 'Unfinished': 'threads', 'Secret': 'secret', 'Hidden agenda': 'agenda', 'Notes': 'notes' };
  function noteCards(r) {
    var cards = [], cur = null;
    String(r.text || '').split('\n').forEach(function (ln) {
      if (/^- /.test(ln)) { cur = { head: ln.slice(2), lines: [] }; cards.push(cur); return; }
      var m = /^\s+([A-Za-z ]+): (.*)$/.exec(ln);
      if (m && cur) cur.lines.push({ k: NOTE_KEYS[m[1]] || '', label: m[1], v: m[2] });
    });
    return cards.map(function (c, i) {
      var id = r.ids[i], p = id && P(id);
      return '<div class="pwl-ncard" style="--i:' + i + '">' + '<div class="nh">' + (p ? face(id) : '') + '<div><b>' + esc(p ? p.name : c.head) + '</b><small>' + esc(c.head.replace(/^[^—]*—\s*/, '')) + '</small></div></div>' +
        c.lines.map(function (x) { return '<div class="nl ' + x.k + '"><em>' + esc(x.k ? t('ui.note.k.' + x.k) : x.label) + '</em><span>' + esc(x.v) + '</span></div>'; }).join('') + '</div>';
    }).join('');
  }
  function noteSheet() {
    var r = noteNow(), news = S.news ? PWL.newsFor(W, TOLD, S.news) : [];
    var cue = DIR.cue && P(DIR.cue) ? (CANDS.filter(function (c) { return c.id === DIR.cue; })[0] || { id: DIR.cue, why: [] }) : null;
    var h = '';
    if (!r.text && !news.length && !cue) return h + '<div class="pwl-empty">' + esc(t('ui.note.empty')) + '</div>';
    h += '<p class="pwl-hint">' + esc(t('ui.note.hint')) + '</p>';
    if (UI.noteRaw) {
      var raw = [r.text, PWL.newsText(W, news), cue ? PWL.cueText(W, cue, true) : ''].filter(Boolean).join('\n\n');
      return h + '<pre class="pwl-pre">' + esc(raw) + '</pre>' + '<span class="pwl-link" data-act="noteraw">' + esc(t('ui.note.cards')) + '</span>';
    }
    if (r.text) h += '<div class="pwl-nsec">' + svg('people') + esc(t('ui.note.sec.people')) + '</div>' + noteCards(r);
    if (news.length) h += '<div class="pwl-nsec">' + svg('news') + esc(t('ui.note.sec.news')) + '</div>' + news.map(function (x) {
      var by = x.h.by && P(x.h.by);
      return '<div class="pwl-nnews">' + (by ? face(x.h.by) : '<span class="pwl-face">' + svg('bubble') + '</span>') + '<div><small>' + esc(t(by ? 'ui.ev.heardBy' : 'ui.ev.heardTown', { name: P(x.m).name, by: by ? by.name : '' })) + '</small><p>' + esc(PWL.evText(W, x.e, LANG)) + '</p></div></div>';
    }).join('');
    if (cue) h += '<div class="pwl-nsec">' + svg('mask') + esc(t('ui.dir.title')) + '</div><div class="pwl-nnews cue">' + face(cue.id) + '<div><small>' + esc(t('ui.dir.waiting')) + '</small><p>' + esc(P(cue.id).name) + '</p>' + (cue.why && cue.why.length ? '<small>' + esc(whyUi(cue).slice(0, 3).join(' · ')) + '</small>' : '') + '</div></div>';
    return h + '<span class="pwl-link" data-act="noteraw">' + esc(t('ui.note.raw')) + '</span>';
  }
  function sheetHtml2() {
    var s = UI.sheet;
    if (!s) return '';
    var h = '<div class="pwl-sh">' + sheetHead(s.title);
    if (s.type === 'models') {
      h += '<input data-sq="1" placeholder="' + esc(t('ui.gs.modelsFind')) + '" value="' + esc(s.q || '') + '">';
      if (G.modelsBusy) h += '<div class="pwl-aiwait">' + svg('gossip') + esc(t('ui.gs.modelsLoading')) + '</div>';
      else if (G.modelsErr) h += '<p class="pwl-hint err">' + esc(G.modelsErr) + '</p><p class="pwl-hint">' + esc(t('ui.gs.modelsHand')) + '</p>';
      else {
        var q = String(s.q || '').toLowerCase(), ms = (G.models || []).filter(function (m) { return !q || m.toLowerCase().indexOf(q) >= 0; });
        h += '<p class="pwl-hint">' + esc(t('ui.gs.modelsN', { n: ms.length })) + '</p><div class="pwl-mlist">' + ms.slice(0, 300).map(function (m) { return '<span class="' + (m === S.gmodel ? 'on' : '') + '" data-act="gpick" data-v="' + esc(m) + '">' + esc(m) + '</span>'; }).join('') + '</div>';
      }
      return h + '</div>';
    }
    if (s.type === 'new') {
      var nm = s.name || '';
      h += '<div class="pwl-newp"><span id="pwl-newface">' + '<span class="pwl-face big ' + (s.sex || 'x') + '" style="--hc:rgba(217,183,101,.6)">' + esc((nm.trim().charAt(0) || '?').toUpperCase()) + '</span></span></div>';
      h += '<input id="pwl-newname" placeholder="' + esc(t('ui.ph.name')) + '" value="' + esc(nm) + '">';
      h += seg('nsex', s.sex || 'x', [['f', t('ui.sex.f')], ['m', t('ui.sex.m')], ['x', t('ui.sex.x')]]);
      h += btn('create', t('ui.btn.create'), 'main');
    } else if (s.type === 'pick') {
      var q = (s.q || '').trim().toLowerCase(), opts = '';
      if (s.mode === 'parent' || s.mode === 'child') opts = optChip('popt', 'ill', t('ui.opt.ill'), !!s.ill, '#f2709c') + optChip('popt', 'ad', t('ui.opt.ad'), !!s.ad, '#6fb6f2');
      if (s.mode === 'spouse') opts = optChip('popt', 'ex', t('ui.opt.ex'), !!s.ex, '#a3a1b4');
      if (opts) h += '<div class="pwl-cats">' + opts + '</div>';
      h += '<div class="pwl-search">' + svg('search') + '<input data-sq="1" value="' + esc(s.q || '') + '" placeholder="' + esc(t('ui.ph.pick')) + '"></div>';
      var ids = sortPeople(Object.keys(W.people).filter(function (id) {
        if (id === s.from) return false;
        if (s.mode === 'member' && P(id).house === s.from) return false;
        if (s.mode === 'goal' && s.goal === 'match' && PWL.childrenOf(W, s.from).indexOf(id) < 0) return false;
        return matchQ(id, q);
      }));
      h += '<div class="pwl-picklist">' + pickGrid(ids) + '</div>';
      if (q && s.mode !== 'member' && s.mode !== 'goal') h += btn('pnew', t('ui.btn.newNamed', { name: s.q.trim() }), 'main');
    } else if (s.type === 'hedit') {
      h += '<div class="pwl-newp">' + crest(UI.hid, 56) + '</div>' + houseEditSheet();
    } else if (s.type === 'newhouse') {
      h += '<div class="pwl-newp" id="pwl-newcrest"><span class="pwl-crest" style="--hc:#5d6a80;--cs:60px"><svg viewBox="0 0 24 26" aria-hidden="true"><path class="sh" d="M12 1.5 21 4.6v6.8c0 6-3.9 10.6-9 12.6-5.1-2-9-6.6-9-12.6V4.6z"/><path class="hl" d="M12 3.4 19.2 6v5.4c0 4.9-3.1 8.7-7.2 10.4"/></svg><b>?</b></span></div>';
      h += '<input id="pwl-hname" placeholder="' + esc(t('ui.ph.house')) + '">' + btn('addhouse', t('ui.btn.create'), 'main');
    } else if (s.type === 'note') {
      h += noteSheet();
    } else if (s.type === 'io') {
      var np = Object.keys(W.people).length;
      h += '<div class="pwl-io"><div class="ioh">' + svg('copy') + '<div><b>' + esc(t('ui.io.give')) + '</b><small>' + esc(t('ui.io.stats', { p: np, h: Object.keys(W.houses).length, e: W.events.length })) + '</small></div></div>' +
        '<div class="pwl-row2">' + btn('copy', t('ui.btn.copy'), 'main') + (T && T.file && T.file.export ? btn('export', t('ui.btn.file')) : '') + '</div></div>';
      h += '<div class="pwl-io take"><div class="ioh">' + svg('inbox') + '<div><b>' + esc(t('ui.io.take')) + '</b><small>' + esc(t('ui.io.takeD')) + '</small></div></div>' +
        '<textarea id="pwl-io" rows="4" placeholder="' + esc(t('ui.io.paste')) + '">' + esc(s.paste || '') + '</textarea>' + btn('doimport', UI.confirm === 'imp' ? t('ui.btn.sure') : t('ui.btn.importText'), 'danger') + '</div>';
    }
    return h + '</div>';
  }

  /* ── импорт из лорбука ── */
  var BOOKC = ['#a8364f', '#2f7d5f', '#3060a8', '#7d4cab', '#b47a2a', '#2a8b96'];
  function viewLore2() {
    var L = UI.lore, h = '';
    if (!T || ((!T.lorebook || !T.lorebook.all) && (!T.character || !T.character.get))) return '<div class="pwl-warn">' + esc(t('ui.lore.noapi')) + '</div>';
    if (!L || L.busy) { if (!L) loadBooks(); return '<div class="pwl-busy">' + esc(t('ui.lore.loading')) + '</div>'; }
    if (L.err) return '<div class="pwl-warn">' + esc(t('ui.lore.err')) + '</div>' + btn('lorere', t('ui.btn.retry'));
    if (!L.book) {
      if (!L.books.length) return '<div class="pwl-empty">' + esc(t('ui.lore.none')) + '</div>';
      return '<p class="pwl-hint">' + esc(t('ui.lore.pick')) + '</p><div class="pwl-books">' + L.books.map(function (b, i) {
        if (b.card) return '<div class="pwl-book card" data-act="book" data-v="' + i + '" style="--c:#e6c36f;--i:' + i + '"><span class="sp"></span>' + svg('people') + '<b>' + esc(b.name) + '</b><small>' + esc(t('ui.card.book')) + '</small></div>';
        return '<div class="pwl-book" data-act="book" data-v="' + i + '" style="--c:' + BOOKC[i % BOOKC.length] + ';--i:' + i + '"><span class="sp"></span>' + svg('book') + '<b>' + esc(b.name || '?') + '</b>' + (b.n != null ? '<small>' + esc(t('ui.lore.entries', { n: b.n })) + '</small>' : '') + '</div>';
      }).join('') + '</div>';
    }
    var ents = L.entries || [], sel = L.sel || {};
    var nSel = Object.keys(sel).filter(function (k) { return sel[k]; }).length;
    h += '<div class="pwl-lorehd" data-act="book" data-v="-1">' + svg('back') + '<div><b>' + esc(L.book.name || '?') + '</b><small>' + esc(t('ui.lore.hint')) + '</small></div></div>';
    if (!L.entries) return h + '<div class="pwl-busy">' + esc(t('ui.lore.loading')) + '</div>';
    if (!ents.length) return h + '<div class="pwl-empty">' + esc(t('ui.lore.noent')) + '</div>';
    if (L.book.card) h += gOn() ? '<p class="pwl-hint">' + esc(t('ui.card.hint')) + '</p>' : '<div class="pwl-gonbox"><p>' + esc(t('ui.card.hintNoAi')) + '</p>' + btn('gon', t(T && typeof T.generate === 'function' ? 'ui.gs.turnOnTavo' : 'ui.gs.turnOn'), 'main') + '</div>';
    h += '<div class="pwl-cats">' + optChip('selall', '1', t('ui.lore.all'), false) + optChip('selall', '0', t('ui.lore.nothing'), false) + '</div>';
    h += '<div class="pwl-ents">' + ents.map(function (e, i) {
      var had = !e.card && (PWL.hasLore(W, L.bookId, e.id) || !!PWL.byName(W, e.title)), on = !!sel[e.id], sx = e.card ? 'x' : PWL.guessSex(e.body), lock = e.card && !gOn();
      return '<div class="pwl-ent' + (had ? ' had' : lock ? ' had lock' : on ? ' on' : '') + '" data-act="' + (had ? '' : lock ? 'cardlock' : 'selent') + '" data-v="' + esc(e.id) + '" style="--i:' + Math.min(i, 14) + '">' +
        (e.card ? '<span class="pwl-face x" style="--hc:rgba(230,195,111,.45)">' + svg('file') + '</span>' : '<span class="pwl-face ' + sx + '" style="--hc:rgba(255,255,255,.18)">' + esc(((e.title || e.keys[0] || '?').charAt(0)).toUpperCase()) + '</span>') +
        '<div><b>' + esc(e.title || e.keys[0] || '?') + '</b><small>' + esc(had ? t('ui.lore.had') : e.body.slice(0, e.card ? 160 : 120)) + '</small></div>' +
        '<em>' + svg(lock ? 'lock' : 'check') + '</em></div>';
    }).join('') + '</div>';
    h += '<div class="pwl-sticky">' + (L.ai ? '<div class="pwl-aiwait">' + svg('gossip') + esc(t('ui.gs.readingLore')) + '</div>' : btn('import', nSel ? t(gOn() && S.glore ? 'ui.gs.loreAdd' : 'ui.lore.add', { n: nSel }) : t('ui.lore.choose'), nSel ? 'main' : '')) + '</div>';
    return h;
  }

  /* ── правка человека ── */
  var KINI = { parent: 'up', child: 'down', sibling: 'sides', spouse: 'ring', betrothed: 'heart' };
  function viewEdit2() {
    var id = UI.pid, p = P(id);
    if (!p) { UI.view = 'people'; return viewHome(); }
    var hs = Object.keys(W.houses), hc = p.house && W.houses[p.house] ? houseColor(p.house) : '#5d6a80';
    var h = '<div class="pwl-ehero" style="--hc:' + hc + '">' + face(id) + '<div><b>' + esc(p.name) + '</b><small>' + esc(t('ui.edit.hint')) + '</small></div></div>';

    var a = field(t('ui.f.name'), 'data-f="name"', p.name) + field(t('ui.f.aliases'), 'data-f="aliases"', p.aliases.join(', '), t('ui.ph.aliases'));
    var auto = PWL.namesOf(p, S).filter(function (n) { return n !== p.name && p.aliases.indexOf(n) < 0; });
    if (auto.length) a += '<p class="pwl-hint">' + esc(t('ui.hint.auto', { names: auto.join(', ') })) + '</p>';
    a += seg('sex', p.sex, [['f', t('ui.sex.f')], ['m', t('ui.sex.m')], ['x', t('ui.sex.x')]]);
    h += scard('edit', t('ui.edit.name'), a);

    var b = '<div class="pwl-row2"><div class="pwl-col">' + field(t('ui.f.age'), 'data-f="age"', p.age == null ? '' : p.age, '', 'number') + '</div><div class="pwl-col"><label class="pwl-l">' + esc(t('ui.f.house')) + '</label><select data-f="house"><option value="">' + esc(t('ui.house.none')) + '</option>' +
      hs.map(function (hid) { return '<option value="' + hid + '"' + (p.house === hid ? ' selected' : '') + '>' + esc(W.houses[hid].name) + '</option>'; }).join('') + '<option value="+">' + esc(t('ui.house.new')) + '</option></select></div></div>';
    b += '<div class="pwl-row2"><div class="pwl-col">' + field(t('ui.f.title'), 'data-f="role.title"', p.role.title, t('ui.ph.title')) + '</div><div class="pwl-col">' + field(t('ui.f.job'), 'data-f="role.job"', p.role.job, t('ui.ph.job')) + '</div></div>';
    b += '<div class="pwl-row2"><div class="pwl-col">' + field(t('ui.f.faction'), 'data-f="role.faction"', p.role.faction, t('ui.ph.faction')) + '</div><div class="pwl-col">' + field(t('ui.f.place'), 'data-f="role.place"', p.role.place, t('ui.ph.place')) + '</div></div>';
    h += scard('castle', t('ui.edit.place'), b);

    var c = field(t('ui.f.traits'), 'data-f="traits"', p.traits.join(', '), t('ui.ph.traits')) +
      '<label class="pwl-l">' + esc(t('ui.f.bio')) + '</label><textarea data-f="bio" rows="4" placeholder="' + esc(t('ui.ph.bio')) + '">' + esc(p.bio) + '</textarea>';
    h += scard('model', t('ui.edit.char'), c);

    var rows = [];
    function kr(kind, other, extra, key) {
      var word = PWL.label(W, id, other, LANG) || t('ui.kin.' + kind);
      rows.push('<div class="pwl-krow">' + face(other) + '<div data-act="person" data-v="' + other + '"><small>' + esc(word + (extra ? ' · ' + extra : '')) + '</small><b>' + esc(P(other).name) + '</b></div><span class="pwl-off" data-act="unkin" data-v="' + esc(key) + '">' + svg('close') + '</span></div>');
    }
    W.kin.forEach(function (e) {
      var fl = [e.ad ? t('ui.opt.ad') : '', e.ill ? t('ui.opt.ill') : ''].filter(Boolean).join(', ');
      if (e.t === 'parent' && e.b === id) kr('parent', e.a, fl, e.a + '|' + e.b + '|parent');
      if (e.t === 'parent' && e.a === id) kr('child', e.b, fl, e.a + '|' + e.b + '|parent');
      if ((e.t === 'spouse' || e.t === 'betrothed' || e.t === 'sibling') && (e.a === id || e.b === id)) kr(e.t === 'spouse' && e.ex ? 'exspouse' : e.t, e.a === id ? e.b : e.a, '', e.a + '|' + e.b + '|' + e.t);
    });
    var k = (rows.length ? '<div class="pwl-krows">' + rows.join('') + '</div>' : '<p class="pwl-hint">' + esc(t('ui.kin.none')) + '</p>') +
      '<div class="pwl-kadd">' + ['parent', 'child', 'sibling', 'spouse', 'betrothed'].map(function (x) { return '<span data-act="addkin" data-v="' + x + '">' + svg(KINI[x]) + '<b>' + esc(t('ui.kin.' + x)) + '</b></span>'; }).join('') + '</div>';
    h += scard('people', t('ui.sec.family'), k);

    var th = (p.threads.length ? '<div class="pwl-threads">' + p.threads.map(function (x, i) { return '<div><span>' + esc(x) + '</span><i data-act="unthread" data-v="' + i + '">' + svg('check') + '</i></div>'; }).join('') + '</div>' : '') +
      '<div class="pwl-row2"><div class="pwl-col"><input id="pwl-thread" placeholder="' + esc(t('ui.ph.thread')) + '"></div><span class="pwl-ibtn" data-act="thread">' + svg('plus') + '</span></div><p class="pwl-hint">' + esc(t('ui.hint.threads')) + '</p>';
    h += scard('scroll', t('ui.sec.threads'), th);

    h += scard('lock', t('ui.sec.intrigue'), intrigueBlock(id).replace(/^<div class="pwl-sub">[^<]*<\/div>/, ''));

    var f = tog('flag', 'important', t('ui.opt.important'), t('ui.opt.importantD'), p.flags.important) + tog('flag', 'main', t('ui.opt.main'), t('ui.opt.mainD'), isMain(id)) + tog('flag', 'alive', t('ui.opt.alive'), '', p.alive);
    if (!isMain(id)) f += tog('flag', 'nodir', t('ui.opt.nodir'), t('ui.opt.nodirD'), p.flags.nodir) + tog('flag', 'safe', t('ui.opt.safe'), t('ui.opt.safeD'), p.flags.safe);
    h += scard('star', t('ui.edit.story'), f);
    if (p.lore) h += '<p class="pwl-hint">' + esc(t('ui.hint.fromLore')) + '</p>';
    h += '<span class="pwl-link danger" data-act="delp">' + esc(UI.confirm === 'p:' + id ? t('ui.btn.sure') : t('ui.btn.delPerson')) + '</span>';
    return h;
  }

  /* ── пустой мир ── */
  function emptyHome() {
    return '<div class="pwl-void"><span class="tr">' + TREE + '</span><b>' + esc(t('ui.void.title')) + '</b><p>' + esc(t('ui.void.text')) + '</p></div>' +
      '<div class="pwl-starts">' +
      '<div data-act="go" data-v="lore" style="--c:#6fb6f2;--i:0">' + svg('book') + '<b>' + esc(t('ui.void.lore')) + '</b><small>' + esc(t('ui.void.loreD2')) + '</small></div>' +
      '<div data-act="newp" style="--c:#e6c36f;--i:1">' + svg('plus') + '<b>' + esc(t('ui.void.add')) + '</b><small>' + esc(t('ui.void.addD')) + '</small></div>' +
      (MCOUNT > 4 ? '<div data-act="gfull" style="--c:#74d3bf;--i:2">' + svg('scroll') + '<b>' + esc(t('ui.full.void')) + '</b><small>' + esc(t('ui.full.voidD', { n: MCOUNT })) + '</small></div>' : '') +
      '<div data-act="newhouse" style="--c:#b48cf2;--i:3">' + svg('castle') + '<b>' + esc(t('ui.void.house')) + '</b><small>' + esc(t('ui.void.houseD')) + '</small></div>' +
      '</div><p class="pwl-hint">' + esc(t('ui.void.how')) + '</p><span class="pwl-link" data-act="guide">' + esc(t('ui.guide.title')) + ' →</span>';
  }
  /* живой предпросмотр имени и герба */
  function livePreview(el) {
    if (el.id === 'pwl-io') { if (UI.sheet) UI.sheet.paste = el.value; return true; }
    if (el.id === 'pwl-newname') {
      var f = $('pwl-newface'), c = (el.value.trim().replace(/^(леди|лорд|сэр|lady|lord|sir)\s+/i, '').charAt(0) || '?').toUpperCase();
      if (f && f.firstChild) f.firstChild.textContent = c;
      if (UI.sheet) UI.sheet.name = el.value;
      return true;
    }
    if (el.id === 'pwl-hname') {
      var cr = $('pwl-newcrest');
      if (cr) {
        var b = cr.querySelector('b'), sp = cr.querySelector('.pwl-crest');
        b.textContent = monogram(el.value || '?');
        var s0 = el.value, hh = 7;
        for (var i = 0; i < s0.length; i++) hh = (hh * 31 + s0.charCodeAt(i)) % 9973;
        sp.style.setProperty('--hc', s0 ? HUES[hh % HUES.length] : '#5d6a80');
      }
      return true;
    }
    return false;
  }
  function copyText(tx) {
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = tx; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast(t('ui.toast.copied')); } catch (e) { toast(t('ui.toast.saveFail')); }
      document.body.removeChild(ta);
    }
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(tx).then(function () { toast(t('ui.toast.copied')); }, fallback); return; } } catch (e) {}
    fallback();
  }

  /* ════ Сплетница в окне: модель, находки, умный импорт, живые события, эпоха ════ */
  IC.gossip = '<path d="M4 5.5h16v10.5H10l-5 4v-4H4z"/><path d="M8.5 9.5h7M8.5 12.5h4"/><path d="M18.5 2.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"/>';
  var G = { pending: [], last: -1, busy: false, err: '', flavorAt: 0, key: '' };
  var MCOUNT = 0;
  function gOn() { return S.gsrc === 'tavo' ? !!(T && typeof T.generate === 'function') : S.gsrc === 'own' ? !!(S.gep && S.gmodel && G.key) : false; }
  /* ── своя модель: любой OpenAI-совместимый адрес (OpenRouter, свой прокси, локальный сервер…) ── */
  function epBase(u) {
    u = String(u || '').replace(/[​-‍﻿\s]/g, '').replace(/\/+$/, '');
    if (!u) return '';
    if (!/^[a-z]+:\/\//i.test(u)) u = (/^(localhost|127\.|192\.168\.|10\.)/.test(u) ? 'http:' : 'https:') + '//' + u;
    return u.replace(/\/(chat\/completions|responses|models)$/, '');
  }
  function epChat(u) { var b = epBase(u); if (!b) return ''; return (/^[a-z]+:\/\/[^\/]+$/i.test(b) ? b + '/v1' : b) + '/chat/completions'; }
  function epModels(u) { var b = epBase(u); if (!b) return []; var out = [b + '/models']; if (!/\/v\d+[a-z]*$/.test(b)) out.push(b + '/v1/models'); return out; }
  var THINK_TAGS = 'think|thinking|thoughts?|reasoning|reflection|plan|planning|scratchpad|analysis';
  function noThinkText(s) {
    s = String(s || '');
    s = s.replace(new RegExp('<(' + THINK_TAGS + ')\\b[^>]*>[\\s\\S]*?<\\/\\1\\s*>', 'gi'), ' ');
    s = s.replace(new RegExp('<(' + THINK_TAGS + ')\\b[^>]*>[\\s\\S]*$', 'i'), ' ');
    s = s.replace(new RegExp('^[\\s\\S]*?<\\/(' + THINK_TAGS + ')\\s*>', 'i'), ' ');
    return s.trim();
  }
  function thinkKey() { return epBase(S.gep) + '|' + S.gmodel; }
  function thinks() { return S.gthinks === thinkKey(); }
  function markThinks() { if (!thinks()) { S.gthinks = thinkKey(); saveSettings(); } }
  function httpWhy(code, tx) {
    var why = '';
    try { var j = JSON.parse(tx), e = j.error; why = String((e && e.message) || (typeof e === 'string' ? e : '') || j.message || j.detail || ''); } catch (x) { why = String(tx || ''); }
    why = why.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
    var k = code === 401 || /invalid.{0,12}(api.?)?(key|token)|key not valid|无效的令牌|令牌.{0,6}(无效|过期|不存在)/i.test(tx) ? 'key'
      : code === 402 || /insufficient|quota|balance|out of credit|余额|额度/i.test(tx) ? 'money'
      : code === 404 || /model.{0,40}(not found|not exist|unknown)|no available channel|无可用渠道|模型不存在/i.test(tx) ? 'model'
      : code === 429 ? 'rate' : /location is not supported|not available in your (country|region)/i.test(tx) ? 'region'
      : /context.{0,12}length|maximum context|too long/i.test(tx) ? 'long' : code >= 500 ? 'server' : '';
    return (k ? t('ui.gs.err.' + k) : 'HTTP ' + code) + (why && !k ? ': ' + why : '') + ' (' + code + ')';
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  /* один запрос. route: chat (обычный) или responses (запасной путь того же сервера) */
  function ask1(prompt, sys, o) {
    var max = (o.max || 2500) + (thinks() && !o.noThink ? 8000 : 0), url, body;
    if (o.route === 'responses') {
      url = epChat(S.gep).replace(/\/chat\/completions$/, '/responses');
      body = { model: S.gmodel, instructions: sys, input: prompt, temperature: 0.4, max_output_tokens: max };
    } else {
      url = epChat(S.gep);
      body = { model: S.gmodel, temperature: 0.4, max_tokens: max, messages: [{ role: 'system', content: sys }, { role: 'user', content: prompt }] };
      if (o.noThink) {
        body.reasoning = { enabled: false };                   /* OpenRouter */
        body.reasoning_effort = 'none';                        /* новые OpenAI-совместимые */
        body.enable_thinking = false;                          /* Qwen, GLM */
        body.chat_template_kwargs = { enable_thinking: false }; /* vLLM, SGLang */
        body.thinking = { type: 'disabled' };                  /* шлюзы под Claude */
      }
    }
    return within(fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + G.key }, body: JSON.stringify(body) }), 150000)
      .then(null, function (e) {
        var m = String(e && e.message || e), net = /failed to fetch|load failed|networkerror/i.test(m);
        var er = new Error(net ? t('ui.gs.err.cors') : m === 'timeout' ? t('ui.gs.err.timeout') : m); er.net = net; throw er;
      })
      .then(function (r) {
        return r.text().then(function (tx) {
          if (!r.ok) {
            if (/exhausted by model reasoning|reasoning.{0,40}token limit/i.test(tx)) { markThinks(); var te = new Error(t('ui.gs.err.think')); te.think = true; throw te; }
            var he = new Error(httpWhy(r.status, tx)); he.status = r.status;
            if (o.route === 'chat' && (r.status === 404 || r.status === 405) && !/model/i.test(tx)) he.noRoute = true;
            throw he;
          }
          if (/^\s*</.test(tx)) { var ue = new Error(t('ui.gs.err.html')); ue.noRoute = o.route === 'chat'; throw ue; }
          var j = null; try { j = JSON.parse(tx); } catch (e) { throw new Error(t('ui.gs.badAnswer')); }
          var out = '', trace = false;
          if (o.route === 'responses') {
            out = typeof j.output_text === 'string' ? j.output_text : (j.output || []).filter(function (x) { return x && x.type === 'message'; }).map(function (x) { return (x.content || []).map(function (c) { return c.text || ''; }).join(''); }).join('');
            trace = (j.output || []).some(function (x) { return x && x.type === 'reasoning'; });
          } else {
            var ch = j.choices && j.choices[0], m = ch && ch.message;
            out = m && m.content;
            if (out && typeof out !== 'string' && out.length) out = Array.prototype.map.call(out, function (x) { return (x && (x.text || x.content)) || ''; }).join('');
            if (!out && j.content && j.content[0]) out = j.content[0].text;
            trace = !!(m && (m.reasoning_content || m.reasoning)) || +((j.usage && j.usage.completion_tokens_details && j.usage.completion_tokens_details.reasoning_tokens) || 0) > 0;
            if (!out && j.error) throw new Error(String(j.error.message || j.error));
          }
          if (trace) markThinks();
          out = noThinkText(out);
          if (!out) { markThinks(); var ee = new Error(t('ui.gs.err.think')); ee.think = true; throw ee; }
          return out;
        });
      });
  }
  /* с повторами: другой путь сервера, пауза на 429, повтор без размышлений, если думалка съела ответ */
  async function askOwn(prompt, sys) {
    var routes = G.route === 'responses' ? ['responses', 'chat'] : ['chat', 'responses'];
    var noThink = S.gthink === 'off', tries429 = 0, triedNoThink = noThink;
    for (var i = 0; i < routes.length;) {
      try {
        var out = await ask1(prompt, sys, { route: routes[i], noThink: noThink, max: 2500 });
        G.route = routes[i];
        return out;
      } catch (e) {
        if (e.status === 429 && tries429 < 2) { tries429++; await wait(tries429 * 6000); continue; }
        if (e.think && !triedNoThink) { triedNoThink = noThink = true; continue; }
        if ((e.noRoute || e.net) && i + 1 < routes.length) { i++; continue; }
        throw e;
      }
    }
    throw new Error(t('ui.gs.empty'));
  }
  function ask(prompt) {
    var sys = 'You are a careful assistant for a roleplay world tracker. Answer with JSON only.';
    if (S.gsrc === 'tavo') {
      if (!T || typeof T.generate !== 'function') return Promise.reject(new Error(t('ui.gs.noTavo')));
      return within(Promise.resolve(T.generate(sys + '\n\n' + prompt, { context: false })), 150000).then(function (r) { return noThinkText(r == null ? '' : r); });
    }
    return askOwn(prompt, sys);
  }
  /* список моделей провайдера — как в PUSYA SOCIAL: /models и /v1/models по очереди */
  async function fetchModels() {
    var urls = epModels(S.gep);
    if (!urls.length) { toast(t('ui.gs.needEp')); return; }
    G.models = null; G.modelsBusy = true; G.modelsErr = ''; openSheet({ type: 'models', title: t('ui.gs.models') });
    var hdrs = {}; if (G.key) hdrs.Authorization = 'Bearer ' + G.key;
    var last = '';
    for (var i = 0; i < urls.length; i++) {
      try {
        var r = await within(fetch(urls[i], { headers: hdrs }), 30000);
        if (!r.ok) { last = httpWhy(r.status, await r.text().catch(function () { return ''; })); if (r.status === 401 || r.status === 403) break; continue; }
        var j = await r.json(), data = j.data || j.models || j, list = [];
        if (Array.isArray(data)) data.forEach(function (m) { var id = m && typeof m === 'object' ? (m.id || m.name) : m; if (typeof id === 'string') list.push(id.replace(/^models\//, '')); });
        if (list.length) { G.models = list.sort(); break; }
        last = t('ui.gs.modelsEmpty');
      } catch (e) { var m = String(e && e.message || e); last = /failed to fetch|load failed|networkerror/i.test(m) ? t('ui.gs.err.cors') : m; }
    }
    G.modelsBusy = false;
    if (!G.models) G.modelsErr = last || t('ui.gs.modelsEmpty');
    if (UI.sheet && UI.sheet.type === 'models') renderSheet();
  }
  function askJSON(prompt) {
    return ask(prompt).then(function (tx) {
      var j = PWL.parseJSON(tx);
      if (j) return j;
      return ask(prompt + '\n\nYOUR PREVIOUS ANSWER WAS NOT VALID JSON. Reply with the JSON object only.').then(function (t2) {
        var j2 = PWL.parseJSON(t2);
        if (!j2) throw new Error(t('ui.gs.badAnswer'));
        return j2;
      });
    });
  }
  async function loadGossip() {
    var r = await vread('pwl_gossip', 'chat');
    if (r.ok) { var v = r.v || {}; G.pending = Array.isArray(v.pending) ? v.pending : []; G.last = typeof v.last === 'number' ? v.last : -1; }
    var k = await vread('pwl_key', 'global');
    if (k.ok) G.key = k.v || '';
  }
  function saveGossip() { vset('pwl_gossip', { pending: G.pending.slice(-30), last: G.last }, 'chat'); syncDock(); }

  /* Читает новые сообщения, когда их набралось S.gevery */
  async function observe(force) {
    if (!gOn() || G.busy || (!S.gevery && !force)) return;
    var since = G.last < 0 ? Math.max(0, MCOUNT - S.gevery) : G.last;
    var fresh = MCOUNT - since;
    if (!force && fresh < S.gevery) return;
    if (fresh <= 0 && !force) return;
    var take = RECENT.slice(-Math.min(14, Math.max(fresh, force ? 8 : 0)));
    if (!take.length) return;
    G.busy = true; G.err = ''; paintGossip();
    try {
      var j = await askJSON(PWL.observePrompt(W, take));
      var found = PWL.parseObserve(W, j);
      var key = function (f) { return [f.k, f.name || f.who, f.with || '', f.value || ''].join('|').toLowerCase(); };
      var have = {}; G.pending.forEach(function (f) { have[key(f)] = 1; });
      found.forEach(function (f) { if (!have[key(f)]) G.pending.push(f); });
      G.last = MCOUNT;
      saveGossip();
      if (found.length) toast(t('ui.gs.found', { n: found.length }));
    } catch (e) { G.err = String(e && e.message || e).slice(0, 200); }
    G.busy = false; paintGossip();
  }
  async function flavorize() {
    if (!gOn() || !S.gflavor || G.fbusy || Date.now() - G.flavorAt < 15000) return;
    var list = PWL.needFlavor(W, 8);
    if (!list.length) return;
    G.fbusy = true; G.flavorAt = Date.now();
    try {
      var j = await askJSON(PWL.flavorPrompt(W, list, PWL.chatLang(RECENT)));
      if (PWL.applyFlavor(W, j)) { save(true); if (isOpen()) render(true); }
    } catch (e) {}
    G.fbusy = false;
  }
  /* Признаки мира: определяются сами по чату и людям, пока не выставлены вручную */
  function autoTraits() {
    if (W.traits && W.traits.src === 'hand') return;
    var text = RECENT.map(PWL.msgText).join(' ') + ' ' + Object.keys(W.people).map(function (id) { return P(id).bio + ' ' + P(id).role.title + ' ' + P(id).role.job + ' ' + P(id).traits.join(' '); }).join(' ');
    var d = PWL.detectTraits(text), cur = W.traits || {};
    if (!!cur.magic === d.magic && !!cur.nobility === d.nobility && !!cur.modern === d.modern && cur.src === 'auto') return;
    if (cur.src === 'auto' && !d.magic && !d.nobility && !d.modern) return;
    W.traits = { magic: d.magic || (cur.src === 'auto' && cur.magic), nobility: d.nobility || (cur.src === 'auto' && cur.nobility), modern: d.modern || (cur.src === 'auto' && cur.modern), src: 'auto' };
    save();
  }
  function paintGossip() { var el = $('pwl-gossip'); if (el) el.outerHTML = gossipBlock(); syncDock(); }

  /* ── «Сплетница заметила» на главном экране ── */
  var GKI = { person: 'people', marry: 'ring', divorce: 'swords', engage: 'ring', date: 'heart', breakup: 'heart', death: 'candle', ill: 'drop', heal: 'drop', move: 'eye', job: 'briefcase', title: 'crown', quarrel: 'swords', reconcile: 'heart', enemy: 'swords', secret_new: 'lock', secret_out: 'bubble', pregnant: 'heart', birth: 'star', kin: 'people' };
  function findText(f) {
    if (f.k === 'person') return t('ui.gs.k.person', { a: f.name, v: [f.title, f.job, f.place].filter(Boolean).join(', ') || '—' });
    return t('ui.gs.k.' + f.k, { a: f.who, b: f.with || '?', v: f.k === 'kin' ? t('ui.kin.' + (f.value === 'parent' ? 'parent' : f.value === 'child' ? 'child' : 'sibling')) : (f.value || '') });
  }
  /* ── разобрать весь чат: история кусками по порядку, всё найденное вносится само ── */
  var FULL = null, FULL_CH = 24;
  async function readAll() {
    if (!gOn()) { gTurnOn(); if (!gOn()) return; }
    if (G.busy || (FULL && !FULL.done)) return;
    var all = await msgs(), parts = [];
    for (var i = 0; i < all.length; i += FULL_CH) parts.push(all.slice(i, i + FULL_CH));
    if (!parts.length) { toast(t('ui.full.empty')); return; }
    FULL = { i: 0, n: parts.length, people: 0, changes: 0, snap: JSON.stringify(W), stop: false, done: false, err: '', fails: 0 };
    G.busy = true; G.err = '';
    if (UI.view !== 'people') { STACK = []; go('people'); } else paintGossip();
    for (var k = 0; k < parts.length && !FULL.stop; k++) {
      FULL.i = k; paintGossip();
      try {
        var found = PWL.parseObserve(W, await askJSON(PWL.observePrompt(W, parts[k])), { max: 24, maxc: 30 });
        found.sort(function (a, b) { return (a.k === 'person' ? 0 : 1) - (b.k === 'person' ? 0 : 1); });
        found.forEach(function (f) { if (!PWL.applyFinding(W, f)) { if (f.k === 'person') FULL.people++; else FULL.changes++; } });
        if (found.length) save(true);
        FULL.fails = 0;
      } catch (e) {
        FULL.err = String(e && e.message || e).slice(0, 200);
        if (++FULL.fails >= 2) break;
      }
    }
    FULL.done = true; G.busy = false; G.last = MCOUNT; saveGossip();
    await flush(); rescan();
    if (isOpen()) render(true);
    toast(t('ui.full.done', { p: FULL.people, c: FULL.changes }));
  }
  function undoAll() {
    if (!FULL || !FULL.snap) return;
    W = PWL.world(JSON.parse(FULL.snap)); FULL = null;
    save(true); rescan(); render(true); toast(t('ui.full.undone'));
  }
  /* включить Сплетницу одним тапом: модель Tavo, если она есть, иначе — в настройки */
  function gTurnOn() {
    if (gOn()) return true;
    if (T && typeof T.generate === 'function') { S.gsrc = 'tavo'; saveSettings(); toast(t('ui.gs.nowOn')); return true; }
    STACK = [{ view: 'people' }]; go('set', 'push'); toast(t('ui.gs.needSetup'));
    return false;
  }
  function fullBlock() {
    if (!FULL) return '';
    if (!FULL.done) return '<div class="pwl-full"><div class="bar"><span style="width:' + Math.round((FULL.i + 0.5) / FULL.n * 100) + '%"></span></div><p>' + esc(t('ui.full.reading', { i: FULL.i + 1, n: FULL.n })) + '</p><small>' + esc(t('ui.full.sofar', { p: FULL.people, c: FULL.changes })) + '</small>' + (FULL.stop ? '' : '<span class="pwl-link" data-act="gfullstop">' + esc(t('ui.full.stop')) + '</span>') + '</div>';
    return '<div class="pwl-full done"><p>' + esc(t('ui.full.result', { p: FULL.people, c: FULL.changes })) + '</p>' + (FULL.err ? '<small class="err">' + esc(t('ui.gs.error', { e: FULL.err })) + '</small>' : '') +
      '<div class="gall"><span class="pwl-link" data-act="gfullok">' + esc(t('ui.full.ok')) + '</span>' + (FULL.people || FULL.changes ? '<span class="pwl-link" data-act="gfullundo">' + esc(t('ui.full.undo')) + '</span>' : '') + '</div></div>';
  }
  function gossipBlock() {
    if (S.gsrc === 'off' && !G.pending.length && !FULL) return '<div id="pwl-gossip"></div>';
    var h = '<div class="pwl-gossip" id="pwl-gossip"><div class="gh">' + svg('gossip') + '<b>' + esc(t('ui.gs.name')) + '</b>';
    if (G.busy) h += '<small class="busy">' + esc(t('ui.gs.reading')) + '</small>';
    else if (gOn()) h += '<span class="pwl-link" data-act="gread">' + esc(t('ui.gs.readNow')) + '</span>';
    h += '</div>' + fullBlock();
    if (FULL && !FULL.done) return h + '</div>';
    if (G.err) h += '<p class="pwl-hint err">' + esc(t('ui.gs.error', { e: G.err })) + '</p>';
    var fullBtn = gOn() && !G.busy && (!FULL) && MCOUNT > (S.gevery || 8) ? '<span class="pwl-btn pwl-fullbtn" data-act="gfull">' + svg('scroll') + esc(t('ui.full.btn', { n: MCOUNT })) + '</span>' : '';
    if (!G.pending.length) return h + (G.busy || G.err || FULL ? '' : '<p class="pwl-hint">' + esc(gOn() ? t('ui.gs.quiet', { n: S.gevery || '—' }) : t('ui.gs.setup')) + '</p>') + fullBtn + '</div>';
    h += G.pending.slice(0, 6).map(function (f, i) {
      return '<div class="pwl-find" style="--i:' + i + '"><i>' + svg(GKI[f.k] || 'bubble') + '</i><div><p>' + esc(findText(f)) + '</p>' + (f.quote ? '<small>«' + esc(f.quote) + '»</small>' : f.bio ? '<small>' + esc(f.bio) + '</small>' : '') + '</div>' +
        '<span class="ok" data-act="gaccept" data-v="' + f.id + '">' + svg('check') + '</span><span class="no" data-act="greject" data-v="' + f.id + '">' + svg('close') + '</span></div>';
    }).join('');
    if (G.pending.length > 1) h += '<div class="gall"><span class="pwl-link" data-act="gacceptall">' + esc(t('ui.gs.acceptAll', { n: G.pending.length })) + '</span><span class="pwl-link" data-act="grejectall">' + esc(t('ui.gs.rejectAll')) + '</span></div>';
    return h + fullBtn + '</div>';
  }
  function acceptFinding(id, quiet) {
    var f = G.pending.filter(function (x) { return x.id === id; })[0];
    if (!f) return false;
    var code = PWL.applyFinding(W, f);
    if (code && code !== 'exists') { if (!quiet) toast(t('ui.gs.err.' + code, { name: code === 'who' ? f.who : f.with })); return false; }
    G.pending = G.pending.filter(function (x) { return x.id !== id; });
    return true;
  }

  /* ── умный импорт лорбука ── */
  async function smartImport() {
    var L = UI.lore, sel = Object.keys(L.sel || {}).filter(function (k) { return L.sel[k]; });
    var ents = (L.entries || []).filter(function (e) { return sel.indexOf(e.id) >= 0; });
    L.ai = true; render(true);
    try {
      var j = await askJSON(PWL.lorePrompt(ents));
      var made = PWL.applyLore(W, j, L.bookId, sel);
      if (!made.length) throw new Error(t('ui.gs.empty'));
      save(true); rescan();
      toast(t('ui.gs.loreDone', { n: made.length }));
      L.ai = false; L.sel = {}; STACK = []; go('people', 'pop');
    } catch (e) {
      L.ai = false;
      toast(t('ui.gs.loreFail'));
      var n = 0;
      ents.forEach(function (e) { if (!e.card && !PWL.byName(W, e.title)) { PWL.addPerson(W, PWL.fromLore(e, L.bookId)); n++; } });
      if (n) { save(true); rescan(); L.sel = {}; STACK = []; go('people', 'pop'); } else render(true);
    }
  }

  /* ── настройки ── */
  function gossipCard() {
    var h = '<p class="pwl-hint">' + esc(t('ui.gs.about')) + '</p>';
    h += seg('gsrc', S.gsrc, [['off', t('ui.dir.m.off')], ['tavo', t('ui.gs.src.tavo')], ['own', t('ui.gs.src.own')]]);
    if (S.gsrc === 'tavo') h += '<p class="pwl-hint">' + esc(t('ui.gs.tavoD')) + '</p>';
    if (S.gsrc === 'own') {
      h += field(t('ui.gs.ep'), 'data-gs="gep"', S.gep, 'openrouter.ai/api/v1') + '<p class="pwl-hint">' + esc(t('ui.gs.epD')) + '</p>';
      h += '<label class="pwl-l">' + esc(t('ui.gs.key')) + '</label><input type="password" data-gkey="1" value="' + esc(G.key) + '" placeholder="sk-…" autocomplete="off">';
      h += '<p class="pwl-hint">' + esc(t('ui.gs.keyD')) + '</p>';
      h += '<label class="pwl-l">' + esc(t('ui.gs.model')) + '</label><div class="pwl-row2"><div class="pwl-col"><input data-gs="gmodel" value="' + esc(S.gmodel) + '" placeholder="google/gemini-2.5-flash"></div>' + btn('gmodels', t('ui.gs.pick')) + '</div>';
      h += '<label class="pwl-l">' + esc(t('ui.gs.think')) + '</label>' + seg('gthink', S.gthink, [['auto', t('ui.gs.think.auto')], ['off', t('ui.gs.think.off')]]) + '<p class="pwl-hint">' + esc(t(S.gthink === 'off' ? 'ui.gs.think.offD' : thinks() ? 'ui.gs.think.seen' : 'ui.gs.think.autoD')) + '</p>';
    }
    if (S.gsrc !== 'off') {
      h += '<div class="pwl-row2">' + btn('gtest', G.testing ? t('ui.gs.testing') : t('ui.gs.test')) + '</div>';
      h += '<label class="pwl-l">' + esc(t('ui.gs.every')) + '</label>' + seg('gevery', S.gevery, [[0, t('ui.dir.m.off')], [4, '4'], [8, '8'], [16, '16']]);
      h += tog('gflag', 'gflavor', t('ui.gs.flavor'), t('ui.gs.flavorD'), S.gflavor) + tog('gflag', 'glore', t('ui.gs.lore'), t('ui.gs.loreD'), S.glore);
      h += btn('gfull', t('ui.full.btn', { n: MCOUNT })) + '<p class="pwl-hint">' + esc(t('ui.full.hint')) + '</p>';
      h += '<p class="pwl-hint">' + esc(t('ui.gs.privacy')) + '</p>';
    }
    return h;
  }
  var TRI = [['magic', 'moon'], ['nobility', 'crown'], ['modern', 'phone']];
  function traitsLine() {
    var tr = W.traits || {};
    return '<div class="pwl-traits">' + TRI.map(function (x) {
      return '<span class="' + (tr[x[0]] ? 'on' : '') + '" data-act="trait" data-v="' + x[0] + '">' + svg(x[1]) + '<b>' + esc(t('ui.world.' + x[0])) + '</b></span>';
    }).join('') + '</div><p class="pwl-hint">' + esc(t(tr.src === 'hand' ? 'ui.world.hand' : 'ui.world.auto')) + (tr.src === 'hand' ? ' <span class="pwl-link" data-act="traitauto">' + esc(t('ui.world.toAuto')) + '</span>' : '') + '</p>';
  }

  /* ════ Игра за НПС: экран сцены ════ */
  var PACTI = { talk: 'bubble', charm: 'heart', confess: 'flame', propose: 'ring', quarrel: 'swords', reconcile: 'sprout', snoop: 'eye', blackmail: 'lock', expose: 'news', matchmake: 'people', letter: 'file', scheme: 'mask', go: 'globe', free: 'edit' };
  var PACTC = { talk: '#6fb6f2', charm: '#f2709c', confess: '#f2709c', propose: '#e6c36f', quarrel: '#ef6767', reconcile: '#8fd17a', snoop: '#74d3bf', blackmail: '#f0a35a', expose: '#f0a35a', matchmake: '#e6c36f', letter: '#9fa3c8', scheme: '#b48cf2', go: '#9fa3c8', free: '#d9b765' };
  var TONEC = { warm: '#f2a07c', bold: '#ef6767', sly: '#b48cf2', cold: '#6fb6f2' };
  function PL() { return UI.play || (UI.play = {}); }
  function playLine(l) {
    var nm = function (x) { return x && P(x) ? P(x).name : '?'; };
    var key = l.c === 'like' ? (l.d > 0 ? 'like_up' : 'like_down') : l.c;
    var v = l.s ? PWL.secretText(W, W.secrets.filter(function (x) { return x.id === l.s; })[0] || { text: l.v }, LANG) : l.c === 'goal' ? l.v + '%' : l.v;
    return t('ui.play.l.' + key, { name: nm(l.id), name2: nm(l.id2), v: v == null ? '' : v });
  }
  function actCard(a, i) {
    return '<div class="pwl-pact" data-act="pact" data-v="' + a.k + '" style="--c:' + PACTC[a.k] + ';--i:' + i + '"><i>' + svg(PACTI[a.k]) + '</i><b>' + esc(t('ui.play.a.' + a.k)) + '</b><small>' + esc(t('ui.play.d.' + a.k)) + '</small></div>';
  }
  function viewPlay() {
    var S0 = PL(), me = UI.pid, p = P(me);
    if (!p || !PWL.playable(W, me)) { UI.view = 'person'; return viewStory(); }
    var hc = p.house && W.houses[p.house] ? houseColor(p.house) : '#5d6a80', near0 = PWL.nearby(W, me);
    var h = '<div class="pwl-phero" style="--hc:' + hc + '">' + face(me, { big: true }) + '<div><small>' + esc(t('ui.play.as')) + '</small><b>' + esc(p.name) + '</b>' +
      '<span>' + svg('globe') + esc(p.role.place || t('ui.play.nowhere')) + '</span></div></div>';
    h += '<div class="pwl-near"><small>' + esc(t('ui.play.near')) + '</small>' + (near0.length ? near0.slice(0, 8).map(function (o) { return '<span title="' + esc(P(o).name) + '">' + face(o) + '</span>'; }).join('') : '<em>' + esc(t('ui.play.alone')) + '</em>') + '</div>';

    if (S0.stage === 'busy') return h + '<div class="pwl-aiwait">' + svg('gossip') + esc(t('ui.play.writing')) + '</div>' + (S0.text ? '<div class="pwl-scene">' + esc(S0.text) + '</div>' : '');
    if (S0.stage === 'choose') {
      h += '<div class="pwl-scene">' + esc(S0.text) + '</div><div class="pwl-opts">' + S0.options.map(function (o, i) {
        return '<div class="pwl-opt" data-act="ptone" data-v="' + i + '" style="--c:' + (TONEC[o.tone] || '#d9b765') + ';--i:' + i + '"><em>' + esc(t('ui.play.tone.' + o.tone)) + '</em><span>' + esc(o.text) + '</span></div>';
      }).join('') + '</div>';
      return h;
    }
    if (S0.stage === 'done') {
      var R = S0.res || { ok: true, lines: [] };
      h += (S0.text ? '<div class="pwl-scene">' + esc(S0.text) + '</div>' : '');
      h += '<div class="pwl-result ' + (R.ok ? 'ok' : 'no') + '"><div class="rh">' + svg(R.ok ? 'check' : 'close') + '<b>' + esc(t(R.ok ? 'ui.play.ok' : 'ui.play.no')) + '</b>' + (R.chance != null && R.chance < 1 ? '<small>' + esc(t('ui.play.ch.' + PWL.chanceWord(R.chance))) + '</small>' : '') + '</div>' +
        (S0.lines && S0.lines.length ? S0.lines.map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') : '') +
        (S0.summary ? '<p class="sum">' + esc(S0.summary) + '</p>' : '') + '</div>';
      h += '<div class="pwl-row2">' + btn('pagain', t('ui.play.again'), 'main') + btn('pchat', t('ui.play.toChat')) + '</div>';
      h += '<span class="pwl-link" data-act="pdone">' + esc(t('ui.play.done')) + '</span>';
      return h;
    }
    var acts = PWL.actsFor(W, me, S);
    if (S0.k) {
      var A = acts.filter(function (a) { return a.k === S0.k; })[0];
      h += '<div class="pwl-pick"><div class="ph" data-act="pback">' + svg('back') + '<b>' + esc(t('ui.play.a.' + S0.k)) + '</b></div>';
      if (S0.k === 'go') {
        h += '<div class="pwl-cats wrap">' + PWL.allPlacesOf(W).filter(function (x) { return x !== p.role.place; }).map(function (x) { return '<span data-act="pplace" data-v="' + esc(x) + '" style="--c:#9fa3c8">' + esc(x) + '</span>'; }).join('') + '</div>';
        h += '<div class="pwl-row2"><div class="pwl-col"><input id="pwl-pplace" placeholder="' + esc(t('ui.play.placePh')) + '"></div><span class="pwl-ibtn" data-act="pplace">' + svg('chev') + '</span></div>';
      } else if (S0.k === 'free') {
        h += gOn() ? '<textarea id="pwl-pfree" rows="3" placeholder="' + esc(t('ui.play.freePh', { name: p.name })) + '"></textarea>' + btn('pfree', t('ui.play.freeGo'), 'main') : '<p class="pwl-hint">' + esc(t('ui.play.freeNeed')) + '</p>';
      } else if (S0.k === 'scheme') {
        var g = W.goals.filter(function (x) { return x.owner === me && !x.end; })[0];
        h += '<p class="pwl-hint">' + esc(g ? t('ui.goal.' + g.t, { name: g.target && P(g.target) ? P(g.target).name : '' }) + ' · ' + g.pr + '%' : '') + '</p>' + btn('ptgt', t('ui.play.go'), 'main', ' data-v=""');
      } else if (A && A.targets) {
        h += '<div class="pwl-faces pick">' + A.targets.slice(0, 40).map(function (o, i) {
          var c = PWL.chanceWord(PWL.actChance(W, me, S0.k, o));
          return '<div class="pwl-fc" data-act="ptgt" data-v="' + o + '" style="--i:' + i + '">' + face(o) + '<b>' + esc(P(o).name) + '</b><small class="ch ' + c + '">' + esc(t('ui.play.ch.' + c)) + '</small></div>';
        }).join('') + '</div>';
      }
      return h + '</div>';
    }
    h += '<div class="pwl-pacts">' + acts.map(actCard).join('') + '</div>';
    h += '<p class="pwl-hint">' + esc(t(gOn() ? 'ui.play.hint' : 'ui.play.hintNoAI')) + '</p>';
    return h;
  }
  /* начать действие */
  async function playStart(k, o, extra) {
    var S0 = PL(), me = UI.pid;
    S0.k = k; S0.o = o || null; S0.extra = extra || {};
    if (gOn() && k !== 'go' && k !== 'scheme') {
      S0.stage = 'busy'; S0.text = ''; render('fresh');
      try {
        var sc = PWL.parseScene(await askJSON(PWL.scenePrompt(W, me, k, o, 'open', { lang: PWL.chatLang(RECENT), place: S0.extra.place })));
        if (sc && sc.scene && sc.options.length) { S0.stage = 'choose'; S0.text = sc.scene; S0.options = sc.options; render('fresh'); return; }
      } catch (e) { toast(t('ui.gs.error', { e: String(e && e.message || e).slice(0, 100) })); }
    }
    playResolve(null);
  }
  async function playResolve(choice) {
    var S0 = PL(), me = UI.pid;
    var res = PWL.playAct(W, me, S0.k, S0.o, { tone: choice && choice.tone, place: S0.extra && S0.extra.place });
    save(true); rescan();
    S0.res = res; S0.lines = res.lines.map(playLine);
    var opening = S0.stage === 'choose' ? S0.text : '';
    if (gOn() && S0.k !== 'go' && S0.k !== 'scheme') {
      S0.stage = 'busy'; S0.text = opening; render('fresh');
      try {
        var sc = PWL.parseScene(await askJSON(PWL.scenePrompt(W, me, S0.k, S0.o, 'end', { lang: PWL.chatLang(RECENT), history: opening, choice: choice && choice.text, outcome: PWL.outcomeEn(W, me, S0.k, S0.o, res) })));
        if (sc) {
          S0.text = [opening, choice ? '— ' + choice.text : '', sc.scene].filter(Boolean).join('\n\n');
          S0.summary = sc.summary;
          if (res.ev && sc.summary) { res.ev.v.flavor = sc.summary; save(true); }
        }
      } catch (e) { S0.text = opening; }
    } else S0.text = opening;
    S0.stage = 'done'; render('fresh');
    var b = $('pwl-body'); if (b) b.scrollTop = 0;
  }
  async function playFree(text) {
    var S0 = PL(), me = UI.pid;
    if (!text) return;
    S0.k = 'free'; S0.stage = 'busy'; S0.text = ''; render('fresh');
    try {
      var sc = PWL.parseScene(await askJSON(PWL.scenePrompt(W, me, 'free', null, 'free', { lang: PWL.chatLang(RECENT), text: text })));
      var done = PWL.applyFree(W, me, sc || {});
      save(true); rescan();
      S0.text = sc ? sc.scene : ''; S0.summary = sc ? sc.summary : '';
      S0.res = { ok: true, lines: [] }; S0.lines = done.map(findText);
      var last = W.events.filter(function (e) { return e.v && e.v.played && (e.a === me || e.b === me); }).pop();
      if (last && S0.summary && !last.v.flavor) { last.v.flavor = S0.summary; save(true); }
    } catch (e) { S0.res = { ok: false, lines: [] }; S0.lines = [t('ui.gs.error', { e: String(e && e.message || e).slice(0, 100) })]; }
    S0.stage = 'done'; render('fresh');
  }
  function playToChat() {
    var S0 = PL(), me = UI.pid;
    var body = S0.summary || (S0.res && S0.res.ev ? (S0.res.ev.v.flavor || PWL.evText(W, S0.res.ev, LANG)) : S0.lines && S0.lines.join('; ')) || '';
    var tx = '*' + t('ui.play.meanwhile', { name: P(me).name }) + ' ' + body + '*';
    try {
      if (T && T.input && T.input.set) { T.input.set(tx); toast(t('ui.play.inInput')); return; }
      if (T && T.input && T.input.append) { T.input.append(tx); toast(t('ui.play.inInput')); return; }
    } catch (e) {}
    copyText(tx);
  }

  /* ════ Как пользоваться: разделы раскрываются по тапу, легенда значков ════ */
  var GUIDE = ['how', 'start', 'people', 'badges', 'houses', 'director', 'time', 'life', 'news', 'intrigue', 'gossip', 'model', 'play', 'move', 'window'];
  function viewGuide() {
    var h = '<div class="pwl-ghero">' + TREE + '<div><b>' + esc(t('ui.guide.title')) + '</b><small>' + esc(t('ui.guide.intro')) + '</small></div></div>';
    h += '<div class="pwl-guide">' + GUIDE.map(function (k, i) {
      var body;
      if (k === 'badges') {
        body = '<div class="pwl-legend">' + BADGE.map(function (b) {
          return '<div><i style="--c:' + b.c + '">' + svg(b.i) + '</i><span><b>' + esc(t('ui.badge.' + b.k)) + '</b><small>' + esc(t('ui.guide.bd.' + b.k)) + '</small></span></div>';
        }).join('') + '</div>';
      } else {
        var key = k === 'window' && ST_WIN ? 'windowST' : k;
        body = '<p>' + esc(t('ui.guide.' + key + '.d')).replace(/\n/g, '<br>') + '</p>';
      }
      return '<details class="pwl-gq" style="--i:' + i + '"' + (UI.gOpen === k ? ' open' : '') + ' data-g="' + k + '"><summary><span>' + esc(t('ui.guide.' + k + '.t')) + '</span>' + svg('chev') + '</summary>' + body + '</details>';
    }).join('') + '</div>';
    return h + '<p class="pwl-hint pwl-foot2">' + esc(t('settings.info.author')) + '</p>';
  }

  /* карточки героев чата: описание, характер, сценарий, первое сообщение и встроенный лорбук */
  async function loadCards() {
    if (!T || !T.character || typeof T.character.get !== 'function') return [];
    var c = null;
    try { c = await within(T.chat.current(), 4000); } catch (e) {}
    var ids = ((c && c.characters) || []).map(function (x) { return x && typeof x === 'object' ? (x.id != null ? x.id : x.character_id != null ? x.character_id : x.avatar) : x; });
    if (c && c.character_id != null) ids.unshift(c.character_id);
    if (c && c.characterId != null) ids.unshift(c.characterId);
    var seen = {}, out = [];
    for (var i = 0; i < ids.length && out.length < 6; i++) {
      var id = ids[i];
      if (id == null || seen[id]) continue;
      seen[id] = 1;
      var ch = null;
      try { ch = await within(T.character.get(id), 6000); } catch (e) {}
      if (!ch) continue;
      var d = ch.data && typeof ch.data === 'object' ? Object.assign({}, ch, ch.data) : ch, nm = String(ch.name || d.name || '').trim();
      var parts = [['desc', d.description], ['pers', d.personality], ['scen', d.scenario], ['first', d.first_mes != null ? d.first_mes : d.firstMes], ['ex', d.mes_example != null ? d.mes_example : d.mesExample]];
      var ents = parts.filter(function (x) { return x[1] && String(x[1]).trim(); }).map(function (x) {
        return { id: 'card:' + x[0], title: t('ui.card.' + x[0]), keys: [], body: String(x[1]).replace(/\{\{char\}\}/gi, nm).replace(/\{\{user\}\}/gi, CHAT.user || 'User').slice(0, 9000), card: true, long: true };
      });
      var book = d.character_book || d.characterBook || (d.extensions && d.extensions.character_book);
      if (book) PWL.loreEntries(book).filter(function (e) { return !e.off; }).forEach(function (e) { e.id = 'cb:' + e.id; ents.push(e); });
      if (ents.length) out.push({ id: 'card:' + id, name: nm || '?', card: true, n: ents.length, entries: ents });
    }
    return out;
  }
  async function loadBooks() {
    UI.lore = { busy: true };
    var cards = [];
    try { cards = await loadCards(); } catch (e) {}
    try {
      var list = T.lorebook && T.lorebook.all ? await within(T.lorebook.all(), 8000) : [];
      UI.lore = { books: cards.concat((Array.isArray(list) ? list : []).map(function (b) {
        var ent = b && (b.entries || b.items);
        return { id: b && (b.id != null ? b.id : b.uid), name: b && (b.name || b.title), n: ent ? (Array.isArray(ent) ? ent.length : Object.keys(ent).length) : null, raw: b };
      })) };
    } catch (e) { UI.lore = cards.length ? { books: cards, bookErr: true } : { err: true }; }
    if (isOpen() && UI.view === 'lore') render(true);
  }
  async function openBook(i) {
    var b = UI.lore.books[i];
    if (!b) return;
    UI.lore.book = b; UI.lore.bookId = b.id; UI.lore.entries = null; UI.lore.sel = {};
    if (b.card) {
      UI.lore.entries = b.entries.slice();
      /* из описания карточки людей достаёт Сплетница; без неё — только записи встроенного лорбука */
      UI.lore.entries.forEach(function (e) {
        if (e.card) { if (gOn() && (e.id === 'card:desc' || e.id === 'card:scen')) UI.lore.sel[e.id] = true; }
        else if (PWL.guessSex(e.body) !== 'x' && !PWL.hasLore(W, b.id, e.id) && !PWL.byName(W, e.title)) UI.lore.sel[e.id] = true;
      });
      render(true);
      return;
    }
    render(true);
    var full = b.raw;
    try { if (b.id != null && T.lorebook.get) full = (await within(T.lorebook.get(b.id), 8000)) || b.raw; } catch (e) {}
    UI.lore.entries = PWL.loreEntries(full).filter(function (e) { return !e.off; });
    UI.lore.entries.forEach(function (e) { if (PWL.guessSex(e.body) !== 'x' && !PWL.hasLore(W, b.id, e.id) && !PWL.byName(W, e.title)) UI.lore.sel[e.id] = true; });
    if (isOpen() && UI.view === 'lore') render(true);
  }

  var EVI = { job: '💼', move: '🧳', rich: '💰', poor: '🪙', ill: '🤒', heal: '🌿', death: '🕯️', meet: '🤝', quarrel: '⚡', feud: '⚔️', reconcile: '🕊️', date: '💞', affair: '🤫', breakup: '💔', engage: '💍', marry: '💒', divorce: '🥀', conceive: '🤰', birth: '👶', plot: '🎭', plotfail: '🫥', arranged: '📜', revenge: '🗡️', rise: '👑', sow: '🐍', discover: '🔍', blackmail: '✉️', scandal: '📣', contest: '🏆', withdraw: '🕯️', debut: '💃', inherit: '📜', fame: '✨', journey: '🗺️', return: '🏡', curse: '🌑', duel: '⚔️', compromise: '🎻', elope: '🌙', poison: '🍷' };
  var PUBI = { public: '📣', rumor: '🗣️', secret: '🔒' };
  function fmtDate(day) { var d = PWL.date(day); return t('ui.date', { y: d.y, s: t('ui.season.' + d.season), d: ((d.m - 1) % 3) * 30 + d.d }); }
  function fmtMonth(day) { var d = PWL.date(day); return t('ui.month', { y: d.y, s: t('ui.season.' + d.season), m: (d.m - 1) % 3 + 1 }); }
  function heroId() { var m = PWL.mains(W); return m.filter(function (id) { return P(id).flags.char; })[0] || m[0] || null; }
  function liveTick(days) {
    var before = W.events.length;
    var evs = PWL.tick(W, days, { settings: S, exclude: SCENE });
    setTimeout(flavorize, 50);
    UI.fresh = {}; evs.forEach(function (e) { UI.fresh[e.id] = 1; });
    setTimeout(function () { UI.fresh = null; }, 6000);
    save(true); rescan();
    var n = evs.filter(function (e) { return !e.minor; }).length;
    toast(t('ui.time.done', { date: fmtDate(W.clock.day), n: n }));
    if (UI.view !== 'chron') { STACK = []; UI.view = 'chron'; }
    render(); var b = $('pwl-body'); if (b) b.scrollTop = 0;
    return before;
  }

  /* ── листы ───────────────────────────────────────────────────────────── */
  function openSheet(s) { UI.sheet = s; UI.confirm = ''; renderSheet(); }
  function closeSheet() { UI.sheet = null; renderSheet(); }
  function renderSheet() {
    var el = $('pwl-sheet');
    if (!el) return;
    if (!UI.sheet) { el.classList.remove('on'); el.removeAttribute('data-k'); el.innerHTML = ''; return; }
    var keep = holdField(el), was = el.classList.contains('on') && el.getAttribute('data-k') === UI.sheet.type;
    el.innerHTML = sheetHtml2();
    el.classList.add('on');
    el.setAttribute('data-k', UI.sheet.type || '');
    if (was) settle(el);
    if (keep) keep();
  }
  function noteNow() { return PWL.compose({ world: W, settings: S, msgs: RECENT.slice(-S.scan), pins: PINS }); }

  /* ── окно ────────────────────────────────────────────────────────────── */
  function isOpen() { var w = $('pwl-win'); return !!(w && w.classList.contains('on')); }
  function ensureUi() {
    if ($('pwl-win')) return;
    var bk = document.createElement('div'); bk.id = 'pwl-back';
    bk.addEventListener('click', function () { close(); });
    var w = document.createElement('div'); w.id = 'pwl-win';
    w.innerHTML = '<div class="pwl-hd" id="pwl-hd"></div><div class="pwl-body" id="pwl-body"></div><div class="pwl-foot">PUSYA WORLD</div><div id="pwl-sheet"></div>' + (ST_WIN ? '<div id="pwl-grip" hidden></div>' : '');
    if (ST_WIN) { w.classList.add('st-win'); wireWin(w); }
    document.body.appendChild(bk); document.body.appendChild(w);
    w.addEventListener('click', onClick);
    w.addEventListener('input', onInput);
    w.addEventListener('change', onChange);
    w.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target && /^(pwl-thread|pwl-hname|pwl-newname)$/.test(e.target.id)) { e.preventDefault(); act(e.target.id === 'pwl-thread' ? 'thread' : e.target.id === 'pwl-hname' ? 'addhouse' : 'create', '', e.target); } });
    w.addEventListener('toggle', function (e) { if (e.target && e.target.getAttribute && e.target.getAttribute('data-det') === 'rel') UI.relOpen = e.target.open; }, true);
    ['touchstart', 'touchmove', 'mousedown', 'wheel'].forEach(function (n) { w.addEventListener(n, function (e) { e.stopPropagation(); }, { passive: true }); });
    offs.push(function () { [bk, w].forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); });
  }
  function winWide() { return ST_WIN && (window.innerWidth || 0) >= WIDE_MIN; }
  function placeWin() {
    var w = $('pwl-win');
    if (!w || !ST_WIN) return;
    var vw = window.innerWidth || 800, vh = window.innerHeight || 600, wide = winWide(), sz = wide ? UI.winSize : null, z = wide ? UI.winZoom : 1, g = $('pwl-grip');
    if (g) g.hidden = !wide;
    w.style.width = sz ? Math.round(Math.min(Math.max(+sz.w || 0, WIN_MIN.w), vw - 8)) + 'px' : '';
    w.style.height = sz ? Math.round(Math.min(Math.max(+sz.h || 0, WIN_MIN.h), vh - 8)) + 'px' : '';
    w.style.maxHeight = sz ? 'none' : '';
    w.style.setProperty('--pwl-z', String(z));
    w.classList.toggle('zoomed', z !== 1);
    w.classList.toggle('sized', !!sz);
    var p = UI.winPos;
    w.classList.toggle('moved', !!p);
    if (!p) { w.style.left = ''; w.style.top = ''; return; }
    if (!w.classList.contains('on')) return;
    var r = w.getBoundingClientRect();
    w.style.left = Math.round(Math.max(4, Math.min(+p.x || 0, vw - r.width - 4))) + 'px';
    w.style.top = Math.round(Math.max(4, Math.min(+p.y || 0, vh - r.height - 4))) + 'px';
  }
  function saveWin() { LS.set('pwl_winpos', UI.winPos); LS.set('pwl_winsize', UI.winSize); LS.set('pwl_winzoom', UI.winZoom); }
  function resetWin() { UI.winPos = null; UI.winSize = null; UI.winZoom = 1; saveWin(); placeWin(); if (isOpen() && UI.view === 'set') render(true); }
  function pinWin(w) { if (!UI.winPos) { var r = w.getBoundingClientRect(); UI.winPos = { x: Math.round(r.left), y: Math.round(r.top) }; placeWin(); } }
  function wireWin(w) {
    var g = w.querySelector('#pwl-grip'), mv = null, rs = null, tap = { at: 0, x: 0, y: 0 };
    function onHd(e) { return e.target.closest && e.target.closest('#pwl-hd') && !e.target.closest('[data-act]'); }
    w.addEventListener('pointerdown', function (e) {
      if (e.button > 0 || !onHd(e)) return;
      /* двойное касание или щелчок по шапке — окно на место */
      var now = Date.now();
      if (now - tap.at < 380 && Math.abs(e.clientX - tap.x) < 24 && Math.abs(e.clientY - tap.y) < 24) { tap.at = 0; mv = null; e.preventDefault(); resetWin(); return; }
      tap = { at: now, x: e.clientX, y: e.clientY };
      pinWin(w);
      mv = { sx: e.clientX, sy: e.clientY, x: UI.winPos.x, y: UI.winPos.y, id: e.pointerId };
      try { e.target.closest('#pwl-hd').setPointerCapture(e.pointerId); } catch (x) {}
      e.preventDefault();
    });
    w.addEventListener('pointermove', function (e) {
      if (!mv || e.pointerId !== mv.id) return;
      var r = w.getBoundingClientRect(), vw = window.innerWidth, vh = window.innerHeight;
      UI.winPos = { x: Math.max(4, Math.min(mv.x + e.clientX - mv.sx, vw - r.width - 4)), y: Math.max(4, Math.min(mv.y + e.clientY - mv.sy, vh - r.height - 4)) };
      placeWin();
    });
    function endMove() { if (mv) { mv = null; saveWin(); } }
    w.addEventListener('pointerup', endMove);
    w.addEventListener('pointercancel', endMove);
    g.addEventListener('pointerdown', function (e) {
      if (e.button > 0 || !winWide()) return;
      pinWin(w);
      var r = w.getBoundingClientRect();
      rs = { sx: e.clientX, sy: e.clientY, w: r.width, h: r.height };
      try { g.setPointerCapture(e.pointerId); } catch (x) {}
      e.preventDefault(); e.stopPropagation();
    });
    g.addEventListener('pointermove', function (e) {
      if (!rs) return;
      UI.winSize = { w: rs.w + e.clientX - rs.sx, h: rs.h + e.clientY - rs.sy };
      placeWin();
    });
    function endSize() {
      if (!rs) return;
      rs = null;
      var r = w.getBoundingClientRect();
      UI.winSize = { w: Math.round(r.width), h: Math.round(r.height) };
      saveWin();
    }
    g.addEventListener('pointerup', endSize);
    g.addEventListener('pointercancel', endSize);
    g.addEventListener('dblclick', function (e) { e.stopPropagation(); UI.winSize = null; saveWin(); placeWin(); });
  }
  function open() { ensureUi(); render(); $('pwl-back').classList.add('on'); $('pwl-win').classList.add('on'); placeWin(); syncDock(); loadChat(); }
  function close() { var w = $('pwl-win'); if (!w) return; UI.sheet = null; renderSheet(); w.classList.remove('on'); $('pwl-back').classList.remove('on'); UI.confirm = ''; flush(); syncDock(); }
  function go(view, anim, origin) { UI.view = view; UI.q = ''; UI.confirm = ''; if (view === 'people') UI.filter = UI.filter || 'all'; render(); var b = $('pwl-body'); if (b) b.scrollTop = 0; if (anim) animate(anim, origin); }
  var BACK = { guide: 'people', person: 'people', edit: 'person', play: 'person', houses: 'people', house: 'people', lore: 'people', set: 'people', chron: 'people' };
  var STACK = [];
  function goPerson(id) { var c = CANDS.filter(function (x) { return x.id === id; })[0]; UI.why = c ? { id: id, list: whyUi(c) } : null; if (UI.view === 'person' && UI.pid === id) return; STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); UI.pid = id; UI.relOpen = false; UI.famAll = false; UI.reveal = {}; go('person', 'push'); }
  function back() {
    var s = STACK.pop();
    if (s && (s.view !== 'person' || W.people[s.pid]) && (s.view !== 'house' || W.houses[s.hid])) { UI.pid = s.pid; UI.hid = s.hid; go(s.view, 'pop'); return; }
    STACK = []; go(BACK[UI.view] || 'people', 'pop');
  }
  function holdField(root) {
    var ae = document.activeElement, sel = '';
    if (!ae || !root || !root.contains(ae) || !/^(INPUT|TEXTAREA)$/.test(ae.tagName)) return null;
    if (ae.id) sel = '#' + ae.id;
    else ['data-q', 'data-sq', 'data-f', 'data-hf'].some(function (a) { if (!ae.hasAttribute(a)) return false; sel = '[' + a + '="' + ae.getAttribute(a).replace(/["\\]/g, '\\$&') + '"]'; return true; });
    if (!sel) return null;
    var val = ae.value, s = null, e = null;
    try { s = ae.selectionStart; e = ae.selectionEnd; } catch (x) {}
    return function () {
      var n = root.querySelector(sel);
      if (!n || n === document.activeElement) return;
      if (n.value !== val) n.value = val;
      n.focus();
      try { if (s != null) n.setSelectionRange(s, e); } catch (x) {}
    };
  }
  var TITLE = { guide: 'ui.guide.title', people: 'ui.title', houses: 'ui.head.houses', lore: 'ui.head.lore', set: 'ui.head.set', chron: 'ui.head.chron' };
  function render(quiet) {
    if (!$('pwl-win')) return;
    var v = UI.view, hd, body, keep = quiet ? holdField($('pwl-win')) : null;
    var top = $('pwl-body') ? $('pwl-body').scrollTop : 0;
    if (v === 'people' || v === 'houses') hd = '<span class="pwl-dot' + (S.on ? '' : ' off') + '"></span><b class="ttl">' + esc(t('ui.title')) + '</b><span class="pwl-date" data-act="go" data-v="chron">' + svg('scroll') + esc(fmtDate(W.clock.day)) + '</span><span class="pwl-ibtn" data-act="go" data-v="set">' + svg('gear') + '</span><span class="pwl-ibtn" data-act="close">' + svg('close') + '</span>';
    else {
      var title = v === 'play' ? t('ui.play.title') : v === 'person' || v === 'edit' ? (P(UI.pid) || {}).name || '' : v === 'house' ? (W.houses[UI.hid] || {}).name || '' : t(TITLE[v] || 'ui.title');
      var extra = v === 'person' ? '<span class="pwl-ibtn" data-act="edit">' + svg('edit') + '</span>' : v === 'house' && W.houses[UI.hid] ? '<span class="pwl-ibtn" data-act="hedit">' + svg('edit') + '</span>' : '';
      hd = '<span class="pwl-ibtn" data-act="back">' + svg('back') + '</span><b>' + esc(v === 'edit' ? t('ui.story.edit') : title) + '</b>' + extra + '<span class="pwl-ibtn" data-act="close">' + svg('close') + '</span>';
    }
    if (!READY && T) body = '<div class="pwl-busy">' + esc(t('ui.loading')) + '</div>';
    else body = v === 'person' ? viewStory() : v === 'edit' ? viewEdit2() : v === 'play' ? viewPlay() : v === 'house' ? viewHouse2() : v === 'lore' ? viewLore2() : v === 'set' ? viewSet2() : v === 'chron' ? viewChron2() : v === 'guide' ? viewGuide() : viewHome();
    $('pwl-hd').innerHTML = hd;
    $('pwl-body').innerHTML = body;
    $('pwl-win').classList.toggle('tall', v !== 'people' && v !== 'houses');
    $('pwl-win').setAttribute('data-view', v);
    if (quiet) $('pwl-body').scrollTop = top;
    else afterRender();
    /* тихая перерисовка (тап по переключателю, плитке, сегменту) не проигрывает появление заново */
    if (quiet === true) settle($('pwl-hd')), settle($('pwl-body'));
    if (keep) keep();
    renderSheet();
  }
  function settle(root) {
    if (!root || !root.getAnimations) return;
    try {
      root.getAnimations({ subtree: true }).forEach(function (a) {
        try { var tm = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : null; if (tm && tm.iterations === Infinity) return; a.finish(); } catch (x) {}
      });
    } catch (x) {}
  }

  /* ── действия ────────────────────────────────────────────────────────── */
  function onClick(e) {
    var el = e.target.closest && e.target.closest('[data-act]');
    if (!el || !el.getAttribute('data-act')) return;
    e.stopPropagation();
    var a0 = el.getAttribute('data-act'), v0 = el.getAttribute('data-v');
    if (segTap(el)) { setTimeout(function () { act(a0, v0, el); }, 230); return; }
    /* переключатель и плитка меняют вид сразу, а данные — после короткой анимации */
    if (!REDUCED && (el.classList.contains('pwl-tog') || (el.parentNode && el.parentNode.classList && el.parentNode.classList.contains('pwl-catgrid')))) {
      el.classList.toggle('on'); var swe = el.querySelector('.pwl-sw'); if (swe) swe.classList.toggle('on'); setTimeout(function () { act(a0, v0, el); }, 170); return;
    }
    act(a0, v0, el);
  }
  function arm(key) { if (UI.confirm === key) { UI.confirm = ''; return true; } UI.confirm = key; render(true); setTimeout(function () { if (UI.confirm === key) { UI.confirm = ''; if (isOpen()) render(true); } }, 4000); return false; }
  function kinErr(code) { if (code) toast(t('ui.err.' + code)); return !code; }
  function act(a, v, el) {
    var p = UI.pid && P(UI.pid), s = UI.sheet;
    switch (a) {
      case 'close': close(); return;
      case 'back': back(); return;
      case 'go': STACK = [{ view: 'people' }]; if (v === 'lore') UI.lore = null; go(v, 'push'); return;
      case 'tile': toggleTile(v); return;
      case 'guide': STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); go('guide', 'push'); return;
      case 'play': STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); UI.play = {}; go('play', 'push'); return;
      case 'pact': PL().k = v; render(true); return;
      case 'pback': PL().k = null; render(true); return;
      case 'ptgt': playStart(PL().k, v || null); return;
      case 'pplace': { var plv = v || PWL.str(($('pwl-pplace') || {}).value, 80); if (plv) playStart('go', null, { place: plv }); return; }
      case 'ptone': { var opv = (PL().options || [])[+v]; if (opv) playResolve(opv); return; }
      case 'pfree': playFree(PWL.str(($('pwl-pfree') || {}).value, 400)); return;
      case 'pagain': UI.play = {}; render(true); if ($('pwl-body')) $('pwl-body').scrollTop = 0; return;
      case 'pchat': playToChat(); return;
      case 'pdone': UI.play = {}; back(); return;
      case 'edit': STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); go('edit', 'push'); return;
      case 'hedit': openSheet({ type: 'hedit', title: t('ui.house.edit') }); return;
      case 'newhouse': openSheet({ type: 'newhouse', title: t('ui.house.add') }); setTimeout(function () { var n = $('pwl-hname'); if (n) n.focus(); }, 60); return;
      case 'famall': UI.famAll = !UI.famAll; render(true); return;
      case 'reveal': UI.reveal = UI.reveal || {}; UI.reveal[v] = !UI.reveal[v]; if (el) { el.classList.toggle('open', UI.reveal[v]); } render(true); return;
      case 'filter': UI.filter = UI.filter === v ? 'all' : v; render(true); return;
      case 'person': goPerson(v); return;
      case 'pin': {
        var i = PINS.indexOf(v);
        if (i >= 0) PINS.splice(i, 1); else PINS.unshift(v);
        savePins(); rescene(); render(true); return;
      }
      case 'note': openSheet({ type: 'note', title: t('ui.note.title') }); return;
      case 'newp': openSheet({ type: 'new', title: t('ui.btn.add'), sex: 'x' }); setTimeout(function () { var n = $('pwl-newname'); if (n) n.focus(); }, 50); return;
      case 'nsex': s.sex = v; s.name = ($('pwl-newname') || {}).value || ''; renderSheet(); return;
      case 'create': {
        var nm = PWL.str(($('pwl-newname') || {}).value, 80);
        if (!nm) { toast(t('ui.err.noname')); return; }
        if (PWL.byName(W, nm)) toast(t('ui.toast.same'));
        var nid = PWL.addPerson(W, { name: nm, sex: s.sex || 'x' });
        save(true); closeSheet(); rescan(); goPerson(nid); return;
      }
      case 'sex': p.sex = v; save(); render(true); return;
      case 'flag': {
        if (v === 'important') p.flags.important = !p.flags.important;
        else if (v === 'alive') p.alive = !p.alive;
        else if (v === 'nodir') p.flags.nodir = !p.flags.nodir;
        else if (v === 'safe') p.flags.safe = !p.flags.safe;
        else if (v === 'main') { var on = !isMain(UI.pid); p.flags.char = on; p.flags.player = false; if (on) PINS = PINS.filter(function (x) { return x !== UI.pid; }); }
        save(); rescan(); render(true); return;
      }
      case 'thread': {
        var inp = $('pwl-thread'), tx = inp && PWL.str(inp.value, 300);
        if (!tx || !p) return;
        p.threads.push(tx); inp.value = ''; save(); render(true);
        setTimeout(function () { var n = $('pwl-thread'); if (n) n.focus(); }, 30);
        return;
      }
      case 'unthread': p.threads.splice(+v, 1); save(); render(true); return;
      case 'delp': if (!arm('p:' + UI.pid)) return; PWL.removePerson(W, UI.pid); PINS = PINS.filter(function (x) { return W.people[x]; }); savePins(); save(true); rescan(); STACK = []; UI.pid = null; go('people', 'pop'); return;
      case 'addkin': openSheet({ type: 'pick', mode: v, from: UI.pid, title: t('ui.pick.' + v, { name: p.name }) }); return;
      case 'popt': s[v] = !s[v]; if (v === 'ill' && s.ill) s.ad = false; if (v === 'ad' && s.ad) s.ill = false; renderSheet(); return;
      case 'picked': case 'pnew': {
        var other = v;
        if (a === 'pnew') { other = PWL.addPerson(W, { name: PWL.str(s.q, 80), house: s.mode === 'member' ? s.from : (s.mode === 'child' || s.mode === 'parent' || s.mode === 'sibling') && P(s.from) ? P(s.from).house : '' }); rescan(); }
        var code = '';
        if (s.mode === 'goal') { PWL.startGoal(W, s.from, s.goal, other); save(true); rescan(); closeSheet(); render(true); return; }
        if (s.mode === 'member') { P(other).house = s.from; }
        else if (s.mode === 'parent') code = PWL.addKin(W, other, s.from, 'parent', { ill: s.ill, ad: s.ad });
        else if (s.mode === 'child') code = PWL.addKin(W, s.from, other, 'parent', { ill: s.ill, ad: s.ad });
        else code = PWL.addKin(W, s.from, other, s.mode, { ex: s.ex });
        if (!kinErr(code)) { if (a === 'pnew') PWL.removePerson(W, other); return; }
        save(true); closeSheet(); render(true); return;
      }
      case 'unkin': { var q = v.split('|'); PWL.removeKin(W, q[0], q[1], q[2]); save(); render(true); return; }
      case 'shclose': closeSheet(); return;
      case 'cue': setCue(v); return;
      case 'dirall': UI.dirAll = !UI.dirAll; render(true); return;
      case 'dirmode': S.dir = v; saveSettings(); syncDock(); render(true); return;
      case 'dirspeed': S.speed = v; saveSettings(); render(true); return;
      case 'time': liveTick(+v); return;
      case 'secadd': {
        var si = $('pwl-secret'), stx = si && PWL.str(si.value, 300);
        if (!stx) return;
        PWL.newSecret(W, [UI.pid], stx, [UI.pid]); save(true); render(true); return;
      }
      case 'secdel': W.secrets = W.secrets.filter(function (x) { return x.id !== v; }); save(); render(true); return;
      case 'secknow': {
        var hx = heroId(), sx = W.secrets.filter(function (x) { return x.id === v; })[0];
        if (!hx || !sx) return;
        var ki = sx.known.indexOf(hx);
        if (ki >= 0) sx.known.splice(ki, 1); else sx.known.push(hx);
        save(); render(true); return;
      }
      case 'goaladd':
        if (v === 'rise') { PWL.startGoal(W, UI.pid, 'rise', null); save(true); rescan(); render(true); return; }
        openSheet({ type: 'pick', mode: 'goal', goal: v, from: UI.pid, title: t('ui.goal.pick.' + v, { name: p.name }) }); return;
      case 'goaldel': W.goals.forEach(function (g) { if (g.id === v) g.end = 'drop'; }); save(); rescan(); render(true); return;
      case 'trait': W.traits = W.traits || {}; W.traits[v] = !W.traits[v]; W.traits.src = 'hand'; save(true); render(true); return;
      case 'traitauto': W.traits = { magic: false, nobility: false, modern: false, src: '' }; autoTraits(); save(true); render(true); return;
      case 'gread': observe(true); return;
      case 'gaccept': if (acceptFinding(v)) { saveGossip(); save(true); rescan(); render(true); } return;
      case 'greject': G.pending = G.pending.filter(function (x) { return x.id !== v; }); saveGossip(); paintGossip(); return;
      case 'gacceptall': { var okN = 0; G.pending.slice().forEach(function (f) { if (acceptFinding(f.id, true)) okN++; }); saveGossip(); save(true); rescan(); render(true); if (okN) toast(t('ui.gs.accepted', { n: okN })); return; }
      case 'grejectall': G.pending = []; saveGossip(); paintGossip(); return;
      case 'gmodels': fetchModels(); return;
      case 'gfull': readAll(); return;
      case 'gfullstop': if (FULL) FULL.stop = true; paintGossip(); return;
      case 'gfullok': FULL = null; paintGossip(); return;
      case 'gfullundo': undoAll(); return;
      case 'gon': if (gTurnOn() && UI.view === 'lore' && UI.lore && UI.lore.book) { var bi = UI.lore.books.indexOf(UI.lore.book); if (bi >= 0) openBook(bi); else render(true); } else render(true); return;
      case 'cardlock': toast(t('ui.card.needAi')); return;
      case 'gpick': S.gmodel = v; saveSettings(); closeSheet(); render(true); toast(t('ui.gs.picked', { m: v })); return;
      case 'gthink': S.gthink = v; saveSettings(); render(true); return;
      case 'gsrc': S.gsrc = v; saveSettings(); render(true); return;
      case 'gevery': S.gevery = +v; saveSettings(); render(true); return;
      case 'gflag': S[v] = !S[v]; saveSettings(); render(true); return;
      case 'gtest':
        if (G.testing) return;
        G.testing = true; render(true);
        askJSON('Reply with this JSON exactly: {"ok":true}').then(function () { toast(t('ui.gs.testOk')); }, function (e) { toast(t('ui.gs.error', { e: String(e && e.message || e).slice(0, 120) })); }).then(function () { G.testing = false; if (isOpen()) render(true); });
        return;
      case 'chmode': UI.chMode = v; render(true); return;
      case 'chcat': UI.chCat = v || ''; render(true); return;
      case 'chminor': UI.chMinor = !UI.chMinor; render(true); return;
      case 'tmode': S.tmode = v; if (v === 'msgs' && !S.tickEvery) S.tickEvery = 20; saveSettings(); render(true); return;
      case 'tickEvery': S.tickEvery = +v; saveSettings(); render(true); return;
      case 'tickDays': S.tickDays = +v; saveSettings(); render(true); return;
      case 'pace': S.pace = v; saveSettings(); render(true); return;
      case 'cat': S.cats[v] = !S.cats[v]; saveSettings(); render(true); return;
      case 'pairs': S.pairs = v; saveSettings(); render(true); return;
      case 'news': S.news = +v; saveSettings(); render(true); return;
      case 'house': {
        var org = '';
        if (el && $('pwl-body')) { var r1 = el.getBoundingClientRect(), r0 = $('pwl-body').getBoundingClientRect(); org = Math.round(r1.left - r0.left + r1.width / 2) + 'px ' + Math.round(r1.top - r0.top + r1.height / 2) + 'px'; }
        STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); UI.hid = v; go('house', 'zoom', org); return;
      }
      case 'addhouse': {
        var hn = $('pwl-hname'), name = hn && PWL.str(hn.value, 80);
        if (!name) { toast(t('ui.err.noname')); return; }
        var hid = PWL.addHouse(W, name); save(true); closeSheet();
        STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); UI.hid = hid; go('house', 'zoom'); return;
      }
      case 'member': openSheet({ type: 'pick', mode: 'member', from: UI.hid, title: t('ui.btn.member') }); return;
      case 'delh': if (!arm('h:' + UI.hid)) return; PWL.removeHouse(W, UI.hid); if (UI.filter === 'h:' + UI.hid) UI.filter = 'all'; save(true); UI.hid = null; STACK = []; closeSheet(); go('people', 'pop'); return;
      case 'lorere': UI.lore = null; render(true); return;
      case 'book': if (+v < 0) { UI.lore.book = null; render(true); } else openBook(+v); return;
      case 'selent': UI.lore.sel[v] = !UI.lore.sel[v]; render(true); return;
      case 'selall': (UI.lore.entries || []).forEach(function (e) { if (e.card && !gOn()) return; if (!PWL.hasLore(W, UI.lore.bookId, e.id) && !PWL.byName(W, e.title)) UI.lore.sel[e.id] = v === '1'; }); render(true); return;
      case 'import': if (gOn() && S.glore && UI.lore && !UI.lore.ai && Object.keys(UI.lore.sel || {}).some(function (k) { return UI.lore.sel[k]; })) { smartImport(); return; }
      /* falls through */
      case 'importPlain': {
        var L = UI.lore, n = 0;
        (L.entries || []).forEach(function (e) { if (L.sel[e.id] && !e.card) { PWL.addPerson(W, PWL.fromLore(e, L.bookId)); n++; } });
        if (!n && (L.entries || []).some(function (e) { return L.sel[e.id] && e.card; })) { toast(t('ui.card.needAi')); return; }
        if (!n) return;
        save(true); rescan(); toast(t('ui.lore.done', { n: n })); UI.lore.sel = {}; STACK = []; go('people'); return;
      }
      case 'set': S[v] = !S[v]; saveSettings(); if (v === 'first') rescan(); syncDock(); render(true); return;
      case 'scan': S.scan = +v; saveSettings(); rescan(); render(true); return;
      case 'max': S.max = +v; saveSettings(); render(true); return;
      case 'lang': S.lang = v; LANG = langOf(v); saveSettings(); syncDock(); render(true); return;
      case 'io': openSheet({ type: 'io', title: t('ui.btn.io') }); return;
      case 'copy': copyText(JSON.stringify(W)); return;
      case 'noteraw': UI.noteRaw = !UI.noteRaw; renderSheet(); return;
      case 'copyOld': {
        var ta = $('pwl-io');
        if (!ta) return;
        ta.select();
        try { if (navigator.clipboard) navigator.clipboard.writeText(ta.value).then(function () { toast(t('ui.toast.copied')); }, function () { document.execCommand('copy'); toast(t('ui.toast.copied')); }); else { document.execCommand('copy'); toast(t('ui.toast.copied')); } } catch (x) {}
        return;
      }
      case 'winzoom': UI.winZoom = +v || 1; saveWin(); placeWin(); render(true); return;
      case 'winreset': resetWin(); toast(t('ui.win.wasReset')); return;
      case 'export': try { Promise.resolve(T.file.export('pusya-world.json', JSON.stringify(W, null, 1))).then(function () { toast(t('ui.toast.saved')); }, function () { toast(t('ui.toast.saveFail')); }); } catch (x) { toast(t('ui.toast.saveFail')); } return;
      case 'doimport': {
        var raw = (UI.sheet && UI.sheet.paste) || ($('pwl-io') || {}).value;
        var obj = null;
        try { obj = JSON.parse(raw); } catch (x) {}
        if (!obj || typeof obj !== 'object' || !obj.people) { toast(t('ui.err.json')); return; }
        if (!arm('imp')) { renderSheet(); return; }
        W = PWL.world(obj); PWL.ensureMains(W, CHAT.chars, CHAT.user); PINS = [];
        savePins(); save(true); rescan(); closeSheet(); STACK = []; go('people'); toast(t('ui.toast.imported')); return;
      }
      case 'wipe': if (!arm('wipe')) return; W = PWL.world({}); PWL.ensureMains(W, CHAT.chars, CHAT.user); PINS = []; savePins(); save(true); rescan(); STACK = []; go('people'); return;
    }
  }
  function onInput(e) {
    var el = e.target;
    if (livePreview(el)) return;
    if (el.hasAttribute('data-gs')) { S[el.getAttribute('data-gs')] = PWL.str(el.value, 300); clearTimeout(G.st); G.st = setTimeout(saveSettings, 500); return; }
    if (el.hasAttribute('data-gkey')) { G.key = String(el.value || '').trim(); clearTimeout(G.kt); G.kt = setTimeout(function () { vset('pwl_key', G.key, 'global'); }, 500); return; }
    if (el.hasAttribute('data-q')) { UI.q = el.value; var df = $('pwl-dfaces'); if (df && UI.tile === 'all') { df.innerHTML = facesGrid(tileIds('all')); return; } render(true); return; }
    if (el.hasAttribute('data-sq')) { UI.sheet.q = el.value; renderSheet(); return; }
    if (el.tagName === 'SELECT') return;
    var f = el.getAttribute('data-f'), hf = el.getAttribute('data-hf');
    if (f && UI.pid && P(UI.pid)) { setField(P(UI.pid), f, el.value); save(); if (f === 'name') { var b = $('pwl-hd').querySelector('b'); if (b) b.textContent = P(UI.pid).name; } return; }
    if (hf && UI.hid && W.houses[UI.hid] && hf !== 'head') { W.houses[UI.hid][hf] = PWL.str(el.value, hf === 'motto' ? 160 : 80) || (hf === 'name' ? '?' : ''); save(); if (hf === 'name') { var hb = $('pwl-hd').querySelector('b'); if (hb) hb.textContent = W.houses[UI.hid].name; } }
  }
  function onChange(e) {
    var el = e.target;
    if (el.tagName !== 'SELECT' && el.getAttribute('data-f') !== 'aliases' && el.getAttribute('data-f') !== 'name') return;
    var f = el.getAttribute('data-f'), hf = el.getAttribute('data-hf');
    if (f === 'house' && UI.pid) {
      if (el.value === '+') { goHouseNew(); return; }
      P(UI.pid).house = el.value; save(); render(true); return;
    }
    if ((f === 'aliases' || f === 'name') && UI.pid) { rescan(); render(true); return; }
    if (hf === 'head' && UI.hid) { W.houses[UI.hid].head = el.value; save(); render(true); }
  }
  async function setCue(id) {
    if (!P(id)) return;
    var r = await vread('pwl_dir', 'chat');
    var st = Object.assign({ p: 0, cue: null, recent: [] }, (r.ok && r.v) || DIR);
    st.cue = st.cue === id ? null : id;
    var ok = await vset('pwl_dir', st, 'chat');
    if (!ok) { toast(t('ui.toast.saveFail')); return; }
    DIR = st;
    if (st.cue) { save(true); toast(t('ui.dir.cued', { name: P(id).name })); }
    syncDock();
    if (isOpen()) render(true);
  }
  function goHouseNew() {
    var name = (P(UI.pid).name.split(/\s+/).slice(-1)[0] || '');
    var hid = PWL.addHouse(W, (LANG === 'en' ? 'House ' : LANG === 'zh-CN' ? '' : 'Дом ') + name + (LANG === 'zh-CN' ? '家族' : ''));
    P(UI.pid).house = hid; save(true);
    STACK.push({ view: UI.view, pid: UI.pid, hid: UI.hid }); UI.hid = hid; go('house');
  }
  function setField(p, f, v) {
    if (f === 'name') p.name = PWL.str(v, 80) || '?';
    else if (f === 'aliases') p.aliases = PWL.list(v, 12);
    else if (f === 'traits') p.traits = PWL.list(v, 10);
    else if (f === 'age') { var n = parseInt(v, 10); p.age = isFinite(n) && n >= 0 ? Math.min(n, 9999) : null; }
    else if (f === 'bio') p.bio = String(v || '').slice(0, 1500);
    else if (f.indexOf('role.') === 0) p.role[f.slice(5)] = PWL.str(v, 80);
  }
  /* кто в сцене и когда кого видели — по сообщениям, прочитанным в loadChat */
  function rescan() {
    SEEN = PWL.mentions(W, RECENT, S);
    SCENE = PWL.inScene(W, RECENT.slice(-S.scan), S, PINS);
    CANDS = PWL.director(W, RECENT.slice(-DIR_SCAN), S, PINS, DIR.recent || []);
    syncDock();
  }
  function rescene() { rescan(); }

  /* ── кнопка ──────────────────────────────────────────────────────────── */
  function cssInset(n) { try { var v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(n)); return isFinite(v) ? v : 0; } catch (e) { return 0; } }
  function insets() {
    var z = { topBar: 0, topSafe: 0, bottomInput: 0, bottomSafe: 0 };
    try { if (T && T.ui && typeof T.ui.getInsets === 'function') { var i = T.ui.getInsets() || {}; Object.keys(z).forEach(function (k) { if (+i[k] > 0) z[k] = +i[k]; }); } } catch (e) {}
    if (!z.topBar) z.topBar = cssInset('--tavo-inset-top-bar');
    if (!z.topSafe) z.topSafe = cssInset('--tavo-inset-top-safe');
    if (!z.bottomInput) z.bottomInput = cssInset('--tavo-inset-bottom-input');
    if (!z.bottomSafe) z.bottomSafe = cssInset('--tavo-inset-bottom-safe');
    return z;
  }
  var DOCK = 48;
  function bounds() {
    var vw = window.innerWidth || 360, vh = window.innerHeight || 640, ins = insets();
    var top = Math.max(ins.topBar, ins.topSafe) + 6, bottom = vh - Math.max(ins.bottomInput, ins.bottomSafe) - DOCK - 12;
    if (bottom < top) bottom = top;
    return { minX: 4, maxX: Math.max(4, vw - DOCK - 4), minY: top, maxY: bottom };
  }
  function clamp(x, y) { var b = bounds(); return { x: Math.max(b.minX, Math.min(b.maxX, x)), y: Math.max(b.minY, Math.min(b.maxY, y)) }; }
  function placeDock() {
    var ic = $('pwl-dock'); if (!ic) return;
    var b = bounds(), p = UI.dockpos;
    var q = (p && p.x != null && p.y != null) ? clamp(+p.x, +p.y) : clamp(b.maxX - 6, b.maxY - 300);
    ic.style.left = q.x + 'px'; ic.style.top = q.y + 'px';
  }
  function syncDock() {
    var ic = $('pwl-dock'); if (!ic) return;
    ic.style.display = (S.dock && !isOpen()) ? 'flex' : 'none';
    ic.classList.toggle('armed', G.pending.length > 0 || !!DIR.cue || (S.dir === 'hint' && (+DIR.p || 0) >= PWL.LIMIT && CANDS.length > 0));
    ic.title = t('ui.title');
  }
  function ensureDock() {
    if ($('pwl-dock')) return;
    var ic = document.createElement('div'); ic.id = 'pwl-dock'; ic.innerHTML = TREE;
    document.body.appendChild(ic);
    var drag = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;
    function savePos() { var r = ic.getBoundingClientRect(); UI.dockpos = { x: Math.round(r.left), y: Math.round(r.top) }; LS.set('pwl_dockpos', UI.dockpos); vset('pwl_dockpos', UI.dockpos, 'global'); }
    function down(e) { drag = true; moved = false; var p = e.touches ? e.touches[0] : e; var r = ic.getBoundingClientRect(); ox = r.left; oy = r.top; sx = p.clientX; sy = p.clientY; ic.style.cursor = 'grabbing'; }
    function move(e) {
      if (!drag) return;
      var p = e.touches ? e.touches[0] : e, dx = p.clientX - sx, dy = p.clientY - sy;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
      if (moved) { var q = clamp(ox + dx, oy + dy); ic.style.left = q.x + 'px'; ic.style.top = q.y + 'px'; }
      if (e.cancelable) e.preventDefault();
    }
    function up(e) { if (!drag) return; drag = false; ic.style.cursor = 'grab'; if (e && e.type === 'touchend' && e.cancelable) e.preventDefault(); if (moved) savePos(); else open(); }
    ic.addEventListener('touchstart', down, { passive: true });
    ic.addEventListener('touchmove', move, { passive: false });
    ic.addEventListener('touchend', up);
    ic.addEventListener('mousedown', function (e) { if (!e.touches) down(e); });
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    offs.push(function () { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); if (ic.parentNode) ic.parentNode.removeChild(ic); });
    placeDock(); syncDock();
  }

  var seen = {};
  function onHost(name, fn) {
    var h = function (d) { var at = d && d.at; if (at) { if (seen[at]) return; seen[at] = 1; } fn(d); };
    try { if (T && T.plugin && typeof T.plugin.on === 'function') { var off = T.plugin.on(name, h); if (typeof off === 'function') offs.push(off); } } catch (e) {}
    var wh = function (e) { h(e && e.detail); };
    window.addEventListener(name, wh);
    offs.push(function () { window.removeEventListener(name, wh); });
  }
  var rt = null;
  function soon() { clearTimeout(rt); rt = setTimeout(loadChat, 250); }
  onHost('pusya-world:open', function () { if (isOpen()) close(); else open(); });
  onHost('pusya-world:refresh', soon);
  if (I18N && typeof I18N.onChange === 'function') { try { var oi = I18N.onChange(function () { LANG = langOf(S.lang); syncDock(); if (isOpen()) render(true); }); if (typeof oi === 'function') offs.push(oi); } catch (e) {} }
  try { if (T && T.ui && typeof T.ui.onInsetsChanged === 'function') { var oc = T.ui.onInsetsChanged(function () { placeDock(); }); if (typeof oc === 'function') offs.push(oc); } } catch (e) {}
  var wasWide = winWide();
  var onRs = function () { placeDock(); placeWin(); var wd = winWide(); if (wd === wasWide) return; wasWide = wd; if (isOpen() && UI.view === 'set') render(true); };
  window.addEventListener('resize', onRs);
  offs.push(function () { window.removeEventListener('resize', onRs); });
  var onVis = function () { if (!document.hidden) loadChat(); else flush(); };
  document.addEventListener('visibilitychange', onVis);
  offs.push(function () { document.removeEventListener('visibilitychange', onVis); });
  window.addEventListener('pagehide', function () { flush(); destroy(); });

  function destroy() { offs.forEach(function (f) { try { f(); } catch (e) {} }); offs = []; }
  window.__pwl_panel = {
    destroy: destroy, open: open, close: close, refresh: soon,
    resetWin: resetWin,
    resetDock: function () { UI.dockpos = null; LS.set('pwl_dockpos', null); vset('pwl_dockpos', null, 'global'); placeDock(); },
    /* для стенда и витрины: открыть нужный экран и выполнить действие */
    show: async function (view, arg) {
      await loadChat();
      if (!isOpen()) open();
      STACK = [];
      if (view === 'person') { UI.pid = arg; UI.why = null; go('person'); }
      else if (view === 'house') { UI.hid = arg; go('house'); }
      else go(view || 'people');
    },
    act: function (a, v) { act(a, v, null); },
    world: function () { return W; }
  };

  function boot() { ensureDock(); setTimeout(placeDock, 300); setTimeout(placeDock, 1200); }
  if (document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
  (async function () {
    if (!T) return;
    try { await loadGlobal(); } catch (e) {}
    try { await loadChat(); } catch (e) {}
  })();
})();

(function (tavo) {
var CHAT_SRC = /^(reply|regeneration|regenerate|swipe|continuation|continue|groupreply|group_reply|otherscontinuation|others_continuation)$/;
var HOOK_MS = 4000, DIR_SCAN = 200;

function send(name, detail) {
  var d = Object.assign({ at: Date.now() + ':' + Math.random().toString(36).slice(2, 7) }, detail || {});
  try { window.dispatchEvent(new CustomEvent(name, { detail: d })); } catch (e) {}
  try { tavo.plugin.emit(name, d); } catch (e) {}
}
async function vset(name, val, scope) {
  try { await tavo.variable.set(name, val == null ? '' : JSON.stringify(val), scope); } catch (e) {}
}
async function vget(name, scope) {
  var v = await tavo.variable.get(name, scope);
  if (v == null || v === '') return null;
  return typeof v === 'string' ? JSON.parse(v) : v;
}
function srcName(event) {
  var s = event && event.source;
  if (s && typeof s === 'object') s = s.name || s.type || '';
  return String(s == null ? '' : s).replace(/^.*\./, '').toLowerCase();
}
async function allMsgs() {
  var a = null;
  try { a = await tavo.message.find({ limit: 99999 }); } catch (e) {}
  if (!a || a.length === undefined) { try { a = await tavo.message.find(); } catch (e) {} }
  if (!a || a.length === undefined) return [];
  return a;
}
async function heroes() {
  try {
    var c = await tavo.chat.current();
    if (!c) return null;
    var chars = (c.characters || []).map(function (x) { return x && x.name; }).filter(Boolean);
    if (!chars.length && c.character && c.character.name) chars = [c.character.name];
    return { chars: chars, user: (c.persona && c.persona.name) || '' };
  } catch (e) { return null; }
}

async function msgCount(fallback) {
  try { var n = await tavo.message.count(); if (typeof n === 'number' && isFinite(n)) return n; } catch (e) {}
  return fallback;
}

/* Время по сюжету: пометки <!--pwl:day N--> в ответах модели чата. Вызывается перед ответом
   и когда пришло новое сообщение — дата в окне меняется сразу. Одна проверка за раз. */
var dayLock = null;
async function storyTime(s, all, w0) {
  if (s.tmode !== 'story') return null;
  if (dayLock) { try { await dayLock; } catch (e) {} }
  var job = (async function () {
    var ts = await vget('pwl_time', 'chat');
    var r = PWL.storyDays(all, ts && ts.seen ? ts : null);
    if (!r.days) { if (!ts || !ts.seen) await vset('pwl_time', r.state, 'chat'); return null; }
    var w = w0;
    if (!w) { var raw = await vget('pwl_world', 'chat'); if (!raw) { await vset('pwl_time', r.state, 'chat'); return null; } w = PWL.world(raw); }
    PWL.tick(w, r.days, { settings: s, exclude: PWL.inScene(w, all.slice(-s.scan), s, []) });
    w.rev = (w.rev || 0) + 1;
    await vset('pwl_world', w, 'chat');
    await vset('pwl_time', r.state, 'chat');
    return w;
  })();
  dayLock = job;
  try { return await job; } finally { if (dayLock === job) dayLock = null; }
}
async function onMessage() {
  try {
    var s = PWL.settings(await vget('pwl_settings', 'global'));
    if (s.tmode === 'story' && (await storyTime(s, await allMsgs(), null))) send('pusya-world:refresh');
  } catch (e) {}
}

/* Время (по сюжету или автотик) → справка о присутствующих → новости для героя → режиссёр.
   Режиссёр и новости работают и при выключенной справке. */
async function prepare(src) {
  var s = PWL.settings(await vget('pwl_settings', 'global'));
  var raw = await vget('pwl_world', 'chat');
  if (!raw) return '';
  var w = PWL.world(raw);
  if (!PWL.mains(w).length) { var h = await heroes(); if (h) PWL.ensureMains(w, h.chars, h.user); }
  var pins = await vget('pwl_scene', 'chat');
  pins = Array.isArray(pins) ? pins : [];
  var all = await allMsgs(), msgs = all.slice(-DIR_SCAN);
  var count = await msgCount(all.length), poke = false;

  /* время по сюжету: дни, отмеченные моделью чата с прошлого раза */
  if (s.tmode === 'story') {
    var w2 = await storyTime(s, all, w);
    if (w2) { w = w2; poke = true; }
  }
  /* автотик: раз в N ответов проходит tickDays дней; перегенерация и continue не считаются */
  if (s.tmode === 'msgs' && s.tickEvery) {
    var ts = (await vget('pwl_time', 'chat')) || { n: 0, count: -1 };
    var again = /regenerat|swipe|continu/.test(src) || (count >= 0 && ts.count >= 0 && count <= ts.count && count >= ts.count - 1);
    if (!again) {
      ts.n = (+ts.n || 0) + 1;
      if (ts.n >= s.tickEvery) {
        PWL.tick(w, s.tickDays, { settings: s, exclude: PWL.inScene(w, msgs.slice(-s.scan), s, pins) });
        w.rev = (w.rev || 0) + 1;
        await vset('pwl_world', w, 'chat');
        ts.n = 0; poke = true;
      }
      ts.count = count;
      await vset('pwl_time', ts, 'chat');
    }
  }

  var note = s.on ? PWL.compose({ world: w, settings: s, msgs: msgs.slice(-s.scan), pins: pins }).text : '';

  var news = '';
  var ns = await vget('pwl_news', 'chat');
  if (s.news || (ns && ns.gen && ns.gen.add)) {
    var nr = PWL.newsStep({ world: w, settings: s, state: ns, count: count, src: src });
    news = nr.add;
    if (!nr.regen) await vset('pwl_news', nr.state, 'chat');
    if (nr.list && nr.list.length) poke = true;
  }

  var st = await vget('pwl_dir', 'chat');
  var dir = '';
  if (s.dir !== 'off' || (st && st.cue)) {
    var r = PWL.dirStep({ world: w, settings: s, msgs: msgs, pins: pins, state: st, count: count, src: src });
    dir = r.add;
    await vset('pwl_dir', r.state, 'chat');
    if (r.fired || !r.regen) poke = true;
  }
  if (poke) send('pusya-world:refresh');
  var clock = s.tmode === 'story' ? PWL.timePrompt() : '';
  return [note, news, dir, clock].filter(Boolean).join('\n\n');
}

tavo.plugin.on('generation:prepare', async function (event) {
  if (!event || typeof event.text !== 'string') return;
  var name = srcName(event);
  if (name && !CHAT_SRC.test(name)) return;
  var timer = null;
  try {
    var add = await Promise.race([
      prepare(name),
      new Promise(function (res) { timer = setTimeout(function () { res(''); }, HOOK_MS); })
    ]);
    if (add) event.text = event.text ? event.text + '\n\n' + add : add;
  } catch (e) {
  } finally {
    clearTimeout(timer);
  }
});

function refresh() { send('pusya-world:refresh'); }
tavo.plugin.on('chat:opened', async function () { refresh(); });
tavo.plugin.on('message:added', async function () { refresh(); onMessage(); });
tavo.plugin.on('message:updated', async function () { onMessage(); });
tavo.plugin.on('message:updated', async function () { refresh(); });
tavo.plugin.on('message:deleted', async function () { refresh(); });
tavo.plugin.onInputAction('open-world', async function () { send('pusya-world:open'); });
tavo.plugin.onSidebarAction('open-world-side', async function () { send('pusya-world:open'); });

})(window.__pwl_tavo);
