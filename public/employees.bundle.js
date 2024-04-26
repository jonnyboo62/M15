(()=>{"use strict";class e extends React.Component{constructor(){super(),this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){e.preventDefault();const t=document.forms.employeeAdd,l={name:t.name.value,ext:t.ext.value,email:t.email.value,title:t.title.value,dateHired:new Date,isEmployed:!0};this.props.createEmployee(l),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}render(){return React.createElement("form",{name:"employeeAdd",onSubmit:this.handleSubmit},"Name: ",React.createElement("input",{type:"text",name:"name"}),React.createElement("br",null),"Extension: ",React.createElement("input",{type:"text",name:"ext"}),React.createElement("br",null),"Email: ",React.createElement("input",{type:"text",name:"email"}),React.createElement("br",null),"Title: ",React.createElement("input",{type:"text",name:"title"}),React.createElement("br",null),React.createElement("button",null,"Add"))}}class t extends React.Component{render(){return React.createElement("div",null,"This is a placeholder for the Issue Filter.")}}const l=[{id:1,name:"Jonny Martinez",ext:1125,email:"jonny@class.com",title:"Student Boi",dateHired:new Date("2020-08-15"),isEmployed:!1},{id:2,name:"Mae Martinez",ext:1126,email:"mae@class.com",title:"Student Gorl",dateHired:new Date("2022-08-13"),isEmployed:!0}];function a(e){const t=e.employees.map((e=>React.createElement(n,{key:e.id,employee:e})));return React.createElement("table",{className:"bordered-table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"ID"),React.createElement("th",null,"Name"),React.createElement("th",null,"Extension"),React.createElement("th",null,"Email"),React.createElement("th",null,"Title"),React.createElement("th",null,"Date Hired"),React.createElement("th",null,"Currently Employed"))),React.createElement("tbody",null,t))}function n(e){const t=e.employee;return React.createElement("tr",null,React.createElement("td",null,t.id),React.createElement("td",null,t.name),React.createElement("td",null,t.ext),React.createElement("td",null,t.email),React.createElement("td",null,t.title),React.createElement("td",null,t.dateHired.toDateString()),React.createElement("td",null,t.isEmployed?"Yes":"No"))}class c extends React.Component{constructor(){super(),this.state={employees:[]},this.createEmployee=this.createEmployee.bind(this)}componentDidMount(){this.loadData()}loadData(){setTimeout((()=>{this.setState({employees:l})}),0)}createEmployee(e){e.id=this.state.employees.length+1;const t=this.state.employees.slice();t.push(e),this.setState({employees:t})}render(){return React.createElement(React.Fragment,null,React.createElement("h1",null,"Employee Management Application"),React.createElement(t,null),React.createElement("hr",null),React.createElement(a,{employees:this.state.employees}),React.createElement("hr",null),React.createElement(e,{createEmployee:this.createEmployee}))}}ReactDOM.render(React.createElement(React.StrictMode,null,React.createElement(c,null)),document.getElementById("content"))})();