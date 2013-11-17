$(document).ready(function(){
	$('#homearrow').click(
		function() {
			window.location.href='index.php';
		}
	);
	$('#box1').click(
		function() {
			window.location.href='generators.html';
		}
	);
	$('#box2').click(
		function() {
			window.location.href='pools.html';
		}
	);
	$('#box3').click(
		function() {
			window.location.href='lighting.html';
		}
	);
	$('#box4').click(
		function() {
			window.location.href='services.html';
		}
	);
	$('#box5').click(
		function() {
			var win=window.open('https://secure2.mhelpdesk.com/Modules/TicketForm/Public_Form.aspx?enc=V1F7xhDL+ef8fzHu24wQxfq5OZNACE1jsGh5zzmfiX81p+Jd5OPBTwBFrQ7ZfAkt', '_blank');
  			win.focus();
		}
	);
	$('#box1').hover(
		function() {
			$('#box1').css({height:'135px',width:'330px', left:'435px'});
			$('#box1title').css({fontSize:'16px'});
			$('#box1cont').css({fontSize:'12px'});
		},
		function() {
			$('#box1').css({height:'120px',width:'310px', left:'445px'});
			$('#box1title').css({fontSize:'14px'});
			$('#box1cont').css({fontSize:'10px'});
		}
	);
	$('#box2').hover(
		function() {
			$('#box2').css({height:'140px',width:'330px', left:'135px'});
			$('#box2title').css({fontSize:'16px'});
			$('#box2cont').css({fontSize:'12px'});
		},
		function() {
			$('#box2').css({height:'120px',width:'310px', left:'145px'});
			$('#box2title').css({fontSize:'14px'});
			$('#box2cont').css({fontSize:'10px'});
		}
	);
	$('#box3').hover(
		function() {
			$('#box3').css({height:'140px',width:'330px', left:'735px'});
			$('#box3title').css({fontSize:'16px'});
			$('#box3cont').css({fontSize:'12px'});
		},
		function() {
			$('#box3').css({height:'120px',width:'310px', left:'745px'});
			$('#box3title').css({fontSize:'14px'});
			$('#box3cont').css({fontSize:'10px'});
		}
	);
	$('#box4').hover(
		function() {
			$('#box4').css({height:'140px',width:'330px'});
			$('#box4title').css({fontSize:'16px'});
			$('#box4cont').css({fontSize:'12px'});
		},
		function() {
			$('#box4').css({height:'120px',width:'310px'});
			$('#box4title').css({fontSize:'14px'});
			$('#box4cont').css({fontSize:'10px'});
		}
	);
	$('#box5').hover(
		function() {
			$('#box5').css({height:'140px',width:'330px'});
			$('#box5title').css({fontSize:'16px'});
			$('#box5cont').css({fontSize:'12px'});
		},
		function() {
			$('#box5').css({height:'120px',width:'310px', top:'190px'});
			$('#box5title').css({fontSize:'14px'});
			$('#box5cont').css({fontSize:'10px'});
		}
	);
});