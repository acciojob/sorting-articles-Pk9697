//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsUl=document.getElementById('bands')

const listItems=bands.sort((a,b)=>{
	a=a.toLowerCase()
	b=b.toLowerCase()
	const firstWordA=a.split(' ')[0]
	const remWordA=a.split(' ').slice(1).join(' ');
	const firstWordB=b.split(' ')[0]
	const remWordB=b.split(' ').slice(1).join(' ');


	if(firstWordA==='a' || firstWordA==='an' || firstWordA==='the'){
		a=remWordA;
	}
	if(firstWordB==='a' || firstWordB==='an' || firstWordB==='the'){
		b=remWordB;
	}	

	return a<b?-1:1;
}).map((item)=>`<li>${item}</li>`).join(' ')

console.log(listItems)

bandsUl.innerHTML=`
	<ul>
		${listItems}
	</ul>
`