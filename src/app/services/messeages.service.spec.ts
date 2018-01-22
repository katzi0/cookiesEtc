import {TestBed, inject} from '@angular/core/testing';
import {MesseagesService} from './messeages.service';


fdescribe('MesseagesService add function', () => {

  class MessageServiceStub {
    messages = [];
    add(msg: string) {
      this.messages.push(msg);
    }
  }
  let service: MessageServiceStub;
  const mockMsg = 'mock msg to push into messages arr';
  // let messages = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: MesseagesService, useClass: MessageServiceStub}]
    });
  });

  it('should check if message pushed into messages array', () => {
    service = new MessageServiceStub();
    service.add(mockMsg);
    expect(service.messages).toContain('mock msg to push into messages arr');
  });
});
