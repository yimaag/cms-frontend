import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {LabelValue} from 'src/app/constants/general-constants';
import {Observable} from 'rxjs';

declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class Utility {
  randomSearch: any;
  status!: string;
  processComment!: string;
  startTime!: number;
  endTime!: number;
  tempFiles!: any[];
  result!: any[];
  itemCount!: LabelValue;
  regSub = new RegExp(/\.(ttml|vtt|srt|pac|rar|zip)$/i);
  videoReg = new RegExp(/\.(mp4|avi|vcd|svcd|mpg|asf|wmv|mpeg|mov|dat|flv|mkv|mxf|mov|m2t|ts|m2ts|mpg2|mpeg2)$/i);
  audioReg = new RegExp(/\.(wav|mp3|m4a|flac|wma|aac|)$/i);
  meRegex = new RegExp(/\.(wav|mp3|m4a|flac|wma|aac|)$/i);
  trailerRegex = new RegExp(/\.(vtt|mxf|ttml)$/i);

  constructor(private location: Location) {}

  openModal(modalId: string): void {
    if (modalId !== '' && modalId !== null && modalId !== undefined) {
      $(`#${modalId}`).modal('show');
    }
  }

  /**close modal from static */
  closeModal(modalId: string): void {
    if (modalId !== '' && modalId !== null && modalId !== undefined) {
      $(`#${modalId}`).modal('hide');
      // $('.modal-backdrop').remove();
    }
  }

  closeContractModal(modalId: string): void {
    if (modalId !== '' && modalId !== null && modalId !== undefined) {
      $(`#${modalId}`).modal('hide');
      // $('.modal-backdrop').remove();
      this.location.back();
    }
  }

  closeModalInline(modalId: string): void {
    if (modalId !== '' && modalId !== null && modalId !== undefined) {
      $(`#${modalId}`).modal('hide');
      // $('.modal-backdrop').remove();
      this.location.back();
    }
  }
  closeModalInMethod(modalId: string): void {
    if (modalId !== '' && modalId !== null && modalId !== undefined) {
      $(`#${modalId}`).modal('hide');
      // $('.modal-backdrop').remove();
      this.location.back();
    }
  }

  /** Close Modal on any click   */
  closeModalOnAnyWhere(modalId: string): void {
    if (modalId !== '' && modalId !== null && modalId !== undefined) {
      $(`#${modalId}`).on('hidden.bs.modal', () => {
        this.location.back();
        $('.modal-backdrop').remove();
      });
    }
  }

  //* Search Object for back-end object *//
  searchObject(searchObjectArray?: any, event?: any): any {
    this.randomSearch = [];
    for (let i = 0; i < searchObjectArray.length; i++) {
      let currentSearch = searchObjectArray[i];
      if (currentSearch.name) {
        if (currentSearch.name.toUpperCase().trim().indexOf(event.query.toUpperCase().trim()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else if (currentSearch.title) {
        if (currentSearch.title.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else if (currentSearch.fileName) {
        if (currentSearch.fileName.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else if (currentSearch.label) {
        if (currentSearch.label.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else if (currentSearch.username) {
        if (currentSearch.username.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else if (currentSearch.programTitle) {
        if (currentSearch.programTitle.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else if (currentSearch.length) {
        if (currentSearch.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
          this.randomSearch.push(currentSearch);
        }
      } else {
        this.randomSearch.push(currentSearch);
      }
      i;
    }
  }
  /** search */
  search(searchArray: any, event: any): void {
    this.randomSearch = [];
    for (let i = 0; i < searchArray.length; i++) {
      let currentSearch = searchArray[i];
      //currentSearch.toLowerCase().indexOf(event.query.toLowerCase()) == 0 ? this.result.push(currentSearch) : null;
      if (currentSearch.toUpperCase().indexOf(event.query.toUpperCase()) > -1) {
        this.randomSearch.push(currentSearch);
      }
      i;
    }
  }
  remove(array: any[], item: any): any[] {
    let index: number = array.findIndex((key) => key === item);
    index != -1 ? array.splice(index, 1) : null;

    return array;
  }

  setDraggable(): void {
    $('body')
      .on('mousedown', '.modal-dialog',  () => {
        $(this)
          .addClass('draggable')
          .parents()
          .on('mousemove',  (e: { pageY: number; pageX: number; preventDefault: () => void; }) => {
            $('.draggable')
              .offset({
                top: e.pageY - $('.draggable').outerHeight() / 2,
                left: e.pageX - $('.draggable').outerWidth() / 2,
              })
              .on('mouseup',  () => {
                $(this).removeClass('draggable');
              });
            e.preventDefault();
          });
      })
      .on('mouseup', function () {
        $('.draggable').removeClass('draggable');
      });
  }

  setTime(programTime?: number): void {
    $('#slider-range').slider({
      min: 0,
      max: 1440,
      step: 1,
      values: [programTime],
      slide: function (e: any, ui: { values: number[]; }) {
        var hours = Math.floor(ui.values[0] / 60);
        var minutes = ui.values[0] - hours * 60;

        if (hours < 12) {
          hours = parseInt('0') + hours;
        }

        $('.slider-time').html(hours + ':' + minutes);
      },
    });
  }

  formatDateTime(date: Date): string {
    let d = new Date(date),
      hours = '' + d.getHours(),
      minutes = '' + d.getMinutes();

    if (hours.length < 10) hours = '0' + hours;
    if (minutes.length < 10) minutes = '0' + minutes;

    return [hours, minutes].join(':');
  }

  formatTime(time: any): string {
    console.table({time});
    let h: any, m: any, s: any;
    h = time.hour;
    m = time.minute;
    if (h < 10) h = '0' + time.hour;
    if (m < 10) m = '0' + time.minute;
    // if (time.second < 10) s = '0' + time.second;
    return [h, m].join(':');
  }

  persistTurkishCharacters(value: string): string {
    if (value.includes('%C4%B1')) {
      value.replace('%C4%B1', 'ı');
    }
    return value;
  }

  parseStringList(stringList: string): string[] {
    let list: string[] = stringList.split(',');
    return list.filter((str) => str.replace(/[\[\]']+/g, ''));
  }
  getValue(obj: Observable<any>) {
    let value: any;
    if (obj != null || obj != undefined) {
      obj.subscribe((v) => (value = v));
    }
    return value;
  }
}
