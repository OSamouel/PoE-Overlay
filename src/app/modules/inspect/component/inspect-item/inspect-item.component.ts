import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Item } from '@shared/module/poe/item';
import { WikiMapService } from '@shared/module/poe/wiki';
import { InspectFeatureSettings } from '@modules/inspect/inspect-feature-settings';

@Component({
  selector: 'app-inspect-item',
  templateUrl: './inspect-item.component.html',
  styleUrls: ['./inspect-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectItemComponent implements OnInit {
  public properties = [];
  public maps: string[];

  @Input()
  public item: Item;

  @Input()
  public settings: InspectFeatureSettings;

  constructor(private readonly wikiMap: WikiMapService) { }

  public ngOnInit(): void {
    const { nameId, typeId } = this.item;
    this.maps = this.wikiMap.find(nameId, typeId);
  }
}
