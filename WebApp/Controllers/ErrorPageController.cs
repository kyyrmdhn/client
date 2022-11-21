using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	public class ErrorPageController : Controller
	{
		public IActionResult UnAunAthorized()
		{
			return View();
		}
		public IActionResult Forbidden()
		{
			return View();
		}
	}
}
