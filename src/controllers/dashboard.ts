import { PrismaClient } from "@prisma/client";
// import BaseController from "./base.controller.js";
// import { z } from "zod";

const prisma = new PrismaClient();


class DashboardController {

    getGlobalView = async (req: any, res: any, next: any) => { }

    getGlobalViewLocations = async (req: any, res: any, next: any) => {
        try {
            const [
                totalLocations,
                productsWithLocation,
                locationsWithoutProduct,
                productsWithoutLocation
            ] = await Promise.all([
                prisma.location.count(),
                prisma.product.count({
                    where: { productLocations: { some: {} } },
                }),
                prisma.location.count({
                    where: { productLocations: { none: {} } },
                }),
                prisma.product.count({
                    where: { productLocations: { none: {} } },
                }),
            ]);

            return res.status(200).json({
                total_locations: totalLocations,
                products_with_location: productsWithLocation,
                locations_without_product: locationsWithoutProduct,
                products_without_location: productsWithoutLocation,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erreur lors de la récupération des statistiques." });
        }
    };

    getGlobalViewProducts = async (req: any, res: any, next: any) => {
        try {
            const [
                totalProducts,
                lowStockProducts,
                outOfStockProducts,
                unavailableProducts,
                productsWithoutLocation,
            ] = await Promise.all([
                prisma.product.count(),
                prisma.product.count({
                    where: { stock: { lte: 30 } },
                }),
                prisma.product.count({
                    where: { stock: 0 },
                }),
                prisma.product.count({
                    where: { available: false },
                }),
                prisma.product.count({
                    where: { productLocations: { none: {} } },
                }),
            ]);

            return res.status(200).json({
                total_products: totalProducts,
                low_stock_products: lowStockProducts,
                out_of_stock_products: outOfStockProducts,
                unavailable_products: unavailableProducts,
                products_without_location: productsWithoutLocation,
            });
        } catch (error) {
            console.error("Erreur lors du calcul des statistiques produits :", error);
            return res.status(500).json({ error: "Erreur lors de la récupération des statistiques produits." });
        }
    }

    getGlobalViewUsers = async (req: any, res: any, next: any) => { }

    getGlobalViewOrders = async (req: any, res: any, next: any) => { }
}

export default new DashboardController();