import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function auth() {
  return applyDecorators(UseGuards(AuthGuard()));
}
