import React from 'react';

export enum Language {
    Typescript = "Typescript",
    Javascript = "Javascript"
}

interface LogoProps {
    logo: string
}

export interface HeaderProps extends LogoProps {
    nome: string, 
    classNumber?: number | string | null,
    language: Language
}

const Header:React.FC<HeaderProps> = (props:HeaderProps) => {
  
    return (
    <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <p>
            Bemvindo à Powerclass #{props.classNumber}, {props.nome}.<br/>
            O tema da aula de hoje é {Language.Typescript}
        </p>
      </header>
    )
}

export default Header;