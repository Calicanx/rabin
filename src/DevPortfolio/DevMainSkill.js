import html5 from './pics/html5.png';
import css from './pics/css.png';
import react from './pics/react.png';
import django from './pics/django.png';
import ruby from './pics/ruby.png';
import './Dev.css';

export default function MainAbout(){
    return(
        <div className='row'>
            <div className='col-6 mw'>
                <h3 className='skilldev'>SKILLS</h3>
                <h2 className='whatdev'>What Can I do</h2>
            </div>
            <div className='col-12 sicon flex'>
                <div className='skillbtn'>
                    <img className='iconpic' src={html5}></img>
                    <h4 className='sk'>HTML5</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={css}></img>
                    <h4 className='sk'>CSS</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={react}></img>
                    <h4 className='sk'>React</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={django}></img>
                    <h4 className='sk'>Django</h4>
                </div>
                <div className='skillbtn'>
                    <img className='iconpic' src={ruby}></img>
                    <h4 className='sk'>Ruby</h4>
                </div>
            </div>
        </div>
    )
}
