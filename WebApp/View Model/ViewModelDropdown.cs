using Microsoft.AspNetCore.Mvc.Rendering;

namespace Api.Models
{
	public class ViewModelDropdown
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int DivisionId { get; set; }
		public List<SelectListItem> Divisions { get; set; }
	}
}
