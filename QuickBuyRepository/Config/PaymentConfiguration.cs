using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuyDomain.Entity;
using QuickBuyDomain.ValueObject;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuyRepository.Config
{
    public class PaymentConfiguration : IEntityTypeConfiguration<Payment>
    {
        public void Configure(EntityTypeBuilder<Payment> builder)
        {     
        }
    }
}
