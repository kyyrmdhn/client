using System.ComponentModel.DataAnnotations;
using Api.Base;

namespace Api.Models
{
	public class Division : BaseModel
	{
		[Key]
		public int Id { get; set; }
		[StringLength(50)]
		public string Name { get; set; }
	}
}
