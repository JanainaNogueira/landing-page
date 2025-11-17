import './index.css'
import avoice from "../assets/img/Avoice.png"
import atapping from "../assets/img/Atapping.png"
import awrite from "../assets/img/Awrite.png"

export default function SectionAnalises(){
    return(
        <section id="oapp" className='section'>
            <h2>Acompanhe seu desempenho</h2>
            <div className='imgAnalises'>
                <img src={avoice}/>
                <img src={atapping}/>
                <img src={awrite}/>
            </div>
            <div className='btnContainer'>
                <a 
                    href="https://play.google.com/store/apps/details?id=seuapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="downloadButton"
                >
                    Baixar artigo científico
                </a>
            </div>
        </section>
    )
}