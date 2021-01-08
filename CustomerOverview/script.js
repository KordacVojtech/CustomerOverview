const appendDiv = document.getElementById('appendDiv');
const reportsDiv = document.getElementById('reportsDiv');
const reports = document.getElementById('reports');
const filesDiv = document.getElementById('filesDiv');
const files = document.getElementById('files');
const notifsDiv = document.getElementById('notifsDiv');
const notif = document.getElementById('notif');
const onlineDiv = document.getElementById('onlineDiv');
const online = document.getElementById('online');
const plusBtn = document.getElementById('plus');

let onlineClicked;
let reportsClicked;
let filesClicked;
let notifsClicked;

reportsDiv.addEventListener('mouseover', ()=>{

    reportsDiv.style.backgroundColor = '#f1f4f8';
    reports.src = 'img/list-dotBlue.svg';

})

reportsDiv.addEventListener('mouseout', ()=>{
    if(!reportsClicked){
        reportsDiv.style.backgroundColor = '#ffffff';
        reports.src = 'img/list-dot.svg'
    }
    
})

filesDiv.addEventListener('mouseover', ()=>{
    filesDiv.style.backgroundColor = '#f1f4f8';
    files.src = 'img/file-addBlue.svg';

})

filesDiv.addEventListener('mouseout', ()=>{
    if(!filesClicked){
        filesDiv.style.backgroundColor = '#ffffff';
        files.src = 'img/file-add.svg'
    }
})

notifsDiv.addEventListener('mouseover', ()=>{
    notifsDiv.style.backgroundColor = '#f1f4f8';
    notif.src = 'img/notificationBlueImg.svg';

})

notifsDiv.addEventListener('mouseout', ()=>{
    if(!notifsClicked){
        notifsDiv.style.backgroundColor = '#ffffff';
        notif.src = 'img/notification.svg'
    }
})

onlineDiv.addEventListener('mouseover', ()=>{

    onlineDiv.style.backgroundColor = '#f1f4f8';
    online.src = 'img/onlineBlue.svg';


})

onlineDiv.addEventListener('mouseout', ()=>{
    if(!onlineClicked){
        onlineDiv.style.backgroundColor = '#ffffff';
        online.src = 'img/online.svg'
    }
})

onlineDiv.addEventListener('click', ()=>{
    onlineDiv.style.backgroundColor = '#f1f4f8';
    online.src = 'img/onlineBlue.svg';
    reports.src = 'img/list-dot.svg';
    files.src = 'img/file-add.svg';
    notif.src = 'img/notification.svg';
    notifsDiv.style.backgroundColor = '#ffffff';
    reportsDiv.style.backgroundColor = '#ffffff';
    filesDiv.style.backgroundColor = '#ffffff';
    onlineClicked = true;
    reportsClicked = false;
    filesClicked = false;
    notifsClicked = false;

})

notifsDiv.addEventListener('click', ()=>{
    notifsDiv.style.backgroundColor = '#f1f4f8';
    notif.src = 'img/notificationBlueImg.svg';
    files.src = 'img/file-add.svg';
    reports.src = 'img/list-dot.svg';
    online.src = 'img/online.svg';
    onlineDiv.style.backgroundColor = '#ffffff';
    reportsDiv.style.backgroundColor = '#ffffff';
    filesDiv.style.backgroundColor = '#ffffff';

    notifsClicked = true;
    onlineClicked = false;
    reportsClicked = false;
    filesClicked = false;
})

filesDiv.addEventListener('click', ()=>{
    filesDiv.style.backgroundColor = '#f1f4f8';
    files.src = 'img/file-addBlue.svg';
    reports.src = 'img/list-dot.svg';
    online.src = 'img/online.svg';
    notif.src = 'img/notification.svg';
    notifsDiv.style.backgroundColor = '#ffffff';
    reportsDiv.style.backgroundColor = '#ffffff';
    onlineDiv.style.backgroundColor = '#ffffff';

    filesClicked = true;
    onlineClicked = false;
    reportsClicked = false;
    notifsClicked = false;
})

reportsDiv.addEventListener('click', ()=>{
    reportsDiv.style.backgroundColor = '#f1f4f8';
    reports.src = 'img/list-dotBlue.svg';
    online.src = 'img/online.svg';
    notif.src = 'img/notification.svg';
    files.src = 'img/file-add.svg';
    notifsDiv.style.backgroundColor = '#ffffff';
    onlineDiv.style.backgroundColor = '#ffffff';
    filesDiv.style.backgroundColor = '#ffffff';

    reportsClicked = true;
    onlineClicked = false;
    filesClicked = false;
    notifsClicked = false;
})


let rot = 360;

plusBtn.addEventListener('click', ()=>{
    plusBtn.style.transform = 'rotate(' + rot + 'deg)';
    plusBtn.style.transition = '.7s'
    rot +=360;
})

const sizeArr = document.getElementById('sizeArr');

let sizeArrRot = 180;

sizeArr.addEventListener('click', ()=>{
    sizeArr.style.transform = 'rotate(' + sizeArrRot + 'deg)';
    sizeArr.style.transition = '.3s'
    sizeArrRot +=180;
})


let UpdateActive = false;




fetch('./data.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
    for(i=0; i<=6; i++){

        const rowDiv = document.createElement('div');
        
        rowDiv.className = 'row';

        const logoImgDiv = document.createElement('div');
        logoImgDiv.className = 'logoImg';
        const logoImg = document.createElement('img');
        logoImg.className = 'Bitmap';
        logoImg.src = data[i].logo;
        logoImgDiv.appendChild(logoImg);

        const brandNameDiv = document.createElement('div');
        brandNameDiv.className = 'brandNameDiv';
        const brandNameP = document.createElement('p');
        brandNameP.className = 'brandName';
        brandNameP.textContent = data[i].name;
        brandNameDiv.appendChild(brandNameP);

        const defaultBtnDiv = document.createElement('div');
        defaultBtnDiv.className = 'defaultBtnDiv';
        const Update = document.createElement('button');
        Update.className = 'Update';
        Update.textContent = 'Default';
        Update.setAttribute('id', [i]);
        defaultBtnDiv.appendChild(Update);

        const comIdDiv = document.createElement('div');
        comIdDiv.className = 'comIdDiv';
        const comIdText = document.createElement('p');
        comIdText.className = 'comIdText';
        comIdText.textContent = data[i].com_id;
        comIdDiv.appendChild(comIdText);

        const legIdDiv = document.createElement('div');
        legIdDiv.className = 'legIdDiv';
        const legIdText = document.createElement('p');
        legIdText.className = 'legIdText';
        legIdText.textContent = data[i].leg_id;
        legIdDiv.appendChild(legIdText);

        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'sizeDiv';
        const sizeText = document.createElement('p');
        sizeText.className = 'sizeText';
        sizeText.textContent = data[i].size;
        sizeDiv.appendChild(sizeText);

        const statusBtnDiv = document.createElement('div');
        statusBtnDiv.className = 'statusBtnDiv';
        const Active = document.createElement('button');
        Active.className = 'Active';
        Active.textContent = 'Active';
        statusBtnDiv.appendChild(Active);

        rowDiv.appendChild(logoImgDiv);
        rowDiv.appendChild(brandNameDiv);
        rowDiv.appendChild(defaultBtnDiv);
        rowDiv.appendChild(comIdDiv);
        rowDiv.appendChild(legIdDiv);
        rowDiv.appendChild(sizeDiv);
        rowDiv.appendChild(statusBtnDiv);
        appendDiv.appendChild(rowDiv);

        

        Active.addEventListener('click', ()=>{
            if(Active.textContent == 'Active'){
                Active.style.backgroundColor = '#fbd3cf';
                Active.textContent = 'Inactive';
                Active.style.color = '#982121';
            } else if(Active.textContent == 'Inactive'){
                Active.style.backgroundColor = '#cffbe9';
                Active.textContent = 'Active';
                Active.style.color = '#21985e';
            }
            
        })


        
        

            Update.addEventListener('click', function click(){
            
            const div = document.createElement('div');
            const triangle = document.createElement('div');
            const opt1 = document.createElement('div');
            const opt2 = document.createElement('div');
            const opt3 = document.createElement('div');
            const text1 = document.createElement('p');
            const text2 = document.createElement('p');
            const text3 = document.createElement('p');

            const checkDiv1 = document.createElement('div');
            const checkDiv2 = document.createElement('div');
            const checkDiv3 = document.createElement('div');

            triangle.className = 'arrow-up';

            checkDiv1.className = 'checkDiv';
            checkDiv2.className = 'checkDiv';
            checkDiv3.className = 'checkDiv';

            div.className = 'dropDown';
            opt1.className = 'dropDownOption';
            opt2.className = 'dropDownOption';
            opt3.className = 'dropDownOption';

            text1.className = 'textDefaultP';
            text2.className = 'textDefaultP';
            text3.className = 'textDefaultP';

            text1.textContent = 'Something';
            text2.textContent = 'Something';
            text3.textContent = 'Something';

            opt1.appendChild(text1);
            opt2.appendChild(text2);
            opt3.appendChild(text3);

            opt1.appendChild(checkDiv1);
            opt2.appendChild(checkDiv2);
            opt3.appendChild(checkDiv3);

            div.style.display = 'flex'
            
            
            div.appendChild(opt1);
            div.appendChild(opt2);
            div.appendChild(opt3);

            // triangle.appendChild(div);

            Update.appendChild(div);
            
            Update.disabled = true;
            
            

            div.addEventListener('mouseleave', ()=>{
                
                div.style.display = 'none';
                Update.disabled = false;
                
                
            })

            // div.addEventListener('mouseleave', ()=>{
            //     Update.addEventListener('click',click())
            // })
            const check1 = document.createElement('img');
            const check2 = document.createElement('img');
            const check3 = document.createElement('img');
            opt1.addEventListener('click', (event)=>{
                
                check1.src = "img/check.svg";
                check2.src = '';
                check3.src = '';
                opt2.style.backgroundColor = '#ffffff';
                opt3.style.backgroundColor = '#ffffff';
                checkDiv1.appendChild(check1)
                opt1.style.backgroundColor = '#f1f4f8';
                event.stopPropagation();
            })

            opt1.addEventListener('mouseover',()=>{
                opt1.style.backgroundColor = '#f1f4f8';
            })

            opt1.addEventListener('mouseout',()=>{
                opt1.style.backgroundColor = '#ffffff';
            })

            
            opt2.addEventListener('click', (event)=>{
                
                check2.src = "img/check.svg";
                check1.src = '';
                check3.src = '';
                opt1.style.backgroundColor = '#ffffff';
                opt3.style.backgroundColor = '#ffffff';
                checkDiv2.appendChild(check2)
                opt2.style.backgroundColor = '#f1f4f8';
                event.stopPropagation();
            })

            opt2.addEventListener('mouseover',()=>{
                opt2.style.backgroundColor = '#f1f4f8';
            })

            opt2.addEventListener('mouseout',()=>{
                opt2.style.backgroundColor = '#ffffff';
            })

            
            opt3.addEventListener('click', (event)=>{
                
                check3.src = "img/check.svg";
                check1.src = '';
                check2.src = '';
                opt1.style.backgroundColor = '#ffffff';
                opt2.style.backgroundColor = '#ffffff';
                checkDiv3.appendChild(check3)
                opt3.style.backgroundColor = '#f1f4f8';
                event.stopPropagation();
            })

            opt3.addEventListener('mouseover',()=>{
                opt3.style.backgroundColor = '#f1f4f8';
            })

            opt3.addEventListener('mouseout',()=>{
                opt3.style.backgroundColor = '#ffffff';
            })

        })

        
        

    }
})

const sideDiv = document.getElementById('sideDiv');
const middleTable = document.getElementById('middleTable');
const arrowShow = document.getElementById('arrow');

let rotArr = 180;

arrowShow.addEventListener('click', ()=>{
    if(sideDiv.style.display !=='none'){
        sideDiv.style.display = 'none';
        middleTable.style.height = '860px';
        middleTable.style.marginLeft = '160px';
        arrowShow.style.marginLeft = '-157px';
        arrowShow.src = 'img/west-24px.svg';
        arrowShow.style.transform = 'rotate(' + rotArr + 'deg)';
        arrowShow.style.transition = '.3s'
        rotArr +=180;
    } else if (sideDiv.style.display =='none'){
        sideDiv.style.display = 'flex';
        middleTable.style.marginLeft = '0px';
        arrowShow.style.marginLeft = '0px';
        arrowShow.style.transform = 'rotate(' + rotArr + 'deg)';
        arrowShow.style.transition = '.3s'
        rotArr +=180;
    }

})

const scaleDown = document.getElementById('scaleDown');
const scaleUp = document.getElementById('scaleUp');
const tablePage = document.getElementById('tablePage');
const scaleBtnsDiv = document.getElementById('scaleBtnsDiv');
const hideBtns = document.getElementById('hideBtns');

scaleDown.addEventListener('click', ()=>{
    tablePage.style.transform = 'scale(0.62)'
})

scaleUp.addEventListener('click', ()=>{
    tablePage.style.transform = 'scale(1)'
})

hideBtns.addEventListener('click', ()=>{
    scaleBtnsDiv.style.display = 'none'
})