import { Test, TestingModule } from '@nestjs/testing';
import { GamificationController } from './gamefication.controller';

describe('GamificationController', () => {
  let controller: GamificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamificationController],
    }).compile();

    controller = module.get<GamificationController>(GamificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all gamification data', () => {
      const result = controller.findAll();
      expect(result).toEqual({
        message: 'Get all gamification data',
        data: [],
      });
    });
  });

  describe('findOne', () => {
    it('should return gamification data for a specific ID', () => {
      const id = '123';
      const result = controller.findOne(id);
      expect(result).toEqual({
        message: `Get gamification data for ID: ${id}`,
        data: { id },
      });
    });
  });

  describe('create', () => {
    it('should create a new gamification entry', () => {
      const createDto = {
        name: 'Test Entry',
        points: 100,
      };
      const result = controller.create(createDto);
      expect(result).toEqual({
        message: 'Create new gamification entry',
        data: createDto,
      });
    });
  });

  describe('update', () => {
    it('should update a gamification entry', () => {
      const id = '123';
      const updateDto = {
        name: 'Updated Entry',
        points: 200,
      };
      const result = controller.update(id, updateDto);
      expect(result).toEqual({
        message: `Update gamification entry ${id}`,
        data: { id, ...updateDto },
      });
    });
  });

  describe('remove', () => {
    it('should delete a gamification entry', () => {
      const id = '123';
      const result = controller.remove(id);
      expect(result).toEqual({
        message: `Delete gamification entry ${id}`,
        data: { id },
      });
    });
  });
});
