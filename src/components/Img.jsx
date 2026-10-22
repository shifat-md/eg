import {useState} from 'react'
// Shows /images/<file>; falls back to a tidy placeholder until the file exists. Fixed aspect ratio prevents layout shift.
export default function Img({file,alt,ratio='4/3',eager=false,className='',fallback=null}){const [ok,setOk]=useState(true)
return <div style={{aspectRatio:ratio}} className={`img-box ${className}`}>
{ok?<img src={`/images/${file}`} alt={alt} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setOk(false)} className="img-box__img"/>:
(fallback||<div role="img" aria-label={alt} className="img-box__fallback">Image coming soon</div>)}</div>}
