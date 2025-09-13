export default function Home() {
  return (
    <div style={{fontFamily:'Arial, sans-serif'}}>
      <header style={{padding:'20px', background:'#7B2D26', color:'#fff'}}>
        <h1>Target Advance</h1>
      </header>

      <main style={{padding:'40px'}}>
        <section>
          <h2>О компании</h2>
          <p>Мы продвигаем медицинские центры и стоматологии в США через рекламу в соцсетях и поиске.</p>
        </section>

        <section>
          <h2>Услуги</h2>
          <ul>
            <li>Таргетированная реклама (Facebook, Instagram, TikTok)</li>
            <li>Google Ads</li>
            <li>YouTube продвижение</li>
            <li>Email-маркетинг</li>
          </ul>
        </section>

        <section>
          <h2>Кейсы</h2>
          <p>Настроили рекламу стоматологии в Майами — рост пациентов на 40%.</p>
        </section>

        <section>
          <h2>Результаты</h2>
          <img src="/results/result1.jpg" alt="Результат" style={{maxWidth:'300px'}} />
          <p>37 лидов по $5.21</p>
        </section>

        <section>
          <h2>Пример контракта</h2>
          <a href="/docs/contract-sample.pdf" download>Скачать пример договора</a>
        </section>

        <section>
          <h2>Контакты</h2>
          <p>Email: info@targetadvance.com</p>
        </section>
      </main>

      <footer style={{padding:'20px', background:'#7B2D26', color:'#fff', textAlign:'center'}}>
        © {new Date().getFullYear()} Target Advance
      </footer>
    </div>
  );
}
