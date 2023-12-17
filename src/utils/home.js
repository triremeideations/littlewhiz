/* eslint-disable dot-location */

export default function homework(){

        const quibble = document.getElementsByClassName('scroll_1')[0];
        const extra = document.getElementsByClassName('extra')[0];

        window.addEventListener("scroll",
            function (){
                const scrollPos = window.scrollY;
                
                //parallax fx
                document.getElementsByClassName('cs_0')[0].
                style.transform = 
                `
                translateY(${scrollPos * 0.7}px)
                `;
                
                document.getElementsByClassName('cs_1')[0].
                style.transform = 
                `
                translateY(${scrollPos * 0.25}px)
                `;
                
                document.getElementsByClassName('cs_2')[0].
                style.transform = 
                `
                translateY(${scrollPos * 0.6}px)
                `;
                document.getElementsByClassName('cs_x')[0].
                style.transform = 
                `
                translateY(${scrollPos * 0.6}px)
                `;
                
                document.getElementsByClassName('cs_3')[0].
                style.transform = 
                `
                translateY(${scrollPos * 0.1}px)
                `;
                //end parallax
                
                //quibble fx

                const scroll_height = document.documentElement.scrollHeight;
                const fauxPos = scrollPos + window.innerHeight;
                const realPos = fauxPos - 650;
                const remnant_scroll = scroll_height - fauxPos;
                // const offset = fauxPos - realPos;
                const display_height = window.innerHeight;
                const content_pos = display_height - realPos;
                const content_start = -(content_pos - 400);

                quibble.innerText =
                `
                    ${realPos}
                    at ${fauxPos}
                    of ${scroll_height}
                    remaining ${remnant_scroll}
                    shown on ${display_height}
                    with content at ${content_start}
                `;

                // if (content_start >= 0){
                    // quibble.style.backgroundColor = 'red';
                    //add image animation here
                // }
                // else quibble.style.backgroundColor = 'rebeccapurple';
                
                if (content_start < 110){
                    quibble.style.transform='rotateZ(0deg) rotateY(0deg)';
                    quibble.style.left='5%';
                    quibble.style.top='350px';
                }
                if (content_start >= 110){
                    quibble.style.transform='rotateZ(-25deg) rotateY(0)';
                }
                
                if (content_start >= 200){
                    quibble.style.left = '50%';
                    quibble.style.transform='rotateZ(45deg) rotateY(180deg)';
                }
                if (content_start >= 270){
                    quibble.style.left = '50%';
                    quibble.style.top='100px';
                    quibble.style.transform='rotateZ(-5deg) rotateY(180deg)';
                }
                if (content_start >= 950){
                    quibble.style.transform='rotateZ(15deg)';
                    quibble.style.left = '10%';
                    quibble.style.top='300px';
                }
                if (content_start >= 1440){
                    quibble.style.transform='rotateZ(-15deg) rotateY(180deg)';
                    quibble.style.left = '70%';
                    quibble.style.top='70px';
                }

                function boxpop(){
                    if (content_start >= 1490){
                        extra.style.transform='scale(1)';
                    }
                    else if(content_start < 1490){
                        extra.style.transform='scale(0)';
                    }
                // if (remnant_scroll > 0){
                //     extra.style.transform='scale(0)';
                // }
                }

                boxpop();

                
                
                

                //end quibble position
                
                // if (scrollPos < 1000){
                //     quibble.style.backgroundImage='url("./img/image_0.png")';
                // }
                // else if (scrollPos < 1300){
                //     quibble.style.backgroundImage='url("./img/image_1.png")';
                // }
                // else if (scrollPos < 1600){
                //     quibble.style.backgroundImage='url("./img/image_2.png")';
                // }
                // else {
                //     quibble.style.backgroundImage='url("./img/image_3.png")';
                // }
            }
        );
    };