import{a as s,b as e,e as t,o as a,f as n,h as r}from"./entry.7c437640.mjs";const l={head(){return{title:"Mon compte"}},data(){return{userEmail:null,userPassword:null,id:this.userId}},methods:{profilUser(){console.log("ici"),e.post("http://localhost:3000/api/auth/allPosts",{email:this.userEmail,password:this.userPassword}).then(o=>(console.log(o),t("/mon-compte"))).catch(o=>{console.log(o)})}}},c=r("h1",null,"Je suis mon compte",-1),i=[c];function u(o,p,d,h,m,_){return a(),n("div",null,i)}const g=s(l,[["render",u]]);export{g as default};
