(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Bl7J"),o=function(e){return n.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"inner"},n.a.createElement("h1",null,"Jerome Agustin"),n.a.createElement("h3",null,"A Software Engineer"),n.a.createElement("p",null,"Here to design and create solutions to improve lives."))),n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("intro")}},"Intro")),n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Work")),n.a.createElement("li",null,n.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"About")))))},l=(a("f3/d"),function(e){var t=e.article,a=e.articleTimeout,i=e.close;return n.a.createElement("article",{id:"intro",className:("intro"===t?"active":"")+" "+(a?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"Intro"),n.a.createElement("p",null,"Hello, my name is Jerome Agustin. I am software engineer working on developing a software solution to help organization and track how people are utilizing their time, money, and energy. This solution is to make a simplified solution. I want people to understand that their data is important and should be in their hands. Everything they do should be controlled by them and only them. If they want to share their data, they can, but they should also be rewarded for the action. I am by no means wanting my idea to be sold to a corporate company who wants to harvest their data and target individuals. I want individuals to be free from distractions also known as advertising. I want individuals to be in control of the direction their lives are going."," "),n.a.createElement("p",null,"By the way, check out my"," ",n.a.createElement("a",{href:"https://github.com/theingredients"},"efforts to the solution"),"."),i)}),s=a("RYzB"),c=a.n(s),u=function(e){var t=e.article,a=e.articleTimeout,i=e.close;return n.a.createElement("article",{id:"about",className:("about"===t?"active":"")+" "+(a?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"About"),n.a.createElement("span",{className:"image fit"},n.a.createElement("img",{src:c.a,alt:""})),n.a.createElement("p",null,"Born and raised in California. Computer Engineer by degree. Application Developer at PennyMac. Software Test Engineer/DevOps Engineer previously at Sonos. Proud owner of a husky. Founder of The Ingredients."),i)},m=a("Wbzz"),p=function(e){var t=e.article,a=e.articleTimeout,i=e.close;return n.a.createElement("article",{id:"work",className:("work"===t?"active":"")+" "+(a?"timeout":""),style:{display:"none"}},n.a.createElement("h2",{className:"major"},"Work"),n.a.createElement("h3",null,"Current"),n.a.createElement("p",null,"Application Developer at PennyMac"),n.a.createElement("h3",null,"Previous"),n.a.createElement("p",null,"DevOps Engineer at Sonos",n.a.createElement("br",null),"Software Development Engineer in Test at Sonos",n.a.createElement("br",null),"Software Test Engineer Intern at Sonos"),n.a.createElement("h2",{className:"major"},"Side Project"),n.a.createElement("p",null,"Flutter Mobile Application",n.a.createElement("br",null),"Django REST API with React Frontend",n.a.createElement("br",null),"Gatsby.js websites",n.a.createElement("br",null),n.a.createElement(m.Link,{to:"/tone"},"Tone")),i)};var d=function(e){var t,a;function i(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).state={name:"",email:"",message:""},t.handleInputChange=function(e){var a,i=e.target,n=i.value,r=i.name;t.setState(((a={})[r]=n,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onCloseArticle(),alert("Email Sent!")},t}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this,t=n.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return n.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},n.a.createElement(l,{article:this.props.article,articleTimeout:this.props.articleTimeout,close:t}),n.a.createElement(u,{article:this.props.article,articleTimeout:this.props.articleTimeout,close:t}),n.a.createElement(p,{article:this.props.article,articleTimeout:this.props.articleTimeout,close:t}))},i}(n.a.Component),h=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"The Ingredients LLC © 2019"))};function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(f(a)),a.handleCloseArticle=a.handleCloseArticle.bind(f(a)),a.setWrapperRef=a.setWrapperRef.bind(f(a)),a.handleClickOutside=a.handleClickOutside.bind(f(a)),a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=i.prototype;return l.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},l.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},l.setWrapperRef=function(e){this.wrapperRef=e},l.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},l.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},l.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},l.render=function(){return n.a.createElement(r.a,{location:this.props.location},n.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},n.a.createElement("div",{id:"wrapper"},n.a.createElement(o,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),n.a.createElement(d,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),n.a.createElement(h,{timeout:this.state.timeout})),n.a.createElement("div",{id:"bg"})))},i}(n.a.Component);t.default=E},RYzB:function(e,t,a){e.exports=a.p+"static/pic01-98bcde182a17f8c1e58cb2f5a14975bd.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-140c8b0f7865b75cffa8.js.map