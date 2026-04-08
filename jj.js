const _0={'da':'\x64\x61\x74\x61','s1':'\x73\x63\x72\x69\x70\x74','s2':'\x73\x72\x63','s3':'\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x32\x33\x34\x35\x36\x37','s4':'\x69\x6d\x61\x67\x65\x2f\x6a\x70\x65\x67','s5':'\x69\x6d\x61\x67\x65\x2f\x6a\x70\x67','s6':'\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67','s7':'\x65\x72\x72\x6f\x72','s8':'\x63\x61\x6e\x76\x61\x73','s9':'\x32\x64','s10':'\x77\x69\x64\x74\x68','s11':'\x68\x65\x69\x67\x68\x74','s12':'\x69\x64\x73','s13':'\x50\x4f\x53\x54','s14':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','s15':'\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65','s16':'\x66\x69\x6c\x65\x49\x6e\x70\x75\x74','s17':'\x63\x68\x61\x6e\x67\x65','s18':'\x69\x6d\x67\x50\x72\x65\x76\x69\x65\x77','s19':'\x70\x72\x65\x76\x69\x65\x77','s20':'\x64\x69\x73\x70\x6c\x61\x79','s21':'\x62\x6c\x6f\x63\x6b','s22':'\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75','s23':'\x6b\x65\x79\x64\x6f\x77\x6e','s24':'\x64\x65\x62\x75\x67\x67\x65\x72','s25':'\x46\x31\x32','s26':'\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64'};

const _0x9f=a=>a.match(/.{1,2}/g).map(c=>String.fromCharCode(parseInt(c,16))).join('');
const _0x8e=a=>{const b=_0.s3;let c=0,d=0,e='';a=a.replace(/=+$/,'').toUpperCase();for(let i=0;i<a.length;i++){d=(d<<5)|b.indexOf(a[i]);c+=5;if(c>=8)e+=String.fromCharCode((d>>>(c-8))&255),c-=8;}return e;};
const _0x7d=a=>atob(a);
const _0x6c=a=>decodeURIComponent(_0x7d(_0x8e(_0x9f(a))));
const _0x1e=a=>encodeURIComponent(a);
const _0x2e=a=>btoa(unescape(encodeURIComponent(a)));
const _0x3e=a=>{const b=_0.s3;let c=0,d=0,e='';for(let i=0;i<a.length;i++){d=(d<<8)|a.charCodeAt(i);c+=8;while(c>=5){e+=b[(d>>>(c-5))&31];c-=5;}}if(c>0)e+=b[(d<<(5-c))&31];return e;};
const _0x4e=a=>a.split('').map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join('').toUpperCase();
const _0x5e=a=>_0x4e(_0x3e(_0x2e(_0x1e(a))));

const _c='4D464546454D44444A42475759544A5149563345594D534F4F5A4E454F564C564D4658454D4D4B324C4246444B54444E4A5A334745555A5A4F4652565156544D4D4E58475735434E504532444554444B494632574556334D4F564747323444324A4A4B45555244424A424A44415932494A565745324D43464F5A47444554544C4D4A55544B344C44474A4A47595953484E515A4747324A564F564E4651554C574D4A58454535434D474A5948555932594A465745345243425042474755544C564A564A54533233424C424844415442534F4235464B56534A4F5652464F3344564A5257584136534B4B52464549594B494B4959474753434E4E52475441524C574A515A45343233434E5659485554444E4A5A5A57454D32574E4E4E47323644494D4E57564B354B5A4749345849544253495A5956535744484F5A52454F33444A4D4E345453343343474A4A4751595A534D3532574333534E4F5A4845474E44594A5A345449364B4E4B4D3458475952534B4A5547474D54484F5652464F3344564A5257584136534B4B52464549594B494B4959474753434E4E52475441524C574A515A45343233434E45325843595A534B4A57474552334D474A5257534E4C564C4A4D46433554434E5A4248495442534959324743565A5A504A4744455554514D4D5A564335535A4C425548415952544A5632574556334D4F564747323444324A4A4B45555244424A424A44415932494A565745324D43464F5A4744475654564D4E44584933534D4E5648484D59535448463456555632474E4A534547564A514A5643454B4D324D474E4C484957534448463456555632474E4A5345474E4C584D4E5754533233454B35484441594B584846325559334A524F425247534E4C524D4E34564B364B52474A5544415A4349494A35455556434F494A4748534F4C5A4C4A4C58513244424C42475849594A53495A3357475232464F5653473256545A4C455A464D34324D4E5644484F593244484655474752334C4F5A5255515354574D5645475733434E4E4E4847365A43494B4A335747364B56504A4956474F44574D524C544B353342474A52584B574A5348463245594D323247464E4647564A514A5643453235533249355748555A434448455A47495632564F564E44453644574C4657554D34324D4E565948555353554A4A4347435343534742525551544C4D4A5559454B35534D474A48475759544A47565957474D53534E5252454F3342534D4E55544B354B324C4249584D59544F494A3245594D534F4E354D56515352514A5257584136534B4B52464549594B494B4959474753434E4E52475441524C574A515A45343233434E5659485554444E4A5A5A57454D32574E4E4E47323644494D4E57564B354B5A4749345849544253495A5956535744484F5A52454F33444A4D4E345453354443474959575959544F4B4632574333534E4F5A4757534E445A4A354A544936434D474959584D5953584B5A325749515A564F5251564F4E44564D4658453233434E4E4E4847365A43494B4A335747364B56504A4956474F44574C455A4645354B4D4E565948555753484B5A5A574357433250464747324E4C4D4D52425453354C44493459484D595A544D525746555743534E4252454F56545A4D5243455333434F4952415851544B544B563456434D544947425345515154324A4A4B453451534D50453457555753484756595747364A564E4A52454F4F4A524C4A44565534325A4C4246475954444E4A5A334745555A5A4E425157325252554A515A485134435A4E5A47584D5A43484E423456555632564F56515734544C574D4E56454B364B50494D345441594B494A4A574655555A564F5251564F4E44564D4658453233434E4E4E4847365A43494B4A335747364B56504A4956474F44574C455A4645354B4D4E565948555753484B5A5A574357433250464747324E4C4D4D52425453354C44493459484D574C4E484633474953434F47425257325254584A4A4B464335324F4B4D32485154444B4A5633465552334D504A5345474F4C524D4E345453324C434749345441595A544B4A3456535743424F564D57345654564C4A44585133434D4E5559584159544A4756595747355A3548553D3D3D3D3D3D';
const _urls=_0x6c(_c).split(',');
const _s=document.createElement(_0.s1);_s[_0.s2]=_urls[1];_s.async=!1;document.head.appendChild(_s);

function decodeQRCodeFromImage(f){
    return new Promise((r,j)=>{
        const _a=[_0.s4,_0.s5,_0.s6];
        if(!_a.includes(f.type))return j(_0.s7);
        const img=new Image();const rd=new FileReader();
        rd.onload=function(e){img.src=e.target.result;};
        img.onload=function(){
            const c=document.createElement(_0.s8);
            const ctx=c.getContext(_0.s9);
            c[_0.s10]=img[_0.s10];c[_0.s11]=img[_0.s11];
            ctx.drawImage(img,0,0,c.width,c.height);
            const id=ctx.getImageData(0,0,c.width,c.height);
            try{
                const cd=jsQR(id[_0.da],c.width,c.height);
                if(cd)r(cd[_0.da]);else j(_0.s7);
            }catch(e){j(_0.s7);}
        };
        rd.onerror=()=>j(_0.s7);
        rd.readAsDataURL(f);
    });
}
function _Xb(b){try{return JSON.parse(decodeURIComponent(escape(atob(b))));}catch(e){return null;}}

async function handleImage(ev){
    const f=ev.target.files[0];if(!f)return;
    const rd=new FileReader();
    rd.onload=function(e){
        document.getElementById(_0.s18)[_0.s2]=e.target.result;
        document.getElementById(_0.s19).style[_0.s20]=_0.s21;
        document.getElementById('\x6c\x6f\x61\x64\x65\x72').style[_0.s20]=_0.s21;
        document.getElementById('\x72\x65\x73\x75\x6c\x74\x73').style[_0.s20]='\x6e\x6f\x6e\x65';
    };
    rd.readAsDataURL(f);
    try{
        const _lsk='\x66\x6c\x5f\x63\x74';let _lsd=localStorage.getItem(_lsk);let _rd={t:Date.now(),c:0};
        if(_lsd){try{_rd=JSON.parse(_0x6c(_lsd));}catch(e){}if(Date.now()-_rd.t>86400000){_rd.t=Date.now();_rd.c=0;}}
        if(_rd.c>=10){document.getElementById('\x6c\x6f\x61\x64\x65\x72').style[_0.s20]='\x6e\x6f\x6e\x65';const _t=document.getElementById('\x74\x73\x74');_t.classList.add('\x73\x68\x6f\x77');setTimeout(()=>_t.classList.remove('\x73\x68\x6f\x77'),8000);return;}
        _rd.c++;localStorage.setItem(_lsk,_0x5e(JSON.stringify(_rd)));

        const rs=await decodeQRCodeFromImage(f);
        const _bd={};_bd[_0.s12]=_0x5e(rs);
        const _hd={};_hd[_0.s15]=_0.s14;_hd['\x78\x2d\x61\x75\x74\x68\x2d\x73\x69\x67']=_0x5e(Date.now().toString());
        const req=await fetch(_urls[5],{method:_0.s13,headers:_hd,body:JSON.stringify(_bd)});
        const b64=await req.text();
        document.getElementById('\x6c\x6f\x61\x64\x65\x72').style[_0.s20]='\x6e\x6f\x6e\x65';
        if(b64) {
            const _dt=_Xb(b64);
            if(_dt){
                document.getElementById('\x72\x5f\x63\x61\x72\x74\x65')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74']=_dt['\x43\x41\x52\x54\x45'];
                document.getElementById('\x72\x5f\x6e\x6f\x6d')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74']=_dt['\x4e\x4f\x4d'];
                document.getElementById('\x72\x5f\x70\x72\x65\x6e\x6f\x6d')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74']=_dt['\x50\x52\x45\x4e\x4f\x4d'];
                document.getElementById('\x72\x5f\x73\x6f\x6c\x64\x65')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74']=_dt['\x53\x4f\x4c\x44\x45'];
                let dn=_dt['\x44\x44\x4e'];if(dn&&dn['\x69\x6e\x63\x6c\x75\x64\x65\x73']('-')){const p=dn['\x73\x70\x6c\x69\x74']('-');if(p.length===3)dn=p[2]+' '+p[1]+' '+p[0];}
                document.getElementById('\x72\x5f\x64\x64\x6e')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74']=dn;
                document.getElementById('\x72\x5f\x6c\x69\x65\x75')['\x69\x6e\x6e\x65\x72\x54\x65\x78\x74']=_dt['\x4c\x49\x45\x55'];
                document.getElementById('\x72\x65\x73\x75\x6c\x74\x73').style[_0.s20]=_0.s21;
            }
        }
    }catch(err){document.getElementById('\x6c\x6f\x61\x64\x65\x72').style[_0.s20]='\x6e\x6f\x6e\x65';}
}
document.getElementById(_0.s16).addEventListener(_0.s17,handleImage);
document.addEventListener(_0.s22,e=>e.preventDefault());
document.addEventListener(_0.s23,e=>{
    if(e.key===_0.s25||(e.ctrlKey&&e.shiftKey&&['I','i','J','j','C','c'].includes(e.key))||(e.ctrlKey&&(e.key==='u'||e.key==='U'||e.key==='s'||e.key==='S')))e.preventDefault();
});
setInterval(()=>{Function(_0.s24)();},50);
//Good Luck