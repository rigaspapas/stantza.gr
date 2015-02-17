<div id="samples" class="section" ng-controller="sampleCtrl as samplePage">
	<ul class="samplesul">
		<li ng-repeat="category in samplePage.samples">
			<h3>{{category.name}}</h3>
			<div class="samplecontainer">
				<img height="100" width="120" alt="sample" ng-repeat="product in category.samples" ng-src="{{'samples/' + product + '-thumb.png'}}" />
			</div>
		</li>
	</ul>
</div>