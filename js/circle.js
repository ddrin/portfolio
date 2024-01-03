$(function () {
	var chart = $('.chart');
	var excuted = false;
	console.log(excuted);

	$(window).scroll(function () {
		const top = $(this).scrollTop();
		const chartofs = chart.offset().top - 500;

		if (top > chartofs) {
			// excuted가 flase일때만 작동(스크롤 할 때마다 작동하는 거 방지)
			if (excuted == false) {
				// each는 chart들 마다 할 일
				chart.each(function () {
					// 각각의 chart들은 this로 받아올 수 있다
					var item = $(this);
					// 숫자가 바뀔 title은 item(각각의 chart) 안에 h2
					var title = item.find('h2 span');
					// attr은 타이틀이 가지고 있는 속성 - 그중에 data-num을 불러서 targetNum에 저장
					var targetNum = title.attr('data-num');
					var circle = item.find('circle');

					$({ rate: 0 }).animate(
						{ rate: targetNum },
						{
							duration: 1500,

							// rate의 값이 0에서 targetNum으로 바뀌는 그때그때마다 - progress
							progress: function () {
								// 여기서 this는 이 animate자체를 의미
								var now = this.rate;
								var amount = 630 - 6.3 * now;
								// console.log(now);
								title.text(Math.floor(now));
								circle.css({ strokeDashoffset: amount });
							},
						},
					);
				});
				excuted = true;
				console.log(excuted);
			} else if (top > chartofs + 700) {
				excuted = false;
				console.log(excuted);
			}
		}
	});
});
