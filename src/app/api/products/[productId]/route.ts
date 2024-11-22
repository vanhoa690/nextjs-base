import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: any) {
  try {
    const { productId } = params;

    if (!productId) {
      return new NextResponse("Product ID is required", { status: 400 });
    }

    const product = await prisma.product.delete({
      where: {
        id: Number(productId),
      },
    });

    return NextResponse.json(product);
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
