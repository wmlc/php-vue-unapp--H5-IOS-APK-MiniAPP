<?php
namespace app\adminapi\validate\setting;

use think\Validate;

class SystemAdminValidata extends Validate
{
    /**
     * 定义验证规则
     * 格式：'字段名'    =>    ['规则1','规则2'...]
     *
     * @var array
     */
    protected $rule = [
        'account' => ['require', 'alphaDash'],
        'conf_pwd' => 'require',
        'pwd' => 'require',
        'real_name' => 'require',
        'roles' => ['require', 'array'],
    ];

    /**
     * 定义错误信息
     * 格式：'字段名.规则名'    =>    '错误信息'
     *
     * @var array
     */
    protected $message = [
        'account.require' => '请填写管理员账号',
        'account.alphaDash' => '管理员账号为应为和字母',
        'conf_pwd.require' => '请输入确认密码',
        'pwd.require' => '请输入密码',
        'real_name.require' => '请输管理员姓名',
        'roles.require' => '请选择管理员身份',
        'roles.array' => '身份必须为数组',
    ];

    protected $scene = [
        'get' => ['account', 'pwd'],
        'update' => ['account', 'roles'],
    ];


}