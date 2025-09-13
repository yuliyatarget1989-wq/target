import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Target Advance — продвижение клиник в США</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={{background:'#7B2D26', color:'#fff', padding:20}}>
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <img src="/images/logo.svg" alt="Target Advance" style={{height:44}}/>
            <strong>Target Advance</strong>
          </div>
          <nav style={{display:'flex', gap:16}}>
            <a href="#about" style={{color:'#fff'}}>О компании</a>
            <a href="#services" style={{color:'#fff'}}>Услуги</a>
            <a href="#cases" style={{color:'#fff'}}>Кейсы</a>
            <a href="#results" style={{color:'#fff'}}>Результаты</a>
            <a href="#contact" style={{color:'#fff'}}>Контакты</a>
          </nav>
        </div>
      </header>

      <main style={{maxWidth:1100, margin:'24px auto', padding:'0 16px'}}>
        <section id="about">
          <h1 style={{color:'#5A1A1D'}}>Target Advance — продвижение клиник и стоматологий в США</h1>
          <p>Мы официальное агентство. Работаем по договору, предоставляем Инвойс.</p>
        </section>

        <section id="services" style={{marginTop:24}}>
          <h2>Услуги</h2>
          <ul>
            <li>Таргетированная реклама (Facebook / Instagram)</li>
            <li>Google Ads</li>
            <li>TikTok & YouTube</li>
            <li>Контекст и локальные кампании</li>
            <li>Настройка сквозной аналитики и CRM</li>
          </ul>
        </section>

        <section id="cases" style={{marginTop:24}}>
          <h2>Кейсы</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:18}}>
            {Array.from({length:9}).map((_,i) => (
              <article key={i} style={{borderRadius:12, overflow:'hidden', boxShadow:'0 8px 24px rgba(0,0,0,0.08)'}}>
                <img src={`/results/case${i+1}.jpg`} alt={`Кейс ${i+1}`} style={{width:'100%', height:160, objectFit:'cover'}} />
                <div style={{padding:12}}>
                  <h3 style={{margin:0, color:'#7B2D26'}}>Кейс {i+1}</h3>
                  <p style={{marginTop:8}}>Настройка рекламы и привлечение пациентов. Была выполнена настройка таргетинга, запуск креативов и оптимизация бюджета.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="results" style={{marginTop:24}}>
          <h2>Некоторые результаты продвижения наших клиентов</h2>
          <p>Реальные скриншоты из рекламных кабинетов — настройка рекламы всегда была выполнена нашей командой.</p>
          <div style={{display:'flex', gap:12, overflowX:'auto', padding:'8px 0'}}>
            {[1,2,3,4].map(n => (
              <div key={n} style={{minWidth:320}}>
                <img src={`/results/result${n}.jpg`} alt={`Результат ${n}`} style={{width:'100%', height:200, objectFit:'cover', borderRadius:8}} />
                <div style={{marginTop:8, color:'#7B2D26', fontWeight:700}}>📈 Пример: {n*50} охват — цена за результат ${ (n*1.5).toFixed(2) }</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contract" style={{marginTop:24, background:'#faf3f3', padding:18, borderRadius:8}}>
          <h2>Пример контракта на сотрудничество</h2>
          <p>Мы работаем только официально, по договору. Предоставляем Инвойс.</p>
          <a href="/docs/contract-sample.pdf" download style={{display:'inline-block', marginTop:10, padding:'10px 16px', background:'#7B2D26', color:'#fff', borderRadius:8}}>Скачать пример договора</a>
        </section>

        <section id="contact" style={{marginTop:24}}>
          <h2>Контакты</h2>
          <p>Email: info@targetadvance.com</p>
        </section>
      </main>

      <footer style={{padding:18, textAlign:'center', background:'#7B2D26', color:'#fff'}}>© {new Date().getFullYear()} Target Advance</footer>
    </div>
  )
}
