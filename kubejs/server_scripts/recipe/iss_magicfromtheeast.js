// 该脚本用于魔改 东方秘术 的配方
ServerEvents.recipes(event => {
    // 群青的铜钱 合成 东方秘术的铜钱
    event.remove({ id: 'iss_magicfromtheeast:copper_coins' })
    event.shaped(Item.of('iss_magicfromtheeast:copper_coins', 1), [
        ' AB',
        ' A ',
        'BA '
    ],
        {
            A: 'ultramarine:copper_cash_coin',
            B: 'iss_magicfromtheeast:red_string'
        })
    // 东方秘术的铜钱 合成 群青的铜钱
    event.shapeless(
        Item.of('ultramarine:copper_cash_coin', 3),
        [
            'iss_magicfromtheeast:copper_coins'
        ]
    )
    // 村正 
    event.shaped(Item.of('iss_magicfromtheeast:muramasa', 1), [
        '  A',
        'CA ',
        'BC '
    ],
        {
            A: 'irons_spellbooks:blood_vial',
            B: 'iss_magicfromtheeast:red_shaft',
            C: 'minecraft:iron_ingot'
        })
    // 奥术遗物
    event.shapeless(
        Item.of('iss_magicfromtheeast:arcane_relics', 3),
        [
            'irons_spellbooks:arcane_essence',
            '#c:jades',
            'iss_magicfromtheeast:bottle_of_souls'
        ]
    )
    // 道冠
    event.shaped(Item.of('iss_magicfromtheeast:taoist_helmet', 1), [
        'ABA',
        'A A',
        '   '
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:yin_yang_core'
        })
    // 道袍
    event.shaped(Item.of('iss_magicfromtheeast:taoist_chestplate', 1), [
        'A A',
        'ABA',
        'AAA'
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:yin_yang_core'
        })
    //  云袜
    event.shaped(Item.of('iss_magicfromtheeast:taoist_leggings', 1), [
        'ABA',
        'A A',
        'A A'
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:yin_yang_core'
        })
    // 云履
    event.shaped(Item.of('iss_magicfromtheeast:taoist_boots', 1), [
        '   ',
        'A A',
        'ABA'
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:yin_yang_core'
        })
    // 乌帽
    event.shaped(Item.of('iss_magicfromtheeast:onmyoji_helmet', 1), [
        'ABA',
        'A A',
        '   '
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:crystallized_soul'
        })
    // 狩衣
    event.shaped(Item.of('iss_magicfromtheeast:onmyoji_chestplate', 1), [
        'A A',
        'ABA',
        'AAA'
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:crystallized_soul'
        })
    //  指贯
    event.shaped(Item.of('iss_magicfromtheeast:onmyoji_leggings', 1), [
        'ABA',
        'A A',
        'A A'
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:crystallized_soul'
        })
    // 木屐
    event.shaped(Item.of('iss_magicfromtheeast:onmyoji_boots', 1), [
        '   ',
        'A A',
        'ABA'
    ],
        {
            A: 'iss_magicfromtheeast:arcane_relics',
            B: 'iss_magicfromtheeast:crystallized_soul'
        })
})
    