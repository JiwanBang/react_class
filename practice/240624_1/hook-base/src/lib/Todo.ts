export interface Todo {
  getIsComplete(): boolean;
  getContent(): string;
  getPriority(): number;
  getCreatedAt(): string;
  getLimit(): string;
}

export class Todo implements Todo {
  private content: string;
  private isComplete: boolean;
  private priority: number;
  private createdAt: string;
  private limit: string;

  constructor(content: string, priority: number, limit: string) {
    this.content = content;
    this.isComplete = false;
    this.priority = priority;
    const date = new Date();
    this.createdAt = `${date.getFullYear}-${date.getMonth}-${date.getDate()}`;
    this.limit = limit;
  }

  getContent(): string {
    return this.content;
  }

  getIsComplete(): boolean {
    return this.isComplete;
  }

  getPriority(): number {
    return this.priority;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  getLimit(): string {
    return this.limit;
  }

  setComplete(): void {
    this.isComplete = true;
  }
}
