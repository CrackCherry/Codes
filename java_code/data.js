let datas = {
    0 : "public class Main\n" +
        "{\n" +
        "\tpublic static void main(String[] args)\n" +
        "\t{\n" +
        "\t\t//1、 final 修饰的类不能被继承。\n" +
        "\t\tClass2 class2 = new Class2();\n" +
        "\t}\n" +
        "}\n" +
        "final class Class1{\n" +
        "\n" +
        "}\n" +
        "class Class2 extends Class1{\n" +
        "\n" +
        "}",
    1 : "public class Main\n" +
        "{\n" +
        "\tpublic static void main(String[] args)\n" +
        "\t{\n" +
        "\t\t//2、 final 修饰的方法不能被子类复写。\n" +
        "\t\tClass2 class2 = new Class2();\n" +
        "\t}\n" +
        "}\n" +
        "class Class1{\n" +
        "\tfinal void fun(){\n" +
        "\t\tSystem.out.println(\"Class1的方法\");\n" +
        "\t}\n" +
        "}\n" +
        "class Class2 extends Class1{\n" +
        "\tvoid fun(){\n" +
        "\t\tSystem.out.println(\"重写class方法\");\n" +
        "\t}\n" +
        "}",
    3 : "public class Main\n" +
        "{\n" +
        "\tpublic static void main(String[] args)\n" +
        "\t{\n" +
        "\t\t//3、 final 修饰的变量（成员变量或局部变量）即为常量，只能赋值一次。\n" +
        "\t\tClass1 class1 = new Class1();\n" +
        "\t}\n" +
        "}\n" +
        "class Class1{\n" +
        "\tfinal int num = 0;\n" +
        "\tClass1(){\n" +
        "\t\tfinal  int num2 = 1;\n" +
        "\n" +
        "\t\tthis.num = 10;\n" +
        "\t\tnum2 = 10;\n" +
        "\t}\n" +
        "}"
}
