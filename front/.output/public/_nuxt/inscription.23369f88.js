import{a as i,b as a,o as u,f as m,h as s,w as d,v as l}from"./entry.98e82237.js";const c={head(){return{title:"Inscription"}},data(){return{userEmail:this.userEmail,userPassword:this.userPassword,userPseudo:this.userPseudo}},methods:{registerUser(){console.log("ici"),a.post("http://localhost:3000/api/auth/signup",{email:this.userEmail,password:this.userPassword,firstname:this.userPseudo,isAdmin:!0}).then(t=>{console.log(t)}).catch(t=>{console.log(t)})}}},p={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},f=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},null,-1),g={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},x={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},h=s("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Adresse Mail ",-1),w={class:"mt-1"},b=s("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Mot de passe ",-1),y={class:"mt-1"},_=s("label",{for:"pseudo",class:"block text-sm font-medium text-gray-700"}," Pseudo ",-1),v={class:"mt-1"};function P(t,e,k,E,o,n){return u(),m("div",p,[f,s("div",g,[s("div",x,[s("div",null,[h,s("div",w,[d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.userEmail=r),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[l,o.userEmail]])])]),s("div",null,[b,s("div",y,[d(s("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.userPassword=r),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[l,o.userPassword]])])]),s("div",null,[_,s("div",v,[d(s("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>o.userPseudo=r),id:"pseudo",name:"pseudo",type:"pseudo",autocomplete:"current-password",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[l,o.userPseudo]])])]),s("div",null,[s("button",{onClick:e[3]||(e[3]=r=>n.registerUser()),class:"mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-500 bg-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"}," Inscription ")])])])])}const V=i(c,[["render",P]]);export{V as default};
