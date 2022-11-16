import { useState } from "react";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { TechList } from "../../shared/components/Lista";
import { Container_content, ResumoProfissional } from "./styled";




export const Home = () => { 

    
    const idioma = [{
        en:"Hello, my name is Maiara Santos and I am a Front-End Developer, Technologies that I have experience:", 
        pt: "Olá, meu nome é Maiara Santos e eu sou Desenvolvedora Front-End, Tecnologias que tenho experiência:",
        es:"Hola, mi nombre es Maiara Santos y soy Desarrolladora Front-End, Tecnologías en las que tengo experiencia:"
    }]
   
    
    const [language, setLanguage] = useState(idioma[0].pt)

    const handleLanguage=(Text:string) => {
        
        if (Text == 'Brasil') {
            setLanguage(idioma[0].pt) 
        } else if (Text == 'Espanhol') {
            setLanguage(idioma[0].es)
        } else {
            setLanguage(idioma[0].en)  
        }
       
    }
    
    return (
        <>
            <Header /> 
            <Container_content>
            <ResumoProfissional>
                    {language}
            </ResumoProfissional>
            <TechList/>
           </Container_content>
            <Footer languages={handleLanguage} />
           
        </>

    )
}