const themeBtn = document.querySelector('.theme-btn');
const main = document.querySelector('body');

if(localStorage.getItem('darkMode')===('dark')){
themeBtn.classList.add('theme-btn-active');
const isDark = main.classList.add('dark');
}else{
	themeBtn.classList.remove('theme-btn-active');
	const isDark = main.classList.remove('dark');
}
themeBtn.addEventListener("click",function(){
	themeBtn.classList.toggle('theme-btn-active');
	const isDark = main.classList.toggle('dark');

	if(isDark){
		localStorage.setItem('darkMode','dark');
	}else{
		localStorage.setItem('darkMode','light');
	}
})