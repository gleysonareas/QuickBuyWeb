using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuyDomain.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuyRepository.Config
{
    internal class ItemRequestConfiguration : IEntityTypeConfiguration<ItemRequest>
    {
        public void Configure(EntityTypeBuilder<ItemRequest> builder)
        {
        }
    }
}
