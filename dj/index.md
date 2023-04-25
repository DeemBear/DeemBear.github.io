---
layout: page
title: 电台
---
<link rel="stylesheet" href="player.css" />
<div id="wrapper">
	<div id="player">

		<div class="header">
			<div class="play off"></div>
			<div class="forward"></div>

			<div class="icon repeat" data-state="off" title="切换循环模式"></div>
			<div class="icon shuffle" data-state="off" title="切换随机模式"></div>
			<div class="icon display" data-state="off" title="切换歌词显示"></div>

			<div class="icon volume" data-state="high" title="静音"></div>
			<div class="volume-bar">
				<div class="volume-knob"></div>
			</div>

			<div class="elapsed">--:--</div>
			<div class="total">--:--</div>
			<div class="progress-bar">
				<div class="progress-knob"></div>
			</div>
		</div>

		<div class="list">
		</div>

		<div class="lyrics">
		</div>

		<div class="footer">
			<span>音乐播放器 &copy; <a href="/">DeemBear</a></span>
		</div>

	</div>
</div>

<script src="list.js"></script>
<script src="../front.js/front.min.js"></script>
<script src="player.js"></script>

<div style="position:fixed;left:158px;top:35px">
	<h3 style="font-weight:bold;font-size:14px;margin-left:5px">TODO</h3>
	<ul style="list-style:disc;padding-left:10px;margin-left:10px">
		<li>播放列表双击切换</li>
		<li>播放进度拖拽</li>
		<li>随机播放</li>
		<li>同步歌词</li>
	</ul>
</div>