import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" targer="_blank">
              <img src="/imagens/fb.png" alt="Logo Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" targer="_blank">
              <img src="/imagens/tw.png" alt="Logo Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" targer="_blank">
              <img src="/imagens/ig.png" alt="Logo Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="imagens/logo.png" alt="Logo Organo" />
      </section>
      <section>
        <p>
          Desenvolvido por Marcio.
        </p>
      </section>
    </footer>
  )
}

export default Rodape