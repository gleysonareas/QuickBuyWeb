using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuyRepository.Migrations
{
    public partial class PaymentFormAddData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Payment",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 1, "Forma de pagamento boleto", "Ticket" });

            migrationBuilder.InsertData(
                table: "Payment",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 2, "Forma de pagamento cartão de crédito", "CreditCard" });

            migrationBuilder.InsertData(
                table: "Payment",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 3, "Forma de pagamento depósito", "Deposit" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Payment",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Payment",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Payment",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
