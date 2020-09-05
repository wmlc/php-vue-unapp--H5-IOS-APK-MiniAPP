<?php
/**
 * @author: 吴昊天<442384644@qq.com>
 * @day: 2020/7/3
 */
declare (strict_types=1);

namespace app\dao\shipping;

use app\dao\BaseDao;
use app\model\shipping\ShippingTemplates;

/**
 *
 * Class ShippingTemplatesDao
 * @package app\dao\shipping
 */
class ShippingTemplatesDao extends BaseDao
{

    /**
     * 设置模型
     * @return string
     */
    protected function setModel(): string
    {
        return ShippingTemplates::class;
    }

    /**
     * 获取选择模板列表
     * @return array
     */
    public function getSelectList()
    {
        return $this->search()->order('sort DESC,id DESC')->column('id,name');
    }

    /**
     * 获取
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getShippingList(array $where, int $page, int $limit)
    {
        return $this->search($where)->order('sort DESC')->page($page, $limit)->select()->toArray();
    }

    /**
     * 插入数据返回主键id
     * @param array $data
     * @return int|string
     */
    public function insertGetId(array $data)
    {
        return $this->getModel()->insertGetId($data);
    }

    /**
     * 获取运费模板指定条件下的数据
     * @param array $where
     * @param string $field
     * @param string $key
     * @return array
     */
    public function getShippingColumn(array $where, string $field, string $key)
    {
        return $this->search($where)->column($field, $key);
    }
}
