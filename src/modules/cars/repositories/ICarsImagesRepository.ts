import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
  create(car_id: string, image_name: string): Promise<CarImage>;
  findByIdCar(car_id: string): Promise<CarImage>;
  findByImageName(car_id: string, image_name: string): Promise<CarImage>;
  deleteCarImages(car_id: string): Promise<void>;
}

export { ICarsImagesRepository };
