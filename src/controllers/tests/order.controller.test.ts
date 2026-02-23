import { test, mock } from "node:test";
import assert from "node:assert";
import orderController from "../order.controller.js";
import { PrismaClient } from "@prisma/client";

test("Test createOrder", async () => {
    const fakeModel = {
        create: mock.fn(async () => ({
            id: 1,
            status: "pending",
            total: 1590,
            user: { id: 2 },
            items: []
        })),
    } as unknown as PrismaClient["order"];

    orderController.model = fakeModel;

    const res: any = {};
    res.status = mock.fn(() => res);
    res.json = mock.fn();

    const req = {
        body: {
            status: "pending",
            total: 1590,
            userId: 2,
            items: [
                {
                    productId: 1,
                    quantity: 2,
                    unitPrice: 795
                }
            ]
        },
    };

    const next = mock.fn();

    await orderController.createOrder(req as any, res as any, next as any);

    // Pas d'erreur Zod
    assert.strictEqual(next.mock.calls.length, 0);

    // Réponse est bien envoyée
    assert.strictEqual(res.json.mock.calls.length, 1);
});