(() => {
  if (document.getElementById('cb88-vip-widget')) return;

  const vipUrl = 'https://click-lynk.com/CB88WL-VVIPPAGE';

  document.body.insertAdjacentHTML('beforeend', `
    <div id="cb88-vip-widget">
      <button class="cb88-vip-tab" type="button" aria-label="Buka layanan VIP" aria-expanded="false">
        <span>V</span><span>I</span><span>P</span>
      </button>

      <div class="cb88-vip-popup">
        <button class="cb88-vip-x" type="button" aria-label="Tutup">×</button>

        <div class="cb88-vip-content">
          <div class="cb88-vip-kicker">CLICKBET88</div>
          <strong>MAU NIKMATI<br>LAYANAN VIP?</strong>
          <p>Prioritas layanan dan penawaran spesial untuk member pilihan.</p>
          <a href="${vipUrl}" target="_blank" rel="noopener">
            MASUK LAYANAN VIP <b>›</b>
          </a>
        </div>

        <div class="cb88-vip-medal" aria-hidden="true">
          <small>CLICKBET88</small>
          <em>VIP</em>
          <i>✦</i>
        </div>
      </div>
    </div>

    <style>
      #cb88-vip-widget{
        position:fixed;
        left:0;
        top:calc(50% + 91px);
        z-index:2147482999;
        font-family:Arial,Helvetica,sans-serif;
      }

      .cb88-vip-tab{
        width:36px;height:76px;border:1px solid #c99a2d;border-left:0;
        border-radius:0 10px 10px 0;cursor:pointer;padding:6px 0;
        display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;
        color:#ffe793;background:linear-gradient(180deg,#132d76,#060d35 55%,#102965);
        box-shadow:0 4px 14px #000a,0 0 8px #d6aa3b66,inset 0 0 10px #4a7ae077;
        transition:width .2s,filter .2s;
      }

      .cb88-vip-tab:hover{width:40px;filter:brightness(1.14)}
      .cb88-vip-tab span{
        font-size:14px;font-weight:900;line-height:14px;
        text-shadow:0 0 5px #ffe37a,1px 1px 1px #000;
      }

      .cb88-vip-popup{
        position:absolute;left:46px;top:-26px;width:278px;min-height:118px;
        display:flex;align-items:center;gap:9px;padding:12px 11px 12px 14px;
        visibility:hidden;opacity:0;pointer-events:none;
        transform:translateX(-16px) scale(.97);transform-origin:left center;
        border:1px solid #d6ac3c;border-left:3px solid #e7c45d;border-radius:0 12px 12px 0;
        background:linear-gradient(125deg,#07113b,#102d73 57%,#060b28);
        box-shadow:0 8px 24px #000c,0 0 16px #d7ad3c55,inset 0 0 16px #5e8ff455;
        transition:.25s ease;
      }

      .cb88-vip-popup:before{
        content:"";position:absolute;inset:3px;border:1px solid #fff1ac35;
        border-radius:0 9px 9px 0;pointer-events:none;
      }

      #cb88-vip-widget.open .cb88-vip-popup{
        visibility:visible;opacity:1;pointer-events:auto;transform:none;
      }

      .cb88-vip-content{position:relative;z-index:1;flex:1;color:#fff}
      .cb88-vip-kicker{
        margin-bottom:3px;color:#ffe48a;font-size:8px;font-weight:900;
        letter-spacing:1.1px;
      }

      .cb88-vip-content strong{
        display:block;font-size:14px;line-height:16px;
        text-shadow:0 1px 2px #000;
      }

      .cb88-vip-content p{
        margin:5px 0 8px;color:#d9e5ff;font-size:9px;line-height:12px;
      }

      .cb88-vip-content a{
        display:inline-flex;align-items:center;gap:8px;padding:6px 8px;
        color:#211400;background:linear-gradient(135deg,#fff0a3,#d19a25 58%,#ffe27b);
        border:1px solid #fff1a0;border-radius:4px;text-decoration:none;
        font-size:9px;font-weight:900;box-shadow:0 2px 6px #0008;
      }

      .cb88-vip-content a:hover{filter:brightness(1.1)}
      .cb88-vip-content a b{font-size:16px;line-height:8px}

      .cb88-vip-medal{
        position:relative;z-index:1;flex:none;width:70px;height:70px;border-radius:50%;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        color:#ffe899;border:3px solid #f3d064;
        background:
          radial-gradient(circle at 32% 23%,#fffbd3 0 4%,transparent 5%),
          radial-gradient(circle at 50% 45%,#3977e2 0 20%,#153f99 38%,#07174c 66%,#936617 68%,#d6a82f 78%,#3b2301 80%);
        box-shadow:0 0 0 2px #70480b,0 0 11px #ffda5d,0 4px 8px #000b;
      }

      .cb88-vip-medal small{font-size:6px;font-weight:900;color:#fff5be}
      .cb88-vip-medal em{
        font-family:Georgia,serif;font-size:27px;font-style:italic;font-weight:900;
        line-height:24px;text-shadow:0 1px #573400,0 0 5px #ffe891;
      }
      .cb88-vip-medal i{font-size:11px;font-style:normal;color:#fff3ad}

      .cb88-vip-x{
        position:absolute;z-index:3;right:-8px;top:-9px;width:20px;height:20px;
        border:2px solid #fff;border-radius:50%;padding:0;cursor:pointer;
        color:#fff;background:#e41d35;font-size:17px;font-weight:bold;line-height:14px;
        box-shadow:0 2px 5px #0009;
      }

      @media(max-width:600px){
        #cb88-vip-widget{top:calc(50% + 84px)}
        .cb88-vip-tab{width:34px;height:68px}
        .cb88-vip-popup{left:42px;width:min(270px,calc(100vw - 49px))} 
      }
    </style>
  `);

  const widget = document.getElementById('cb88-vip-widget');
  const tab = widget.querySelector('.cb88-vip-tab');
  const close = widget.querySelector('.cb88-vip-x');

  tab.addEventListener('click', () => {
    const opened = widget.classList.toggle('open');
    tab.setAttribute('aria-expanded', opened);
  });

  close.addEventListener('click', () => {
    widget.classList.remove('open');
    tab.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', (event) => {
    if (!widget.contains(event.target)) {
      widget.classList.remove('open');
      tab.setAttribute('aria-expanded', 'false');
    }
  });
})();
