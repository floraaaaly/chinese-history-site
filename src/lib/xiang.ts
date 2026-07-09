// 意象之网：逐首据诗中真实意象提炼的核心意象词汇 → 诗（一首诗归属其含有的多个意象）
// 诗境页与诗词详情页共用，保证「意象为网」在全站一致
export const xiangGroups: { name: string; ids: string[] }[] = [
  { name: '山', ids: ['duan-ge-xing', 'chun-wang', 'man-jiang-hong', 'jiang-xue', 'yin-jiu-wu', 'shan-ju-qiu-ming', 'chu-sai', 'yong-yu-le-jingkou', 'zuoqian-languan', 'guo-guren-zhuang', 'yu-jia-ao', 'guan-cang-hai', 'bo-chuan-guazhou', 'shi-hui-yin', 'baixuege', 'yuzhong-tibi', 'shanpoyang-tongguan', 'deng-guanquelou', 'yanqiu-ci', 'changxiangsi-nalan', 'gui-yuan-tianju', 'lu-zhai', 'dingfengbo-sushi', 'you-shanxicun', 'ti-xilin-bi', 'furong-lou', 'xijiangyue-xin'] },
  { name: '江河', ids: ['duan-ge-xing', 'jiang-xue', 'shan-ju-qiu-ming', 'yu-mei-ren', 'nian-nu-jiao-chibi', 'yong-yu-le-jingkou', 'zuoqian-languan', 'guo-ling-tan', 'jiang-jin-jiu', 'deng-gao', 'guan-cang-hai', 'xiari-jueju', 'jian-jia', 'shanpoyang-tongguan', 'chunjiang-huayueye', 'deng-guanquelou', 'changxiangsi-nalan', 'wangjiangnan-wen', 'wuti-lishangyin', 'guan-shu-yougan', 'you-shanxicun', 'xiangjianhuan-liyu', 'huatangchun-nalan', 'langtaosha-liyu', 'yijianmei-liqingzhao'] },
  { name: '月', ids: ['jing-ye-si', 'shan-ju-qiu-ming', 'chu-sai', 'yu-mei-ren', 'nian-nu-jiao-chibi', 'sheng-cha-zi-yuanxi', 'shui-diao-getou', 'bo-chuan-guazhou', 'chunjiang-huayueye', 'yu-lin-ling', 'wangjiangnan-wen', 'xiangjianhuan-liyu', 'dielianhua-nalan', 'qingyuan-yuanxi', 'xijiangyue-xin', 'yijianmei-liqingzhao'] },
  { name: '草木', ids: ['sheng-sheng-man', 'yi-shandong-xiongdi', 'shan-ju-qiu-ming', 'guo-guren-zhuang', 'guo-ling-tan', 'li-sao', 'deng-gao', 'guan-cang-hai', 'jian-jia', 'min-nong', 'youzi-yin', 'gui-yuan-tianju', 'xiangjianhuan-liyu', 'huanxisha-nalan', 'xijiangyue-xin', 'zuihuayin-liqingzhao', 'sumuzhe-fan'] },
  { name: '花', ids: ['chun-wang', 'sheng-sheng-man', 'yin-jiu-wu', 'mei-hua', 'yu-mei-ren', 'sheng-cha-zi-yuanxi', 'guo-guren-zhuang', 'wuyi-xiang', 'huanxisha-yanshu', 'chun-xiao', 'dingfengbo-sushi', 'you-shanxicun', 'langtaosha-liyu', 'zuihuayin-liqingzhao', 'rumengling-liqingzhao'] },
  { name: '关塞', ids: ['man-jiang-hong', 'song-yuan-er', 'chu-sai', 'zuoqian-languan', 'yu-jia-ao', 'baixuege', 'mulan-shi', 'shanpoyang-tongguan', 'liangzhou-ci-wanghan', 'yanmenta-xing'] },
  { name: '兵戈', ids: ['man-jiang-hong', 'nian-nu-jiao-chibi', 'chi-bi-dumu', 'yong-yu-le-jingkou', 'shi-er', 'yuzhong-tibi', 'mulan-shi', 'yanmenta-xing', 'pozhenzi-xin'] },
  { name: '相思', ids: ['xiang-si', 'jin-se', 'chang-hen-ge', 'li-sao', 'jian-jia', 'wuti-lishangyin', 'queqiao-xian', 'wangjiangnan-wen', 'mulanhua-nalan', 'huanxisha-nalan', 'huatangchun-nalan', 'dielianhua-nalan', 'yijianmei-liqingzhao', 'zuihuayin-liqingzhao'] },
  { name: '风', ids: ['yu-mei-ren', 'chi-bi-dumu', 'guo-ling-tan', 'deng-gao', 'guan-cang-hai', 'bo-chuan-guazhou', 'jihai-zashi', 'bie-dong-da', 'baixuege', 'song-dushaofu', 'yu-lin-ling', 'changxiangsi-nalan', 'chun-xiao', 'dingfengbo-sushi', 'wuti-lishangyin', 'mulanhua-nalan', 'huanxisha-nalan', 'sumuzhe-fan'] },
  { name: '禽鸟', ids: ['chun-wang', 'yin-jiu-wu', 'jin-se', 'chang-hen-ge', 'wuyi-xiang', 'huanxisha-yanshu', 'gui-yuan-tianju', 'chun-xiao', 'dielianhua-nalan', 'xijiangyue-xin', 'rumengling-liqingzhao', 'yijianmei-liqingzhao'] },
  { name: '雪', ids: ['jiang-xue', 'mei-hua', 'zuoqian-languan', 'bie-dong-da', 'baixuege', 'maitan-weng', 'yanqiu-ci', 'changxiangsi-nalan', 'dielianhua-nalan'] },
  { name: '酒', ids: ['duan-ge-xing', 'song-yuan-er', 'jiang-jin-jiu', 'yu-lin-ling', 'huanxisha-yanshu', 'liangzhou-ci-wanghan', 'you-shanxicun', 'zuihuayin-liqingzhao', 'sumuzhe-fan'] },
  { name: '马', ids: ['gai-xia-ge', 'chu-sai', 'yong-yu-le-jingkou', 'jihai-zashi', 'baixuege', 'liangzhou-ci-wanghan', 'pozhenzi-xin'] },
  { name: '柳', ids: ['song-yuan-er', 'sheng-cha-zi-yuanxi', 'yu-lin-ling'] },
  { name: '雁', ids: ['sheng-sheng-man', 'yu-jia-ao', 'bie-dong-da', 'yanqiu-ci', 'yijianmei-liqingzhao'] },
  { name: '乡关', ids: ['hui-xiang-oushu', 'jing-ye-si', 'yi-shandong-xiongdi', 'changxiangsi-nalan'] },
  { name: '天地', ids: ['deng-youzhoutai', 'shui-diao-getou', 'guan-cang-hai'] },
  { name: '火', ids: ['chun-wang', 'shi-hui-yin', 'maitan-weng', 'qingyuan-yuanxi'] },
];

// 每首诗 → 它的核心意象
export const poemXiang: Record<string, string[]> = {};
xiangGroups.forEach((g) => g.ids.forEach((id) => { (poemXiang[id] = poemXiang[id] || []).push(g.name); }));
