import './index.css'
import celularHome from '../assets/img/celular-home.png'

export default function Home(){
    return(
        <main id="home" className='home'>
            <div className='text-home'>
                <h1>AnalisAVC - Tecnologia a serviço da saúde pública</h1>
                <p>
                    Recuperar a fala. Retomar o movimento. Reconstruir a comunicação. 
                    O AnalisAVC é um aplicativo gratuito criado para ajudar pessoas que passaram por um AVC 
                    a treinar fala, coordenação e linguagem de forma simples e acessível.
                </p>

                <div className='btnContainer'>
                    <a 
                        href="https://play.google.com/store/apps/details?id=seuapp" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='downloadButton'
                    >
                        📲 Baixar o App
                    </a>
                </div>
            </div>

            <img src={celularHome} alt="Tela inicial do aplicativo AnalisAVC" className='img-home' />
        </main>
    );
}
