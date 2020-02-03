<?php 

if(isset($_GET['data'])){
	$data = htmlspecialchars($_GET['data']);
	$curr_gmt = $_GET['currentGmt'];
	$arr = explode("\n",$data);
	$gmt = $_GET['gmt'];
	$str="";

	for($i=0;$i<sizeof($arr)-1;$i=$i+2) {
		$date = trim($arr[$i] . ' - ' . $arr[$i+1]);
		$dtime = DateTime::createFromFormat("d M,y - H:i",trim($date));
		$timestamp = $dtime->getTimestamp();

		if($curr_gmt<0)  $time = $timestamp + (-1*$curr_gmt) * 60 * 60;	
		else  $time = $timestamp - $curr_gmt * 60 * 60;		
		$time = $time + ($gmt * 60 * 60);
		
		$new_date = date("d M,y - H:i",$time);
		$str = $str . $new_date. "\n";
	}
	 echo $str;
}