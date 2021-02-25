import { useState, useEffect, useCallback} from 'react';



export function ExperienceBarProgress(){
    let levelUp = 600;
    let [color, setColor] = useState('red');
    let [currentPercentage , setCurrentPercentage] = useState(0);

    const calculatePercentage = useCallback(
        (currentValue: number, total: number) => (currentValue / total) * 100,
        [],
      );

    useEffect(() => {
        setInterval(() => {
            setCurrentPercentage(Math.floor(Math.random() * levelUp));
        }, 6000);

        if(calculatePercentage(currentPercentage, levelUp) < 50) {
            setColor('red');
        }else if(calculatePercentage(currentPercentage, levelUp) >= 50 && calculatePercentage(currentPercentage, levelUp) < 99){
            setColor('yellow');
        }else{
            setColor('green');
        }
    }, [calculatePercentage, currentPercentage, levelUp, color]);

          
  

    return(
        <header className="experience-bar">
           <span>0 px</span> 
           <div>
               <div style={{width: `${calculatePercentage(currentPercentage, levelUp)}%`, backgroundColor: `var(--${color})` }}/>
               <span className="current-experience" style={{left: `${calculatePercentage(currentPercentage, levelUp)}%`}}>
                  {currentPercentage}px
               </span>
           </div>
           <span>{levelUp} px</span> 
        </header>
    )

}