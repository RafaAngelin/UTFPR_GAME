const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Geolocation,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Geolocation.Acts.WatchLocation,
		C3.Plugins.Geolocation.Cnds.OnUpdate,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Geolocation.Exps.Longitude,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Geolocation.Exps.Latitude,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{Sprite2: 0},
	{Geolocalização: 0},
	{LatInicial: 0},
	{LonInicial: 0},
	{escalaKm: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Geolocalização: class extends self.IInstance {}
}