(() => {
  const initSportbookCard = () => {
    if (document.getElementById('cb88-sport-card')) return;

    const directLink = 'https://click-lynk.com/CLICKBET88NEW';

    document.body.insertAdjacentHTML('beforeend', `
      <div id="cb88-sport-card">
        <button class="cb88-sport-tab" type="button" aria-label="Buka Sportbook">
          <span>S</span>
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
        </button>

        <section class="cb88-sport-popup" aria-label="Sportbook CLICKBET88">
          <button class="cb88-sport-close" type="button" aria-label="Tutup">×</button>

          <a class="cb88-sport-content" href="${directLink}" target="_blank" rel="noopener">
            <div class="cb88-sport-kicker">⚽ CLICKBET88 SPORTBOOK</div>

            <strong>CARI TAMPILAN SBOBET RESMI?</strong>

            <p>Mainkan sportsbook favoritmu di sini!</p>

            <div class="cb88-provider-grid">
              <div class="cb88-provider">
                <img src="https://plcl.me/images/dUbMs.png" alt="SBOBET">
              </div>

              <div class="cb88-provider">
                <img src="https://plcl.me/images/b3oXy.png" alt="NOVA">
              </div>

              <div class="cb88-provider">
                <img src="https://plcl.me/images/yC2dH.png" alt="IBCBET dan MAXBET">
              </div>

              <div class="cb88-provider">
                <img src="https://plcl.me/images/guEXm.png" alt="368BET">
              </div>
            </div>

            <span class="cb88-sport-cta">
              MASUK KE LAYANAN SBOBET <b>›</b>
            </span>
          </a>
        </section>
      </div>

      <style>
        #cb88-sport-card {
          position: fixed;
          z-index: 2147482000;
          left: 0;
          top: 63%;
          transform: translateY(-50%);
          font-family: Arial, Helvetica, sans-serif;
        }

        #cb88-sport-card * {
          box-sizing: border-box;
        }

        .cb88-sport-tab {
          width: 34px;
          height: 126px;
          padding: 0;
          border: 1px solid #d9a72d;
          border-left: 0;
          border-radius: 0 9px 9px 0;
          cursor: pointer;
          color: #fff;
          background: linear-gradient(180deg, #10277d, #05073e 58%, #07185d);
          box-shadow:
            0 0 8px #e5b83d99,
            0 6px 16px #000b,
            inset 0 0 10px #5082ff66;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          transition: filter .2s ease;
        }

        .cb88-sport-tab:hover {
          filter: brightness(1.18);
        }

        .cb88-sport-tab span {
          font-size: 11px;
          font-weight: 900;
          text-shadow: 0 0 6px #fff, 0 0 9px #4384ff;
        }

        .cb88-sport-popup {
          position: absolute;
          left: 39px;
          top: 50%;
          width: 260px;
          padding: 3px;
          border: 1px solid #e5b83d;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translate(-12px, -50%);
          transition: .25s ease;
          background: linear-gradient(135deg, #f8d259, #80570e 38%, #f5ca4e);
          box-shadow: 0 0 12px #e7bc4588, 0 10px 24px #000b;
        }

        #cb88-sport-card.open .cb88-sport-popup {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translate(0, -50%);
        }

        .cb88-sport-content {
          display: block;
          min-height: 215px;
          padding: 13px 13px 11px;
          overflow: hidden;
          position: relative;
          border-radius: 7px;
          color: #fff;
          text-decoration: none;
          background:
            radial-gradient(circle at 90% 10%, #4b85f588, transparent 33%),
            radial-gradient(circle at 12% 88%, #eb183d55, transparent 38%),
            linear-gradient(135deg, #123483, #060b33 61%, #133779);
        }

        .cb88-sport-content::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .2;
          background: repeating-linear-gradient(
            -45deg,
            transparent 0 8px,
            #ffffff11 8px 15px
          );
        }

        .cb88-sport-kicker {
          position: relative;
          color: #ff5360;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
          text-shadow: 0 1px 2px #000, 0 0 5px #ff1f34;
        }

        .cb88-sport-content strong {
          position: relative;
          display: block;
          margin-top: 6px;
          color: #fff;
          font-size: 14px;
          line-height: 17px;
          font-weight: 900;
          white-space: nowrap;
          text-shadow: 0 2px 2px #000, 0 0 8px #4b8aff;
        }

        .cb88-sport-content p {
          position: relative;
          margin: 4px 0 9px;
          color: #dce8ff;
          font-size: 9px;
          font-weight: 700;
        }

        .cb88-provider-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 7px;
          margin-bottom: 10px;
        }

        .cb88-provider {
          height: 43px;
          padding: 4px 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 231, 133, .7);
          border-radius: 4px;
          background: linear-gradient(135deg, #fff9cc, #e9c649 56%, #fff0a2);
          box-shadow: inset 0 1px 1px #fff;
        }

        .cb88-provider img {
          display: block;
          max-width: 96px;
          max-height: 29px;
          object-fit: contain;
          filter: drop-shadow(0 1px 1px #fff) drop-shadow(0 1px 2px #332100);
        }

        .cb88-sport-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 32px;
          padding: 0 8px;
          border-radius: 4px;
          color: #111c30;
          font-size: 9px;
          font-weight: 900;
          background: linear-gradient(180deg, #fff49e, #dba82c);
          box-shadow: 0 2px 7px #0008, inset 0 1px #fff;
        }

        .cb88-sport-cta b {
          font-size: 18px;
          line-height: 1;
        }

        .cb88-sport-close {
          position: absolute;
          z-index: 3;
          right: -7px;
          top: -8px;
          width: 19px;
          height: 19px;
          padding: 0;
          border: 1px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          color: #fff;
          background: #e31c33;
          font-size: 17px;
          line-height: 15px;
          box-shadow: 0 1px 4px #0008;
        }

        @media (max-width: 600px) {
          .cb88-sport-popup {
            width: min(260px, calc(100vw - 48px));
          }

          .cb88-sport-content strong {
            font-size: 13px;
          }

          .cb88-provider img {
            max-width: 88px;
          }
        }
      </style>
    `);

    const card = document.querySelector('#cb88-sport-card');
    const tab = card.querySelector('.cb88-sport-tab');
    const closeButton = card.querySelector('.cb88-sport-close');

    const placeSportButton = () => {
      const vipButton = document.querySelector('.cb88-vip-tab');

      if (!vipButton) return;

      const vipBox = vipButton.getBoundingClientRect();
      const sportHeight = tab.getBoundingClientRect().height || 126;
      const gap = 14;

      let sportCenter = vipBox.bottom + gap + (sportHeight / 2);

      if (sportCenter + (sportHeight / 2) > window.innerHeight - 12) {
        sportCenter = vipBox.top - gap - (sportHeight / 2);
      }

      sportCenter = Math.max(
        (sportHeight / 2) + 12,
        Math.min(
          window.innerHeight - (sportHeight / 2) - 12,
          sportCenter
        )
      );

      card.style.top = sportCenter + 'px';
    };

    tab.addEventListener('click', () => {
      card.classList.toggle('open');
    });

    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      card.classList.remove('open');
    });

    document.addEventListener('click', (event) => {
      if (!card.contains(event.target)) {
        card.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        card.classList.remove('open');
      }
    });

    requestAnimationFrame(placeSportButton);
    setTimeout(placeSportButton, 500);
    setTimeout(placeSportButton, 1500);

    window.addEventListener('resize', placeSportButton);
  };

  if (document.body) {
    initSportbookCard();
  } else {
    document.addEventListener('DOMContentLoaded', initSportbookCard);
  }
})();
