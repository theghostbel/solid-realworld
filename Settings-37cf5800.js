import{u as e,c as t,i as s,a as i,b as r,t as o,d as a}from"./index.js";import{L as l}from"./ListErrors-bc54ae19.js";const d=o('<div class="settings-page"><div class="container page"><div class="row"><div class="col-md-6 offset-md-3 col-xs-12"><h1 class="text-xs-center">Your Settings</h1><form><fieldset><fieldset class="form-group"><input class="form-control" type="text" placeholder="URL of profile picture"></fieldset><fieldset class="form-group"><input class="form-control form-control-lg" type="text" placeholder="Your Name"></fieldset><fieldset class="form-group"><textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea></fieldset><fieldset class="form-group"><input class="form-control form-control-lg" type="text" placeholder="Email"></fieldset><fieldset class="form-group"><input class="form-control form-control-lg" type="password" placeholder="Password"></fieldset><button class="btn btn-lg btn-primary pull-xs-right" type="submit">Update Settings</button></fieldset></form><hr><button class="btn btn-outline-danger">Or click here to logout.</button></div></div></div></div>',35);a(["click"]);export default()=>{const[o,{logout:a,updateUser:n}]=e(),[v,c]=t({image:o.currentUser.image||"",username:o.currentUser.username,bio:o.currentUser.bio||"",email:o.currentUser.email,password:""}),u=e=>t=>c(e,t.target.value),g=e=>{e.preventDefault();const t=Object.assign({},v);t.password||delete t.password,t.image||delete t.image,c({updatingUser:!0}),n(t).then((()=>location.hash=`/@${t.username}`)).catch((e=>c({errors:e}))).finally((()=>c({updatingUser:!1})))};return(()=>{const e=d.cloneNode(!0),t=e.firstChild.firstChild.firstChild,o=t.firstChild.nextSibling,n=o.firstChild.firstChild,c=n.firstChild,f=n.nextSibling,p=f.firstChild,m=f.nextSibling,$=m.firstChild,b=m.nextSibling,h=b.firstChild,_=b.nextSibling,x=_.firstChild,U=_.nextSibling,C=o.nextSibling.nextSibling;return s(t,i(l,{get errors(){return v.errors}}),o),o.addEventListener("submit",g),c.addEventListener("change",u("image")),p.addEventListener("change",u("username")),$.addEventListener("change",u("bio")),h.addEventListener("change",u("email")),x.addEventListener("change",u("password")),C.$$click=()=>(a(),location.hash="/"),r((e=>{const t=v.image,s=v.updatingUser,i=v.username,r=v.updatingUser,o=v.bio,a=v.updatingUser,l=v.email,d=v.updatingUser,n=v.password,u=v.updatingUser,g=v.updatingUser;return t!==e._v$&&(c.value=e._v$=t),s!==e._v$2&&(c.disabled=e._v$2=s),i!==e._v$3&&(p.value=e._v$3=i),r!==e._v$4&&(p.disabled=e._v$4=r),o!==e._v$5&&($.value=e._v$5=o),a!==e._v$6&&($.disabled=e._v$6=a),l!==e._v$7&&(h.value=e._v$7=l),d!==e._v$8&&(h.disabled=e._v$8=d),n!==e._v$9&&(x.value=e._v$9=n),u!==e._v$10&&(x.disabled=e._v$10=u),g!==e._v$11&&(U.disabled=e._v$11=g),e}),{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0}),e})()};