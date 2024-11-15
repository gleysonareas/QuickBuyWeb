using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuyRepository.Migrations
{
    public partial class NewCollumProductNameFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NameFile",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NameFile",
                table: "Products");
        }
    }
}
