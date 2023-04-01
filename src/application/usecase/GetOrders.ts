import OrderRepository from "../../OrderRepository";
import OrderRepositoryDatabase from "../../OrderRepositoryDatabase";
import Order from "../../domain/entity/Order";

export default class GetOrders {

	constructor (
		readonly orderRepository: OrderRepository = new OrderRepositoryDatabase()
	) {
	}

	async execute (): Promise<Order[]> {
		const orders = await this.orderRepository.getAll();
		const output: [] = orders;
		return output;
	}
}
