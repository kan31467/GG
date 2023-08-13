var rule = {
	title:'��Ӱ��[��]',
	host:'http://jiyingw.net',
	homeUrl:'/',
	url: '/fyclass/page/fypage?',
	filter_url:'{{fl.class}}',
	filter:{
		"movie":[{"key":"class","name":"��ǩ","value":[{"n":"ȫ��","v":"movie"},{"n":"4k","v":"tag/4k"}, {"n":"����","v":"tag/����"}, {"n":"����","v":"tag/chuanji"}, {"n":"��ͯ","v":"tag/��ͯ"}, {"n":"ð��","v":"tag/adventure"}, {"n":"����","v":"tag/����"}, {"n":"���ô�","v":"tag/���ô�"}, {"n":"����","v":"tag/dongzuo"}, {"n":"����","v":"tag/����"}, {"n":"��־","v":"tag/��־"}, {"n":"��ʷ","v":"tag/history"}, {"n":"��װ","v":"tag/��װ"}, {"n":"ͬ��","v":"tag/gay"}, {"n":"ϲ��","v":"tag/comedy"}, {"n":"����","v":"tag/����"}, {"n":"���","v":"tag/qihuan"}, {"n":"Ů��","v":"tag/Ů��"}, {"n":"��ͥ","v":"tag/family"}, {"n":"�¹�","v":"tag/�¹�"}, {"n":"�ֲ�","v":"tag/kongbu"}, {"n":"����","v":"tag/xuanyi"}, {"n":"���","v":"tag/jingsong"}, {"n":"�����","v":"tag/�����"}, {"n":"ս��","v":"tag/zhanzheng"}, {"n":"ս��","v":"tag/ս��"}, {"n":"��Ц","v":"tag/��Ц"}, {"n":"����","v":"tag/����"}, {"n":"����","v":"tag/����"}, {"n":"�ճ�","v":"tag/�ճ�"}, {"n":"�ձ�","v":"tag/�ձ�"}, {"n":"����","v":"tag/����"}, {"n":"У԰","v":"tag/У԰"}, {"n":"����","v":"tag/wuxia"}, {"n":"����","v":"tag/����"}, {"n":"��Ϸ","v":"tag/��Ϸ"}, {"n":"����","v":"tag/zainan"}, {"n":"����","v":"tag/����"}, {"n":"����","v":"tag/crime"}, {"n":"������","v":"tag/zhenrenxiu"}, {"n":"��Ƭ","v":"tag/duanpian"}, {"n":"�ƻ�","v":"tag/kehuan"}, {"n":"��¼","v":"tag/jilu"}, {"n":"����","v":"tag/meiju"}, {"n":"��̨","v":"tag/stage"}, {"n":"����","v":"tag/xibu"}, {"n":"�˶�","v":"tag/yundong"}, {"n":"����","v":"tag/����"}, {"n":"����","v":"tag/����"}, {"n":"����","v":"tag/yinyue"}, {"n":"�����Ӱ","v":"tag/�����Ӱ"}]}]
	},
	searchUrl: '/?s=**',
	searchable:2,
	quickSearch:1,
	filterable:1,
	headers:{
		'User-Agent': 'PC_UA'
	},
	timeout:5000,
	class_name:'��Ӱ&���Ӿ�&����&����&Ӱ��',
	class_url:'movie&tv&cartoon&movie/variety&yingping',
	play_parse:false,
	lazy:'',
	limit:6,
	�Ƽ�:'ul#post_container li;a&&title;img&&src;.article entry_post&&Text;a&&href',
        һ��:'ul#post_container li;a&&title;img&&src;.article entry_post&&Text;a&&href',
	����:{
		title:"h1&&Text",
		img:"#post_content img&&src",
		desc:"#post_content&&Text",
		content:".movie-introduce&&Text",
		tabs:`js:
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			TABS=[]
			var d = pdfa(html, '#down&&a');
			var index=0;
			d.forEach(function(it) {
				let burl = pdfh(it, 'a&&href');
				log("burl >>>>>>" + burl);
				if (burl.startsWith("magnet")){
					let result = 'magnet' + index;
					index = index + 1;
					TABS.push(result);
				}
			});
			log('TABS >>>>>>>>>>>>>>>>>>' + TABS);
		`,
		lists:`js:
			log(TABS);
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			LISTS = [];
			var d = pdfa(html, '#down&&a');
			TABS.forEach(function(tab) {
				log('tab >>>>>>>>' + tab);
				if (/^magnet/.test(tab)) {
					let targetindex = parseInt(tab.substring(6));
					let index = 0;
					d.forEach(function(it){
						let burl = pdfh(it, 'a&&href');
						if (burl.startsWith("magnet")){
							if (index == targetindex){
								let title = pdfh(it, 'a&&Text');
								log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
								log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
								let loopresult = title + '$' + burl;
								LISTS.push([loopresult]);
							}
							index = index + 1;
						}
					});
				}
			});
			`,

	},
	����:'#post_container li.post;a.zoom&&title;a.zoom img&&src;.info&&Text;a&&href;.article&&Text',
}
